/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './BookedNotification.scss';
import Img from 'components/Common/Img';
import config from 'appConfig';

const BookedNotification = ({ destination_image, destination_name, trip_id, trip_path }) => (
  <a href={trip_path} className='pfc3'>
    <div className='row row- p8 pr24 sbcw relative booked-place'>
      <div className='pl0 pr0 booked-place-image'>
        <Img ikSrc={destination_image} alt="Trip package" height={72}/>
      </div>
      <div className='pl15 pl0 relative booked-place-data'>
        <p className='f14 pb4 ellipsis pfc3'>{destination_name}</p>
        <p className='f12 pb4 pfc4'>Booking ID <span className='pfc3'>{trip_id}</span></p>
        <p className='f12 pfc3'>Update on Quotes here</p>
      </div>
      <span className='absolute-center-v next-arrow'/>
    </div>
  </a>
);

BookedNotification.propTypes = {
  trip_id: PropTypes.number,
  destination_name: PropTypes.string,
  trip_path: PropTypes.string,
  destination_image: PropTypes.string
};

BookedNotification.defaultProps = {
  trip_id: 244032,
  destination_name: 'Kerala',
  trip_path: '/requested_trips/244032',
  destination_image: `${config.assets.images}/attachments/destinations/66/large/kashmir.jpg`
};
export default BookedNotification;
