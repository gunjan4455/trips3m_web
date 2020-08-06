import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';
import HotelComp from './HotelComp';


/* eslint-disable react/no-array-index-key */
const renderHotels = hotels => hotels.map((hotel, i) =>
  <HotelComp key={i} hotel={hotel} />);
/* eslint-enable */

const HotelsRow = ({ hotels, day }) => (
  <div className='row row- p0 headingDays'>
    <p className='f14 col-xs-12 pfc3 p8 headingDays'>{`Day ${day}`}</p>
    <div className='col-xs-12 p0 clear relative hotelContainerMain'>
      { renderHotels(hotels) }
    </div>
  </div>
);

HotelsRow.propTypes = {
  hotels: PropTypes.array.isRequired,
  day: PropTypes.number.isRequired
};

export default HotelsRow;
