import React from 'react';
import PropTypes from 'prop-types';

import StarRatings from '../Review/StarRatings';
import HotelCard from './HotelCard';
import Swiper from 'components/Swiper/Swiper';
import { generateUniqueHash } from '../../utils/parsers';

import './IncExclusion/Hotel.scss';

const Hotel = ({ list }) => {
  const hotelElements = list
    .filter(h => h.pictures.length)
    .map((h, index) => {
      const images = {
        imageUrl: h.pictures[0].picture_details.picture,
        imagekitUrl: h.pictures[0].picture_details.imagekit_url
      };

      return (
        <div key={generateUniqueHash(h.name)}>
          <div className="row row-">
            <p className="f16 fw9 pfc1 relative iblock mr8">{h.header}</p>
          </div>
          <div className="row row- pt15">
            <HotelCard
              details={h}
              images={images}
              index={index}
            />
          </div>
        </div>
      );
    });

  return (
    <div className="row row-">
      <Swiper
        slideClass="slide"
        spaceBetween={8}
        slidesPerView="auto"
        ssrAnimation={{ width: 276, height: 252 }}
      >
        {hotelElements}
      </Swiper>
    </div>
  );
};

Hotel.propTypes = {
  list: PropTypes.array
};

Hotel.defaultProps = {
  list: []
};

export default Hotel;
