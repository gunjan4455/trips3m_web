import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';
import styled from '@emotion/styled';

import PackageImgTitleDeals from 'components/Listing/PackageImgTitleDeals';
import PackagePriceExperiment from 'components/Listing/PackagePriceExperiment';
import PackageDaysDiscountExperiment from 'components/Listing/PackageDaysDiscountExperiment';
import PackageCities from 'components/Listing/PackageCities';
import PackageIncExcDeals from 'components/Listing/PackageIncExcDeals';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import {
  trackSegment, PACKAGE_CLICKED, PACKAGE_VIEWED,
  PACKAGE_COMPARE_ADDED
} from '../../actions/segmentEvents';
import './PackageCities.scss';
import './Listing.scss';
import { parseDestinationsToShow } from '../../utils/parsers';
import { LuxuryPackageIcon } from 'helpers/Icon/Icon';

const GCardTagsSpan = styled.span({
  height: '24px',
  backgroundColor: '#fac22e'
});

const GDiscountDiv = styled.div({
  boxShadow: '0 0 6px rgba(0,0,0,0.5)',
});

const GHighlightBannerDiv = styled.div({
  backgroundColor: '#ffc057',
});

const GLuxuryDiv = styled.div({
  width: '124px',
  height: '55px',
  left: '-3px',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  overflow: 'hidden',
  top: '8px'
});

class PackageCardDealsAndLuxury extends Component {
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

