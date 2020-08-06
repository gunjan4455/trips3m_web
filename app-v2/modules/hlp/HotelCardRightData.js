import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OverAllRating from 'modules/shared/OverAllRating';
import ToolTip from 'modules/shared/ToolTip';
import RatingStar from 'modules/shared/RatingStar';
import Recommended from 'modules/shared/Recommended';
import HotelInclusion from './HotelInclusion';
import Price from 'modules/hotel/components/Price';
import { parsePrice } from 'helpers/parsers';
import { formattedCheckInCheckOut, calculateNights, calculateGuests } from 'modules/hotel/helpers';

class HotelCardRightData extends Component {

  renderB2CPrice = () => {
    const { hotel: { basePrice, available = true }, searchParams: { checkInDate, checkOutDate, rooms } } = this.props;

    if (!available) {
      return <div className="f12 mb15"><span className="f16 fw9 mr4" style={{ color: '#ff3e39' }}>Sold Out</span>
        {formattedCheckInCheckOut(checkInDate, checkOutDate)}</div>;
    }

    return <div className="mb4">
      {
        basePrice ?
          <div>
            <p className="f16 fwb m0 sfc3">
              <Price price={basePrice} />
            </p>
            <p className="f10">{`${calculateNights(checkInDate, checkOutDate)} Nights, ${calculateGuests(rooms)} Guests`}
              <span className="pfc5"> (No extra charges)</span>
            </p>
          </div>
          : 'NA'
      }
    </div>;
  };

  render() {
    const { hotel } = this.props;
    const { currency, priceFrom, priceTo } = hotel.priceRange;
    return (
      <div className="clearfix p8 pb0 relative wfull">
        <div className="mb4 flex flexDColumn">
          <div className="flexFull">
            <div className="mb4 mr8">
              <h3 className="f14 m0 mr8 fw9 text-capitalize">{hotel.displayName}</h3>
              <div className="mt8">
                <span className="iblock tooltipCommon relative z2 mr8">
                  <ToolTip
                    toolTipText={`${hotel.starRating} Star Hotel`}
                    boxStyle={{ textAlign: 'center' }}
                  />
                  <RatingStar rating={hotel.starRating} isEmptyStarsHidden={true} />
                </span>
                <div className="iblock"><OverAllRating overallRating={hotel.userRating} /></div>
              </div>
            </div>
            <div className="m0 mb4 f10 pfc4 dynamicTextInherit">
              {hotel.address && hotel.address.brief}
            </div>
          </div>
        </div>

        {
          (hotel.facilities && hotel.facilities.length) || hotel.topRatedLuxury || hotel.topRatedBudget ?
            <div className="mb4">
              <HotelInclusion luxury={hotel.topRatedLuxury} budget={hotel.topRatedBudget}
                              facilities={hotel.facilities} />
            </div> : null
        }

        {
          hotel.isBookableB2c
            ? this.renderB2CPrice()
            : <div className="mb4">
              <p className="m0 f10 pfc4">Price Range per Night</p>
              <p className="f16 fwb m0 sfc3">
                {
                  priceFrom && priceTo ?
                    `${parsePrice({ price: priceFrom, currency: currency, appendOnly: false })} -
              ${parsePrice({ price: priceTo, currency: currency, appendOnly: false })}` :
                    priceFrom ?
                      `Above ${parsePrice({ price: priceFrom, currency: currency, appendOnly: false })}` :
                      `Below ${parsePrice({ price: priceTo, currency: currency, appendOnly: false })}`
                }
              </p>
            </div>
        }

        <div>
          {
            hotel.proximity && hotel.proximity.distance && hotel.proximity.unit && hotel.proximity.from ?
              <p className="f10 m0 pfc3">
                {`${hotel.proximity.distance} ${hotel.proximity.unit} from ${hotel.proximity.from}`}
              </p> : null
          }
        </div>
        <div className="absolute r0 t0">
          <Recommended ttRecommended={hotel.ttRecomended} />
        </div>
      </div>
    );
  }
}

HotelCardRightData.propTypes = {
  hotel: PropTypes.object.isRequired,
  searchParams: PropTypes.object
};

export default HotelCardRightData;
