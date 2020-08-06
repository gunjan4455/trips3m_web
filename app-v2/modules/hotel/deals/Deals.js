import React from 'react';
import PropTypes from 'prop-types';

import Swiper from 'components/Swiper/Swiper';
import Card from './Card';
import { Hotel } from 'helpers/Icon/Icon';

const HotelDeals = ({ title, destination, deals, showBookNow }) => {
  if (!(deals && deals.length)) {
    return null;
  }

  return (<div className="clearfix relative sbcw p15 pr0 mt8 mb8">
      <div className="flex alignCenter mb24">
        <div className="icon-24 mr8">
          <Hotel />
        </div>
        <h6 className="f16a fw9">{title || `Hotel Deals In ${destination}`}</h6>
      </div>
      <div className="swiper-full-width">
        <Swiper
          id="hotelDeals"
          slideClass="slide"
          spaceBetween={15}
          slidesPerView="auto"
          slidesOffsetAfter={15}
          ssrAnimation={{ width: 264, height: 293 }}
        >
          {
            deals.map(deal => (
              <div
                key={deal.id}
                className={
                  deals.length === 1
                    ? "radius2 overflowh swiperSingleChild"
                    : "radius2 overflowh swiperCustomWidth"
                }
              >
                <Card deal={deal} showBookNow={showBookNow} />
              </div>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

HotelDeals.propTypes = {
  title: PropTypes.string,
  destination: PropTypes.string.isRequired,
  deals: PropTypes.array.isRequired,
  showBookNow: PropTypes.bool,
};

HotelDeals.defaultProps = {
  title: '',
  showBookNow: true
};

export default HotelDeals;

