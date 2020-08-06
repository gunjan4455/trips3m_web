import React from 'react';
import PropTypes from 'prop-types';

import BookWithFlightExpert from './bookWithFlightExpert';
import { Flights } from 'helpers/Icon/Icon';

const Banner = ({ trackSegmentEvent }) => {
  const handleClick = () => {
    trackSegmentEvent('Explore Best Flight Prices');
  };
  return (
    <div>
      <div className="sbcw m8 mt8 radius2 p15 pt24 text-center cardShadow at_flightBanner at_flightPostBookingBanner">
        <div className="icon-48 p4">
          <Flights />
        </div>
        <span className="iblock pfc1 f12 mb8">Flights</span>
        <h3 className="f24 fw9 pfc3 mb15">Your Flight Request is in<br /> Progress ...</h3>
        <p className="f14 mb24 pr15 pl24">Thank you for your request. Our flight expert is working hard to deliver the best deal to you.</p>
        <a href="https://flights.traveltriangle.com/" target="_blank"
           onClick={handleClick}
           className="iblock wfull btn-sec-load-filled text-center fw7 relative cursorP radius2 linkWhite at_flightCTA">Explore Best Flight Prices</a>
        <BookWithFlightExpert trackSegmentEvent={trackSegmentEvent}/>
      </div>
    </div>
  );
};

Banner.propTypes = {
  trackSegmentEvent: PropTypes.func.isRequired
};

export default Banner;
