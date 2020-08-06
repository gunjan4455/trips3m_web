import React from 'react';
import PropTypes from 'prop-types';

import StarRatings from '../Review/StarRatings';
import './DestinationHotel.scss';
import Img from 'components/Common/Img';

const Hotel = ({ cityName, image, imagekitUrl, name, rating, id }) => (
  <div className='detail-hotel-slider-con'>
    <p>{cityName}</p>
    <div className='row row- relative mt8 hotel-slider'>
      <div className='box-with-layer'>
        <Img src={image} ikSrc={imagekitUrl} alt={name} />
      </div>
    </div>
    <div className='bs4 p8'>
      <span className='iblock'>{name}</span>
      <span className='iblock ml5'><StarRatings rating={rating} id={id} /></span>
    </div>
  </div>
);

Hotel.propTypes = {
  cityName: PropTypes.string,
  image: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.string.isRequired
};

Hotel.defaultProps = {
  cityName: 'City',
  image: '',
  name: 'Hotel',
  rating: 4
};

export default Hotel;
