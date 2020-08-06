import React from 'react';
import PropTypes from 'prop-types';

import HotelCardDetails from './HotelCardDetails';
import ORComp from './ORComp';

const HotelCard = ({ hotels, viewAllHotels, trackSegment }) => {
  const hotelInfos = viewAllHotels
    ? hotels.hotelInfos
    : hotels.hotelInfos.slice(0, 1);

  return (
    <div className="pl15 pr15 pt15 bt">
      <h4 className='f16a fw9 pb15'>
        {hotels.hotelInfos[0].city}: {hotels.days.length} Nights
      </h4>
      {hotelInfos.map((hotel, index) => (
        <div key={index}>
          <HotelCardDetails
            hotelDetail={hotel}
            key={hotel.id}
            trackSegment={trackSegment}
          />
          {index < hotelInfos.length - 1 ? (
            <div className='p8'>
              <ORComp />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

HotelCard.propTypes = {
  hotels: PropTypes.object,
  viewAllHotels: PropTypes.bool,
  trackSegment: PropTypes.func
};

HotelCard.defaultProps = {
  hotels: {},
  viewAllHotels: false,
  trackSegment: () => {
  }
};

export default HotelCard;
