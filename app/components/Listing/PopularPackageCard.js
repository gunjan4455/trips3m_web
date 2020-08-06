import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';

import PackageImgTitle from 'components/Listing/PackageImgTitle';
import PackagePriceExperiment from 'components/Listing/PackagePriceExperiment';
import PackageDaysDiscountExperiment from 'components/Listing/PackageDaysDiscountExperiment';
import PackageCities from 'components/Listing/PackageCities';
import PackageIncExc from 'components/Listing/PackageIncExc';
import {
  trackSegment, PACKAGE_CLICKED, PACKAGE_VIEWED, HOTEL_CATEGORY_CLICKED
} from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import './PackageCities.scss';
import './Listing.scss';

class PackageCardExperiment extends Component {
  constructor(props) {
    super(props);

    this.state = { hotelId: props.card.id };
    this.sensorVisibility = false;

    this.trackSegmentEvent = this.trackSegmentEvent.bind(this);
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
      const { card } = this.props;
      const hotelInfo = card.familyPackages[hotelId];
      this.trackSegmentEvent(HOTEL_CATEGORY_CLICKED, `${hotelInfo[0]} Star`, card.destinations || '', hotelInfo[1]);
    });
  };

  trackSegmentEvent(event, ctaTextPackage, toDestination, value) {
    rescue( () => {
      const { card } = this.props;
      const hotelInfo = card.familyPackages[this.state.hotelId];

      trackSegment({
        event: event,
        category: `Destination:${card.toDestination}`,
        section: 'Package List/View Details',
        object: `Package/${card.id}`,
        cta: ctaTextPackage,
        package_id: card.id,
        destination_list: card.toDestination,
        label: `Days:${card.days}::Hotel:${hotelInfo[0]} Star`,
        value: value ? value : hotelInfo[1],
        package_name: card.name
      });
    });
  };

  renderHotelSelections() {
    const { card } = this.props;

    const hotelsIds = Object.keys(card.familyPackages || {});

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map(hotelId => {
        return (
          <div key={hotelId} className="iblock hotelStarItem mr8">
            <input
              name={`popular_hotel_star_input_${card.id}`}
              type="radio"
              className="checkbox-common radio-common-round"
              checked={hotelId.toString() === this.state.hotelId.toString()}
              id={`input_${card.id}_${hotelId}`}
              onChange={() => this.handleChange(hotelId)}
              value={hotelId}
            />
            <label className="" htmlFor={`input_${card.id}_${hotelId}`}>
              {card.familyPackages[hotelId][0]} Star
            </label>
          </div>
        );
      });

      return <div className={`row row- star-ratings-selection more-than-three-stars`}>{hotelCheckboxes}</div>;
    }

    return null;
  };

  render() {
    const { card } = this.props;
    // TODO: Ugly code. Handle it differently
    const toDestination = card.destinations;
    const { hotelId } = this.state;
    const ctaTextPackage = 'View Details';
    const { familyPackages = {} } = card;
    const hotelWithPrices = familyPackages && familyPackages[hotelId] ? familyPackages[hotelId] : [];

    const renderChild = () => (
      <div className="relative">
        <PackageImgTitle isLargeImg={true} name={card.destinations} altText={card.imageText}
                         imageUrl={card.imageUrl} imagekitUrl={card.imagekitUrl} />
      </div>
    );

    return (
      <div className="row row- mb8 mt8 relative exp-1 package-card">
        {
          __SERVER__ ?
            <a
              href={`${card.packageUrl}`}
              className="sfcw"
              onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
            >
              { renderChild() }
            </a> :
            <Link
              to={`${card.packageUrl}`}
              className="sfcw"
              onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, ctaTextPackage, toDestination)}
            >
              { renderChild() }
            </Link>
        }
        <Sensor onChange={isVisible => this.onSensorChange(isVisible, ctaTextPackage, toDestination)} intervalDelay={3000}/>
        <div className={`row row- sbcw 'pt8 pb8'}`}>
          <div >
            <div className="row row-">
              <div className="col-xs-12 pl0 pr0 f10">
                <PackageCities cities={card.cityListWithDays || {}}/>
              </div>
            </div>
            <div className="row row-">
              <div className="iblock pl0">
                <PackageDaysDiscountExperiment
                  days={card.days}
                  nights={card.nights}
                  isPackageRevamp={true}
                />
              </div>
              <div className="block">
              { this.renderHotelSelections() }
              </div>
            </div>
            <div className="row row-">
              <div className="col-xs-12 pl0 pr8">
                <PackagePriceExperiment
                  price={hotelWithPrices.length ? hotelWithPrices[2] : card.price}
                  priceUnit={card.miniDesc}
                  currency={card.currency}
                  discount={
                    hotelWithPrices.length
                      ? hotelWithPrices[2] - hotelWithPrices[1]
                      : card.price - card.discountedPrice
                  }
                  promoTag={card.promoTag}
                  totalPrice={card.price}
                  totalDiscount={card.price - card.discountedPrice}
                />
              </div>
            </div>
            <div className="row inclusion-height-box mt8">
              <PackageIncExc inclusions={card.inclusions} id={`card_${card.id}`}
               hotelInfo={card.familyPackages && card.familyPackages[`${hotelId}`]}
               isPackageRevamp={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PackageCardExperiment.propTypes = {
  card: PropTypes.object.isRequired,
};

export default PackageCardExperiment;
