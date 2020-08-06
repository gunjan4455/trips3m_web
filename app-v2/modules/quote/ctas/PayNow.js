import React from 'react';
import PropTypes from 'prop-types';

import EVENTS_ENUMS from "../EventTypes";

const CTA_TEXT = 'Pay Now';

const PayNow = ({ payNowUrl, ctaText, disablePayNow, callbackHandler, trackSegment }) => {
  const handlePayNow = () => {
    // trackSegment('Book Now clicked', 'Quote Price', 'Book Now');

    callbackHandler(EVENTS_ENUMS.PAY_NOW);
  };

  return (<div className="flexFull flex">
    {
      disablePayNow ?
        <div className="flexFull flex">
          <button className="wfull btn-pri-large ripple pl5 pr5" onClick={handlePayNow}>{ctaText}</button>
        </div> :
        <div className="flexFull flex"><a href={payNowUrl} className="wfull btn-filled-pri-large radius2 ripple">
          {ctaText}
        </a></div>
    }
  </div>);
};

PayNow.propTypes = {
  payNowUrl: PropTypes.string,
  ctaText: PropTypes.string,
  disablePayNow: PropTypes.bool,
  callbackHandler: PropTypes.func.isRequired,
  trackSegment: PropTypes.func
};

PayNow.defaultProps = {
  payNowUrl: '',
  ctaText: CTA_TEXT,
  disablePayNow: false,
  trackSegment: () => {
  }
};

export default PayNow;

