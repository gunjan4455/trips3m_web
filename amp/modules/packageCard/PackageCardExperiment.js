import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import PackageImgTitle from 'amp/modules/packageCard/PackageImgTitle';
import PackagePriceExperiment from 'amp/modules/packageCard/PackagePriceExperiment';
import PackageDaysDiscountExperiment from 'amp/modules/packageCard/PackageDaysDiscountExperiment';
import PackageCities from 'amp/modules/packageCard/PackageCities';
import PackageIncExc from 'amp/modules/packageCard/PackageIncExc';
import Action from 'amp/helpers/Action';
import { parsePrice } from 'amp/utils/parsers';

import './PackageCities.scss';
import './Listing.scss';

const GCardTagsSpan = styled.span({
  height: '24px',
  backgroundColor: '#fac22e'
});

class PackageCardExperiment extends Component {
  constructor(props) {
    super(props);

    this.state = { hotelId: props.card.id };
  }

  renderHotelSelections = (index) => {
    const { card, heading } = this.props;
    const { hotelId } = this.state;

    const hotelsIds = Object.keys(card.family_packages || {});
    hotelsIds.map((id) => {
      card.family_packages[id][3] = parsePrice({ price: card.family_packages[id][1] });
      card.family_packages[id][4] = parsePrice({ price: card.family_packages[id][2] });
    });

    const prices = {
      price : parsePrice({price: card.family_packages[hotelId][1]}),
      discount : parsePrice({price: card.family_packages[hotelId][2]})
    };

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map(hotelId => {
        return (
          <div key={hotelId} className="iblock hotelStarItem mr8">
            <amp-state id={`similarPackages${index}`}>
              <script type="application/json" dangerouslySetInnerHTML={{
                __html: JSON.stringify(card.family_packages)
              }}>
              </script>
            </amp-state>
            <amp-state id={`defaultPrices${index}`}>
              <script type="application/json" dangerouslySetInnerHTML={{
                __html: JSON.stringify(prices)
              }}>
              </script>
            </amp-state>
            <Action events={{ change: [`AMP.setState({
            selectedHotel${index} : event.value,
            hotel${index} : event.value,
            index:index})`] }}>
              {(props) => (
                <input
                  {...props}
                  name={`${heading}_hotel_star_input_${card.id}`}
                  type="radio"
                  className="checkbox-common radio-common-round"
                  checked={hotelId.toString() === this.state.hotelId.toString()}
                  id={`input_${card.id}_${hotelId}`}
                  value={hotelId}
                />)}
            </Action>
            <label className="" htmlFor={`input_${card.id}_${hotelId}`}>
              {card.family_packages[hotelId][0]} Star
            </label>
          </div>
        );
      });

      return <div className={`row row- star-ratings-selection more-than-three-stars`}>{hotelCheckboxes}</div>;
    }

    return null;
  };

  render() {
    const {
      card, isPackageRevamp, comparingPackages, addToComparingPackages, removeFromComparingPackages, formToLocation, index
    } = this.props;

    const additionalInfoText = `Traveler has expressed interest in ${card.days} Days , ${card.nights} nights with cities ${card.cities}. For more details, see the <a href='/packages/${card.set_url}'>link</a>`;

    // TODO: Ugly code. Handle it differently
    let toDestination = '';
    try {
      toDestination = card.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }
    const { hotelId } = this.state;
    const formOneToLocation = formToLocation ? formToLocation : toDestination;
    const ctaTextPackage = 'View Details';
    const ctaTextForm = 'Customize';
    const { isExperiment } = card;
    let hideDiscount = false, replacePrice = false, family_packages = card.family_packages;
    if (isExperiment) {
      hideDiscount = isExperiment.hideDiscount;
      replacePrice = isExperiment.replacePrice;
      family_packages = replacePrice ? card.family_packages_map : card.family_packages;
    }
    const hotelWithPrices = family_packages && family_packages[hotelId] ? family_packages[hotelId] : [];

    return (<div className="row row- mb8 mt8 mr8 relative package-card">
      <Link
        to={`/packages/${card.set_url}?id=${hotelId}`}
        className="sfcw">
        <PackageImgTitle name={card.plp_heading || card.name}
                         altText={card.set_url}
                         imageUrl={card.image_url}
                         imagekitUrl={card.imagekit_url} />
      </Link>
      <div className={`row row- sbcw ${isPackageRevamp ? 'pt8 pb8' : 'p8'}`}>
        <div className={`${isPackageRevamp ? '' : 'pl8 pr8'}`}>
          <div className="row row-">
            <div className="col-xs-12 pl0 pr0 f10">
              <PackageCities cities={card.city_list_with_days || {}} />
            </div>
          </div>
          <div className="row row-">
            <div className="iblock pl0">
              <PackageDaysDiscountExperiment
                days={card.days}
                nights={card.nights}
                isPackageRevamp={isPackageRevamp}
              />
            </div>
            <div className="block">
              {this.renderHotelSelections(index)}
            </div>
          </div>
          <div className="row row-">
            <div className="col-xs-12 pl0 pr8">
              <PackagePriceExperiment
                price={hotelWithPrices.length ? hotelWithPrices[2] : card.price_total}
                priceUnit={card.mini_desc}
                currency={card.currency}
                discount={
                  hotelWithPrices.length
                    ? hotelWithPrices[2] - hotelWithPrices[1]
                    : card.price_total - card.discounted_price
                }
                promoTag={card.promo_tag}
                totalPrice={card.price_total}
                totalDiscount={card.price_total - card.discounted_price}
                hideDiscount={hideDiscount}
                index={index}
                familyPackages={family_packages}
                hotelId={hotelId}
              />
            </div>
          </div>
          <div className="row inclusion-height-box mt8">
            <PackageIncExc inclusions={card.inclusions} id={`card_${card.id}`}
                           hotelInfo={card.family_packages && card.family_packages[`${hotelId}`]}
                           isPackageRevamp={isPackageRevamp}
            />
          </div>
        </div>
        {
          !isPackageRevamp ?
            <div className="row row- pt8">
              <div className="col-xs-6 pl0 pr4">
                <Link
                  to={`/packages/${card.set_url}?id=${hotelId}`}
                  className="btn-pri wfull ripple"
                >
                  <div className="wave-dark" />
                  {ctaTextPackage}
                </Link>
              </div>
              <div className="col-xs-6 pl4 pr0">
                <button className="wfull">
                  <div className="btn-filled-pri wfull customized-variation">
                    <div className="wave" />
                    {ctaTextForm}</div>
                </button>
              </div>
            </div> : null
        }
      </div>
    </div>);
  }
}

PackageCardExperiment.propTypes = {
  card: PropTypes.object.isRequired,
  comparingPackages: PropTypes.array.isRequired,
  addToComparingPackages: PropTypes.func,
  removeFromComparingPackages: PropTypes.func,
  formToLocation: PropTypes.string,
  promoTag: PropTypes.number,
  index: PropTypes.number,
  setActiveHotels: PropTypes.func.isRequired,
  isPackageRevamp: PropTypes.bool,
  heading: PropTypes.string
};

PackageCardExperiment.defaultProps = {
  formToLocation: '',
  removeFromComparingPackages: () => {
  },
  addToComparingPackages: () => {
  },
  promoTag: 0,
  heading: 'plp'
};

export default PackageCardExperiment;
