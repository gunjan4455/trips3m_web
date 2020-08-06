import React from 'react';
import {
  IllusMoneySafe,
  IllusQualityCheck,
  IllusSupport
} from 'helpers/Icon/Icon';

import './TravelMarketPlace.scss';

const SafeSecure = () => (
  <div className="row row- text-center mb8">
    <div className="pt15 pb15 pl8 pr8 sbcw">
      <h3 className="heading-common-center">Your Purchase Is Reliable & Secure</h3>
      <div className="row row- pt24">
        <div className="col-xs-4 pl0 pr0">
          <div className="animated-logo"><IllusMoneySafe /></div>
          <p className="f14 fw9">100%</p>
          <p className="f14">Service Assurance</p>
        </div>
        <div className="col-xs-4 pl0 pr0">
          <div className="animated-logo" ><IllusQualityCheck /></div>
          <p className="f14 fw9">Stringent</p>
          <p className="f14">Quality Control</p>
        </div>
        <div className="col-xs-4 pl0 pr0">
          <div className="animated-logo" ><IllusSupport /></div>
          <p className="f14 fw9">24/7</p>
          <p className="f14">Support</p>
        </div>
      </div>
    </div>
  </div>
);

export default SafeSecure;
