import React from 'react';
import PropTypes from 'prop-types';

import BookWithFlightExpert from './bookWithFlightExpert';

import { Flights, GreenTickInclusion } from 'helpers/Icon/Icon';

const PrefilledBanner = ({ trackSegmentEvent }) => {

  const handleClick = () => {
    trackSegmentEvent('Explore Best Flight Prices');
  };

  return (
    <div>
      <div className="sbcw m8 mt8 radius2 p15 pt24 text-center cardShadow at_flightBanner at_flightPrefilledBanner">
        <div className="icon-48 p4">
          <Flights />
        </div>
        <span className="iblock pfc1 f12 mb8">Flights</span>
        <h3 className="f24 fw9 pfc3 mb15">Discover Great Flight Deals & Save More</h3>
        <div className="text-left">
          <h4 className="f18 fw9 pfc3 mb15">Compare prices and book directly</h4>
          <p className="f14p mb8 pb4 relative pl24">
            <span className="icon-14 iblock absolute l0 t2">
              <GreenTickInclusion />
            </span>
            Compare prices from 720 platforms
          </p>
          <p className="f14p mb8 pb4 relative pl24">
            <span className="icon-14 iblock absolute l0 t2">
              <GreenTickInclusion />
            </span>
            Get best and cheapest deals
          </p>
          <p className="f14p mb8 pb4 relative pl24">
            <span className="icon-14 iblock absolute l0 t2">
              <GreenTickInclusion />
            </span>
            Book instantly
          </p>
        </div>
        <a href="https://flights.traveltriangle.com/" target="_blank"
           onClick={handleClick}
           className="iblock wfull btn-sec-load-filled text-center fw7 relative cursorP radius2 linkWhite mt4 at_flightCTA">Explore Best Flight Prices</a>

        <div className="mt15 mb15">
          <div className="relative flex alignCenter justifyCenter">
            <span className="bt absolute-center-v l0 wfull z1"/>
            <p className="z2 relative f16 fw9 pfc4 w40 h40 radius100 border sbcw flex justifyCenter alignCenter">OR</p>
          </div>
        </div>

        <div className="text-left">
          <h4 className="f18 fw9 pfc3 mb15">Connect with our flight expert</h4>
          <p className="f14p mb8 pb4 relative pl24">
            <span className="icon-14 iblock absolute l0 t2">
              <GreenTickInclusion />
            </span>
            Get best quotes from our agents
          </p>
          <p className="f14p mb8 pb4 relative pl24">
            <span className="icon-14 iblock absolute l0 t2">
              <GreenTickInclusion />
            </span>
            Customize for special needs
          </p>
          <p className="f14p mb8 relative pl24">
            <span className="icon-14 iblock absolute l0 t2">
              <GreenTickInclusion />
            </span>
            Get cheapest prices
          </p>
        </div>
        <BookWithFlightExpert trackSegmentEvent={trackSegmentEvent}/>
      </div>
    </div>
  );
};

PrefilledBanner.propTypes = {
  trackSegmentEvent: PropTypes.func.isRequired
};

export default PrefilledBanner;
