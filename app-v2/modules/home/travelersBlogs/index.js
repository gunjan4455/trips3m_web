import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import TravelersBlogCard from './TravelersBlogCard';
import Swiper from 'modules/shared/Swiper';
import travelersBlogs from './data';

const TravelersBlogs = ({trackSegmentEvent}) => (
  <div className="at_travelblog">
    <div className="pr24 pl24">
      <div className="flex spaceBetween mb8">
        <h2 className="f20 fw9 mr24">Get The Best Out Of Your Next Getaway</h2>
        <Link target='_blank' to="/blog/" className="f14 fw7 sfc1 iblock nowrap alignSelfFlexEnd">View All</Link>
      </div>
      <p className="f14 pfc4">Extraordinary experiences, designed Just for you</p>
    </div>
    <div className="clearfix pt15 at_travelblog_card">
      <Swiper
        ssrAnimation={{ width: 270, height: 140 }}
        slideClass="slide"
        spaceBetween={15}
        slidesPerView="auto"
        slidesOffsetBefore={24}
        slidesOffsetAfter={24}
        id="testimonials">
        {travelersBlogs.map((item, index) =>
          <div key={index}>
            <TravelersBlogCard
              {...item}
              index={index}
              trackSegmentEvent={trackSegmentEvent}
            />
          </div>
        )}
      </Swiper>
    </div>
  </div>
);

export default TravelersBlogs;

TravelersBlogs.propTypes = {
  trackSegmentEvent: PropTypes.func
};

TravelersBlogs.defaultProps = {
  trackSegmentEvent: () => {}
};
