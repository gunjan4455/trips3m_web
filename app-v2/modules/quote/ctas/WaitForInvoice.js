import React from 'react';
import PropTypes from 'prop-types';

import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';

const CTA_TEXT = 'Wait For Invoice';

const WaitForInvoice = ({ callbackHandler }) => {
  const handleClick = () => {
    callbackHandler(QUOTE_EVENTS_ENUMS.WAIT_FOR_INVOICE);
  };

  return (
    <div>
      <button
        className="wfull btn-filled-pri-large radius2 ripple"
        onClick={handleClick}
      >
        {CTA_TEXT}
      </button>
    </div>
  );
};

WaitForInvoice.propTypes = {
  callbackHandler: PropTypes.func,
};

WaitForInvoice.defaultProps = {};

export default WaitForInvoice;
