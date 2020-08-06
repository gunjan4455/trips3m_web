import React from 'react';
import {
  IllusAgent,
  IllusTraveler,
  IllusDestinationsOld
} from 'helpers/Icon/Icon';

import './TravelMarketPlace.scss';

const TravelMarketPlace = () => (
  <div className="row row- text-center mb8">
    <div className="pt15 pb15 pl8 pr8 sbcw">
      <h3 className="heading-common-center">The Largest Travel Marketplace</h3>
      <div className="row row- pt24">
        <div className="col-xs-4 pl0 pr0">
          <div className="animated-logo" ><IllusAgent /></div>
          <p className="f14 fw9 mt5">650+</p>
          <p className="f14">Verified Agents</p>
        </div>
        <div className="col-xs-4 pl0 pr0">
          <div className="animated-logo" ><IllusTraveler /></div>
          <p className="f14 fw9 mt5">40Lac+</p>
          <p className="f14">Happy Travellers</p>
        </div>
        <div className="col-xs-4 pl0 pr0">
          <div className="animated-logo" ><IllusDestinationsOld /></div>
          <p className="f14 fw9 mt5">65+</p>
          <p className="f14">Destinations</p>
        </div>
      </div>
    </div>
  </div>
);

export default TravelMarketPlace;
