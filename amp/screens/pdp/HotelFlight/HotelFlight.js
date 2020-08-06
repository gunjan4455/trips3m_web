import React from 'react';
import PropTypes from 'prop-types';

import Hotel from './Hotel';
import NoHotelIncluded from './NoHotelIncluded';

import './HotelFlight.scss';

const HotelFlight = ({ hotels, flights, hotelTitle, inclusions }) => {
  if (!hotels.length && !flights.length) {
    return null;
  }

  return (
    <div className="row row- sbcw relative">
      <h2 className="f16 fw9 m0 p15">Hotels</h2>
      <div className="hotel-carousel-wrapper">
        {hotels.length ? <Hotel list={hotels} /> : <NoHotelIncluded />}
      </div>
      <div className="row row-">
        <p className="note">
          Note: Our agents will provide you these or similar hotels depending
          on availability
        </p>
      </div>
    </div>
  );
};

HotelFlight.propTypes = {
  hotels: PropTypes.array,
  flights: PropTypes.array,
  hotelTitle: PropTypes.string,
  inclusions: PropTypes.array.isRequired
};

HotelFlight.defaultProps = {
  hotels: [],
  flights: [],
  hotelTitle: 'Hotels',
};

export default HotelFlight;
