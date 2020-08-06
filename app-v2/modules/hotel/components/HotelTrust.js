import React from 'react';
import { TnCIcon } from 'helpers/Icon/Icon';

const HotelTrust = () => (
  <div className="flex pt8 pb8 pl15 pr15 spaceBetween radius4" style={{background: 'rgba(0, 150, 136, 0.05)'}}>
    <p className="f12 pfc5 flex alignCenter">
      <span className="mr8 icon-24">
        <TnCIcon />
      </span> 100% verified stays
    </p>
    <p className="f12 pfc5 flex alignCenter">
      <span className="mr8 icon-24">
        <TnCIcon />
      </span> No booking fees
    </p>
  </div>);

export default HotelTrust;
