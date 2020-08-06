import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';
import HotelsRow from './HotelsRow';



/* eslint-disable react/no-array-index-key */
const renderHotels = hotels => hotels.map((hotelRow, i) =>
  <HotelsRow key={i} hotels={hotelRow} day={i + 1} />);
/* eslint-enable */

const Hotels = ({ hotels }) => (
  <div className='col-xs-12 p0 sbcw accordian-contenido'>
    { renderHotels(hotels) }
  </div>
);

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default Hotels;
