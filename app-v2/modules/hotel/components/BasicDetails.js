import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HotelDefaulImg } from 'helpers/Icon/Icon';
import RatingStar from 'modules/shared/RatingStar';

import styles from './BasicDetails.cm.scss';

const renderHotelCard = (hotel) => {
  return <div className="flex pt24 pb24 bb spaceBetween">
    <div className="flexFull">
      <span className="block fw9 f16a dark-font text-capitalize">{hotel.title}</span>
      <RatingStar rating={hotel.starRatings} />
      <span className={`block f12 ellipsis dark-font ${styles.hotelDesciptionClip}`}>{hotel.address.full}</span>
    </div>
    <div className="flexFull text-right">
      {
        hotel.image ?
          <img alt="selectedRoom" className={styles.hotelGrid}
               src={hotel.image} /> :
          <HotelDefaulImg />
      }
    </div>
  </div>;
};

const BasicDetails = ({ hotel }) => (
  <div className="mb24">
    {
      hotel.url
        ? <Link to={hotel.url}>
          {renderHotelCard(hotel)}</Link>
        : renderHotelCard(hotel)
    }
  </div>);

BasicDetails.propTypes = {
  hotel: PropTypes.object
};

export default BasicDetails;
