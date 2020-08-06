import React from 'react';
import PropTypes from 'prop-types';
import './Hotel.scss';
import StarRatings from '../../Review/StarRatings';
import HotelCard from './HotelCard';
import Swiper from 'components/Swiper/Swiper';
import { generateUniqueHash } from '../../../utils/parsers';

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
            <p className="f12 fw9 pfc2 relative iblock mr8">{h.header}</p>
            <h3 className="iblock mr8 fw4">{h.name}</h3>
          </div>
          <div className="row row-">
            <div className="block mr8 fleft">
              <StarRatings
                id={`rating_${index}`}
                rating={h.rating}
              />
            </div>
          </div>
          <div className="row row- pt8">
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
      <div className="row row-">
        <p className="note mb8">
          Note: Our agents will provide you these or similar hotels depending
          on availability
        </p>
      </div>
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
