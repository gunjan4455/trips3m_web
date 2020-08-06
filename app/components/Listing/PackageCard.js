import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';
import styled from '@emotion/styled';

import PackageImgTitle from 'components/Listing/PackageImgTitle';
import PackagePrice from 'components/Listing/PackagePrice';
import PackageDaysDiscount from 'components/Listing/PackageDaysDiscount';
import PackageCities from 'components/Listing/PackageCities';
import PackageIncExc from 'components/Listing/PackageIncExc';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import {
  trackSegment, PACKAGE_CLICKED, PACKAGE_VIEWED,
  PACKAGE_COMPARE_ADDED, setCookie
} from '../../actions/segmentEvents';
import './PackageCities.scss';
import { parseDestinationsToShow } from '../../utils/parsers';

const GCardTagsSpan = styled.span({
  height: '24px',
  backgroundColor: '#fac22e'
});

class PackageCard extends Component {
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
    const { card } = this.props;

    const hotelsIds = Object.keys(card.family_packages || {});

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map(hotelId => {
        return (
          <div key={hotelId} className="iblock mr8">
            <input
              name={`hotel_star_input_${card.id}`}
              type="radio"
              className="checkbox-common radio-common-round"
              checked={hotelId.toString() === this.state.hotelId.toString()}
              id={`input_${card.id}_${hotelId}`}
              onChange={() => this.setState({ hotelId })}
              value={hotelId}
            />
            <label className="" htmlFor={`input_${card.id}_${hotelId}`}>
              {card.family_packages[hotelId][0]} Star
            </label>
          </div>
        );
      });

      return <div className="row row-">{hotelCheckboxes}</div>;
    }

    return null;
  };

  render() {
    const {
      card, isMultiDestination, multiDestinationTexts,
      comparingPackages, addToComparingPackages, removeFromComparingPackages
    } = this.props;

    const additionalInfoText = `Traveler has expressed interest in ${card.days} Days , ${card.nights} nights with cities ${card.cities}. For more details, see the <a href='/packages/${card.set_url}'>link</a>`;

    // TODO: Ugly code. Handle it differently
    let toDestination = '';
    try {
      toDestination = card.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }

    const formOneToLocation = isMultiDestination ? parseDestinationsToShow(multiDestinationTexts, ',') : toDestination;
    const ctaTextPackage = 'View Details';
    const ctaTextForm = 'Customize';
    const { family_packages = {} } = card;
    const hotelWithPrices = family_packages[this.state.hotelId] ? family_packages[this.state.hotelId] : [];

    return (
      <div className="row row- mb8 mt8 relative">
        <Link
          to={`/packages/${card.set_url}?id=${this.state.hotelId}`}
          className="sfcw"
          onClick={() =>
            this.trackSegmentEvent(
              PACKAGE_CLICKED,
              ctaTextPackage,
              toDestination
            )
          }
        >
          <div className="relative">
            <PackageImgTitle name={card.name} altText={card.set_url}
                             imageUrl={card.image_url} imagekitUrl={card.imagekit_url} />
            {mvp_tags.length ? (
              <GCardTagsSpan className="absolute z2 radius2 f12 fw7 t10 l10 pfc3 pl15 pr15 flex alignCenter justifyCenter">
                {card.mvp_tags[0]}
              </GCardTagsSpan>
            ) : null}
          </div>
        </Link>
        <Sensor
          onChange={isVisible =>
            this.onSensorChange(isVisible, ctaTextPackage, toDestination)
          }
          intervalDelay={3000}
        />
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
            onChange={e => {
              if (e.target.checked) {
                if (comparingPackages.length === 2) {
                  // this.setState({ selected: true });
                  return;
                }
                addToComparingPackages(card);
                this.trackSegmentEvent(
                  PACKAGE_COMPARE_ADDED,
                  ctaTextPackage,
                  toDestination
                );
              } else {
                // this.setState({ selected: false });
                removeFromComparingPackages(card);
              }
            }}
          />
          <label
            className="sfcw f12"
            htmlFor={`AddCompareCheckBox-${card.id}`}
          >
            Add To Compare
          </label>
        </div>
        <div className="row row- p8 pt15 sbcw">
          <div className="row row-">
            <div className="col-xs-7 pl0 pr8">
              <PackagePrice
                price={
                  hotelWithPrices.length
                    ? hotelWithPrices[2]
                    : card.price_total
                }
                priceUnit={card.mini_desc}
                currency={card.currency}
                discount={
                  hotelWithPrices.length
                    ? hotelWithPrices[2] - hotelWithPrices[1]
                    : card.price_total - card.discounted_price
                }
              />
            </div>
            <div className="col-xs-5 pl8 pr0">
              <PackageDaysDiscount
                days={card.days}
                nights={card.nights}
                price={card.price_total}
                discount={card.price_total - card.discounted_price}
              />
            </div>
            <div className="col-xs-12 pl0 pr0">
              <PackageCities cities={card.city_list_with_days || {}} />
            </div>
          </div>
          {this.renderHotelSelections()}
          <div className="row row- inclusion-height-box">
            <PackageIncExc
              inclusions={card.inclusions}
              id={`card_${card.id}`}
            />
          </div>
          <div className="row row- pt8">
            <div className="col-xs-6 pl0 pr8">
              <Link
                to={`/packages/${card.set_url}?id=${this.state.hotelId}`}
                onClick={() =>
                  this.trackSegmentEvent(
                    PACKAGE_CLICKED,
                    ctaTextPackage,
                    toDestination
                  )
                }
                className="btn-pri wfull ripple"
              >
                <div className="wave-dark" />
                {ctaTextPackage}
              </Link>
            </div>
            <div className="col-xs-6 pl8 pr0">
              <FormOneCTA
                rtProps={{
                  to_loc: formOneToLocation,
                  trip_days: card.days.toString(),
                  packageId: card.id,
                  page: 'Package List Page',
                  section: 'Package List',
                  cta: ctaTextForm,
                  object: `Package/${card.id}`,
                  addtl_info: additionalInfoText,
                }}
                clickHandler={() => {
                  setCookie('to_loc', formOneToLocation);
                  setCookie('trip_days', card.days.toString());
                  this.trackLeadClickEvent(ctaTextForm, toDestination);
                }}
              >
                <div className="btn-filled-pri wfull customized-variation " data-obj={JSON.stringify({to_loc: formOneToLocation, trip_days: card.days.toString()})}>
                  <div className="wave" />
                  {ctaTextForm}
                </div>
              </FormOneCTA>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PackageCard.propTypes = {
  card: PropTypes.object.isRequired,
  trackLeadFunnelClick: PropTypes.func,
  comparingPackages: PropTypes.array.isRequired,
  addToComparingPackages: PropTypes.func.isRequired,
  removeFromComparingPackages: PropTypes.func.isRequired,
  index: PropTypes.number,
  isMultiDestination: PropTypes.bool,
  multiDestinationTexts: PropTypes.array
};

PackageCard.defaultProps = {
  trackLeadFunnelClick: () => {
  },
  isMultiDestination: false,
  multiDestinationTexts: []
};

export default PackageCard;
