import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swiper from 'components/Swiper/Swiper';
import Card from './Card';

const SimilarHotels = ({ similarHotels, month }) => (
  <div className="clearfix relative">
    <h6 className="m0 mb15 f16 fwb">{similarHotels.title}</h6>
    {similarHotels.viewAll ? (
      <a
        href={similarHotels.viewAll}
        target="_blank"
        className="fright iblock link-sec absolute r10 t0"
      >
        View All
      </a>
    ) : null}
    <div className="swiper-full-width">
      <Swiper
        id="similarHotels"
        slideClass="slide"
        spaceBetween={15}
        slidesPerView="auto"
        ssrAnimation={{ width: 270, height: 293 }}
      >
        {similarHotels.hotels.length
          ? similarHotels.hotels.map(hotel => (
              <div
                key={hotel.id}
                className={
                  similarHotels.hotels.length === 1
                    ? "radius2 overflowh swiperSingleChild"
                    : "radius2 overflowh swiperCustomWidth"
                }
              >
                <Card hotel={hotel} month={month} />
              </div>
            ))
          : null}
      </Swiper>
    </div>
  </div>
);

SimilarHotels.propTypes = {
  similarHotels: PropTypes.object.isRequired,
  month: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default SimilarHotels;

