import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';
import styled from '@emotion/styled';

import PackageImgTitle from 'components/Listing/PackageImgTitle';
import PackagePriceExperiment from 'components/Listing/PackagePriceExperiment';
import PackageDaysDiscountExperiment from 'components/Listing/PackageDaysDiscountExperiment';
import PackageCities from 'components/Listing/PackageCities';
import PackageIncExc from 'components/Listing/PackageIncExc';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import {
  trackSegment, PACKAGE_CLICKED, PACKAGE_VIEWED,
  PACKAGE_COMPARE_ADDED, HOTEL_CATEGORY_CLICKED
} from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
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
    this.sensorVisibility = false;

    this.trackSegmentEvent = this.trackSegmentEvent.bind(this);
    this.trackLeadClickEvent = this.trackLeadClickEvent.bind(this);
    this.renderHotelSelections = this.renderHotelSelections.bind(this);
  }

  onSensorChange(isVisible, ctaTextPackage, toDestination) {
    if (!this.sensorVisibility && isVisible) {
      this.sensorVisibility = isVisible;
      this.trackSegmentEvent(PACKAGE_VIEWED, ctaTextPackage, toDestination);
    }
  };

  handleChange = (hotelId) => {
    this.setState({ hotelId });
    rescue( () => {
      const { card, setActiveHotels, isPackageRevamp } = this.props;
      const hotelInfo = card.family_packages[hotelId];
      isPackageRevamp ? setActiveHotels(card.id, hotelId) : null;
      this.trackSegmentEvent(HOTEL_CATEGORY_CLICKED, `${hotelInfo[0]} Star`, card.destinations[0].name || '', hotelInfo[1]);
    });
  };

  trackSegmentEvent(event, ctaTextPackage, toDestination, value) {
    rescue( () => {
      const { card } = this.props;
      const hotelInfo = card.family_packages[this.state.hotelId];

      trackSegment({
        event: event,
        category: `Destination:${toDestination}`,
        section: 'Package List/View Details',
        object: `Package/${card.id}`,
        cta: ctaTextPackage,
        package_id: card.id,
        destination_list: toDestination,
        destination_id: card.destinations[0].id,
        label: `Days:${card.days}::Index:${this.props.index + 1}::Hotel:${hotelInfo[0]} Star`,
        value: value ? value : hotelInfo[1],
        package_name: card.name
      });
    });
  };

  trackLeadClickEvent(ctaTextForm, toDestination) {
    const pId = this.props.card.id;
    const section = 'Get Quotes Button';
    const category = `Destination:${toDestination}`;
    const object = `Package/${pId}`;
    this.props.trackLeadFunnelClick(section, category, object, ctaTextForm, pId);
    return true;
  };

  renderHotelSelections() {
    const { card, heading } = this.props;

    const hotelsIds = Object.keys(card.family_packages || {});

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map(hotelId => {
        return (
          <div key={hotelId} className="iblock hotelStarItem mr8">
            <input
              name={`${heading}_hotel_star_input_${card.id}`}
              type="radio"
              className="checkbox-common radio-common-round"
              checked={hotelId.toString() === this.state.hotelId.toString()}
              id={`input_${card.id}_${hotelId}`}
              onChange={() => this.handleChange(hotelId)}
              value={hotelId}
            />
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
      card,isPackageRevamp, comparingPackages, addToComparingPackages, removeFromComparingPackages, formToLocation
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

    const renderChild = () => (
      <div className="relative">
        <PackageImgTitle isLargeImg={true} name={card.plp_heading || card.name} altText={card.set_url}
                         imageUrl={card.image_url} imagekitUrl={card.imagekit_url} />
        {card.mvp_tags && card.mvp_tags.length ? <GCardTagsSpan className="absolute z2 radius2 f12 fw7 t10 l10 pfc3 pl15 pr15 flex alignCenter justifyCenter">{card.mvp_tags[0]}</GCardTagsSpan> : null}
      </div>
    );

    return (
      <div className="row row- mb8 mt8 relative exp-1 package-card">
        {
          __SERVER__ ?
            <a
              href={`/packages/${card.set_url}?id=${hotelId}`}
              className="sfcw"
              onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
            >
              { renderChild() }
            </a> :
            <Link
              to={`/packages/${card.set_url}?id=${hotelId}`}
              className="sfcw"
              onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
            >
              { renderChild() }
            </Link>
        }
        <Sensor onChange={isVisible => this.onSensorChange(isVisible, ctaTextPackage, toDestination)} intervalDelay={3000}/>
        {
          !isPackageRevamp ?
            <div className="addCompareDiv">
              <input
                type="checkbox"
                id={`AddCompareCheckBox-${card.id}`}
                className="fixed-menu-button"
                checked={
                  /* eslint-disable eqeqeq */
                  comparingPackages.findIndex(pkg => pkg.id == card.id) !== -1
                  /* eslint-enable */
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    if (comparingPackages.length === 2) {
                      return;
                    }
                    addToComparingPackages(card);
                    this.trackSegmentEvent(PACKAGE_COMPARE_ADDED, ctaTextPackage, toDestination);
                  } else {
                    removeFromComparingPackages(card);
                  }
                }}
              />
              <label
                className="sfcw f14 fw7"
                htmlFor={`AddCompareCheckBox-${card.id}`}
              >Add To Compare</label>
            </div> : null
        }
        <div className={`row row- sbcw ${isPackageRevamp ? 'pt8 pb8' : 'p8'}`}>
          <div className={`${isPackageRevamp ? '' : 'pl8 pr8'}`}>
            <div className="row row-">
              <div className="col-xs-12 pl0 pr0 f10">
                <PackageCities cities={card.city_list_with_days || {}}/>
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
              { this.renderHotelSelections() }
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
                    onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
                    className="btn-pri wfull ripple"
                  >
                    <div className="wave-dark"/>
                    {ctaTextPackage}
                  </Link>
                </div>
                <div className="col-xs-6 pl4 pr0">
                  <FormOneCTA
                    rtProps={{
                      to_loc: formOneToLocation,
                      trip_days: card.days.toString(),
                      packageId: card.id,
                      page: 'Package List Page',
                      section: 'Package List',
                      cta: ctaTextForm,
                      object: `Package/${card.id}`,
                      addtl_info: additionalInfoText
                    }}
                    clickHandler={() =>  {
                      this.trackLeadClickEvent(ctaTextForm, toDestination);
                    }}
                  >
                    <div className="btn-filled-pri wfull customized-variation " data-obj={JSON.stringify({to_loc: formOneToLocation, trip_days: card.days.toString()})}>
                      <div className="wave"/>
                      {ctaTextForm}</div>
                  </FormOneCTA>
                </div>
              </div> :  null
          }
        </div>
      </div>
    );
  }
}

PackageCardExperiment.propTypes = {
  card: PropTypes.object.isRequired,
  trackLeadFunnelClick: PropTypes.func,
  comparingPackages: PropTypes.array.isRequired,
  addToComparingPackages: PropTypes.func,
  removeFromComparingPackages: PropTypes.func,
  index: PropTypes.number,
  formToLocation: PropTypes.string,
  promoTag: PropTypes.number,
  setActiveHotels: PropTypes.func.isRequired,
  isPackageRevamp: PropTypes.bool,
  heading: PropTypes.string
};

PackageCardExperiment.defaultProps = {
  trackLeadFunnelClick: () => {},
  formToLocation: '',
  removeFromComparingPackages: () => {},
  addToComparingPackages: () => {},
  promoTag: 0,
  heading: 'plp'
};

export default PackageCardExperiment;