  trackSegmentEvent(event, ctaTextPackage, toDestination) {
    const { card } = this.props;
    trackSegment({
      event: event,
      category: `Destination:${toDestination}`,
      section: 'Package List/View Details',
      object: `Package/${card.id}`,
      cta: ctaTextPackage,
      package_id: card.id,
      destination_list: toDestination,
      destination_id: card.destinations[0].id,
      label: `Days:${card.days}::Index:${this.props.index + 1}`,
      value: card.price_total,
      package_name: card.name
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
    const { card, setActiveHotels } = this.props;

    const hotelsIds = Object.keys(card.family_packages || {});

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map((hotelId, i) => {
        return (
          <div key={hotelId} className="iblock flex alignCenter hotelStarItem mr8">
            <input
              name={`hotel_star_input_${card.id}`}
              type="radio"
              className="hide"
              checked={hotelId.toString() === this.state.hotelId.toString()}
              id={`input_${card.id}_${hotelId}`}
              onChange={() => {
                this.setState({ hotelId });
                setActiveHotels(card.id, hotelId);
              }}
              value={hotelId}
            />
            <label className="f12" htmlFor={`input_${card.id}_${hotelId}`}>
              {card.family_packages[hotelId][0]}
            </label>
            {i < hotelsIds.length - 1 ? ', ' : ''}
          </div>
        );
      });

      return <div className="row row- star-ratings-selection flex alignCenter">{hotelCheckboxes}</div>;
    }

    return null;
  };

  getCardTag = (hideDiscount) => {
    const { tag, card } = this.props;
    if (tag === 'deals') {
      this.label = card.labels[1];
      this.buttonText = 'Check Availability';
      return hideDiscount ? <div />: <GDiscountDiv className='absolute radius2 t15 sbcw l15 z2 text-center'>
        <p className='f12 m0 p5'>Deal of the Day</p>
        <div className='flex alignCenter pbc1 justifyCenter pt5 pb5 pl8 pr8'>
          <p className='f32 sfcw fw9 m0'>{Math.round(card.discount_percentage)}</p>
          <div className='ml2'>
            <p className='f12 sfcw m0'>%</p>
            <p className='f12 sfcw m0'>off</p>
          </div>
        </div>
      </GDiscountDiv>;
    } else if (tag === 'luxury') {
      this.label = 'Hassel Free Booking | All Inclusive | 24x7 Assistance';
      this.buttonText = 'Customize';
      return <GLuxuryDiv className='absolute radius2 t15 l15 z2 '><LuxuryPackageIcon /></GLuxuryDiv>;
    }
    return <div></div>;
  };

  render() {
    const { card, formToLocation, tag } = this.props;

    const additionalInfoText = `Traveler has expressed interest in ${card.days} Days , ${card.nights} nights with cities ${card.cities}. For more details, see the <a href='/packages/${card.set_url}'>link</a>`;

    // TODO: Ugly code. Handle it differently
    let toDestination = '';
    try {
      toDestination = card.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }

    const formOneToLocation = formToLocation ? formToLocation : toDestination;
    const isDeal = tag === 'deals';
    const isLuxury = tag === 'luxury';
    const ctaTextPackage = isDeal ? 'View Deal' : 'View Details';
    const { isExperiment } = card;
    let hideDiscount = false, replacePrice = false, family_packages = card.family_packages;
    if (isExperiment) {
      hideDiscount = isExperiment.hideDiscount;
      replacePrice = isExperiment.replacePrice;
    }
    family_packages = replacePrice ? card.family_packages_map : card.family_packages;
    const hotelWithPrices = family_packages[this.state.hotelId] ? family_packages[this.state.hotelId] : [];
    const packageTag = this.getCardTag(hideDiscount);
    const ctaTextForm = this.buttonText;

    const price = family_packages[card.id];
    const dealnLuxury = {
      price: price && price[1],
      starRating: price && price[0],
      isFlight: !!card.inclusions.filter((inc) => (inc.key.toLowerCase() === 'flights' && inc.available)).length
    };

    return (
      <div className="row row- mb8 mt8 relative exp-1 package-card">
        <GHighlightBannerDiv className='p5 f12 pl15 pr15 text-center pfc3 wfull'>{this.label}</GHighlightBannerDiv>
        <div className='relative sbcw'>
          <Link
            to={`/packages/${card.set_url}?id=${this.state.hotelId}`}
            className="sbcw"
            onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
          >
            <div className="relative">
              <PackageImgTitleDeals isLargeImg={true} name={card.plp_heading || card.name} altText={card.set_url}
                                    imageUrl={card.image_url} imagekitUrl={card.imagekit_url} />

              {card.mvp_tags.length ? <GCardTagsSpan
                className="absolute z2 radius2 f12 fw7 t10 l10 pfc3 pl15 pr15 flex alignCenter justifyCenter">{card.mvp_tags[0]}</GCardTagsSpan> : null}

              {packageTag}

              <div className="absolute b0 l0 r0 mt8">
                <PackageIncExcDeals inclusions={card.inclusions} id={`card_${card.id}`} />
              </div>

            </div>
            <h3 className="relative fw9 f14 pl15 pr15 pfc3 mt8">{card.name}</h3>
          </Link>
          <Sensor onChange={isVisible => this.onSensorChange(isVisible, ctaTextPackage, toDestination)}
                  intervalDelay={3000} />
          <div className="row row- p8 sbcw">
            <div className="pl8 pr8">
              <div className="row row- flex alignCenter">
                <div className="pl0">
                  <PackageDaysDiscountExperiment
                    days={card.days}
                    nights={card.nights}
                  />
                </div>
                <div className="flex alignCenter mt3">
                  {this.renderHotelSelections()}
                  <p className='iblcok m0 ml5 f12'>Star Hotels Included</p>
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

              {
                isDeal &&
                <div className="row row- mt8 mb0">
                  <div className="col-xs-12 p0">
                    <p className="f12"><strong>Validity: </strong> {card.labels[2]}</p>
                  </div>
                </div>
              }

              <div className="row row-">
                <div className="col-xs-12 pl0 pr0 f10">
                  <PackageCities isDealsCard={true} cities={card.city_list_with_days || {}} />
                </div>
              </div>

            </div>
            <div className="row row- pt8">
              <div className="col-xs-6 pl0 pr4">
                <Link
                  to={`/packages/${card.set_url}?id=${this.state.hotelId}`}
                  onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
                  className="btn-pri wfull ripple"
                >
                  {ctaTextPackage}
                </Link>
              </div>
              <div className="col-xs-6 pl4 pr0" onClick={() => this.props.getPackageData(dealnLuxury)}>
                <FormOneCTA
                  tag={tag}
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
                  clickHandler={() => this.trackLeadClickEvent(ctaTextForm, toDestination)}
                  deals={true}
                  budget={card.discounted_price}
                >
                  <div className="btn-filled-pri pl8 pr8 wfull customized-variation "
                       data-obj={JSON.stringify({ to_loc: formOneToLocation, trip_days: card.days.toString() })}>
                    {ctaTextForm}</div>
                </FormOneCTA>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PackageCardDealsAndLuxury.propTypes = {
  card: PropTypes.object.isRequired,
  trackLeadFunnelClick: PropTypes.func,
  comparingPackages: PropTypes.array.isRequired,
  addToComparingPackages: PropTypes.func.isRequired,
  removeFromComparingPackages: PropTypes.func.isRequired,
  index: PropTypes.number,
  isMultiDestination: PropTypes.bool,
  multiDestinationTexts: PropTypes.array,
  formToLocation: PropTypes.string,
  tag: PropTypes.string,
  setActiveHotels: PropTypes.func.isRequired,
  getPackageData: PropTypes.func.isRequired
};

PackageCardDealsAndLuxury.defaultProps = {
  trackLeadFunnelClick: () => {
  },
  isMultiDestination: false,
  multiDestinationTexts: [],
  formToLocation: '',
  tag: ''
};

export default PackageCardDealsAndLuxury;
