import React from 'react';

import './Thankyou.scss';

import {
  ThankYouTick,
  EnvelopeIcon
} from 'helpers/Icon/Icon';

const ThankYou = () => (
  <div className="text-center clearfix wfull iblock pt15 pb32 sbcw at_thankyou">
    <div className="thank-you-animation relative">
      <div className="envelope-box"><EnvelopeIcon /></div>
      <div className="thankyou-tick"><ThankYouTick /></div>
    </div>
    <p className="pfc1 fwb f24 pt24 pb4 m0">Submitted</p>
    <p className="m0 pfc3 f14p">Thank you for the feedback</p>
  </div>
);

export default ThankYou;
