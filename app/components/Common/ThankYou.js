import React from 'react';
import PropTypes from 'prop-types';

import 'components/Common/Thankyou.scss';

import {
  ThankYouTick,
  Envelope
} from 'helpers/Icon/Icon';

const ThankYou = ({ isDeal }) => (
  <div className="text-center clearfix wfull iblock p64 sbcw at_thankyou">
    <div className="thank-you-animation relative">
      <div className="envelope-box"><Envelope /></div>
      <div className="thankyou-tick"><ThankYouTick /></div>
    </div>
    <div className="animation-bar"><div className="animation-bar-inner" /></div>
    <p className="pfc1 fwb f24 pt24 pb24 m0">Thank You!</p>
    {
      isDeal?
        <p className="m0 pfc3 f14p">We have received your request. We will call you back within <strong>24hrs.</strong></p>:
        <p className="m0 pfc3 f14p">Your request is submitted. We will call you back within <strong>24hrs.</strong></p>
    }
  </div>
);

ThankYou.propTypes = {
  isDeal: PropTypes.bool
};

ThankYou.defaultProps = {
  isDeal: false
};

export default ThankYou;
