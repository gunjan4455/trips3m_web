import React from 'react';
import PropTypes from 'prop-types';

import EVENTS_ENUMS from 'modules/quote/EventTypes';

const CTA_TEXT = 'Reactivate Quote';

const ReactivateQuote = ({
                           tripId,
                           quoteId,
                           loading,
                           callbackHandler,
                           isQuoteCardCta
                         }) => (
  <div className="flexFull flex">
    {
      <button
        className={isQuoteCardCta ? 'block p15 text-left wfull' : 'wfull btn-pri-large ripple pl5 pr5'}
        disabled={loading}
        onClick={() => {
          callbackHandler(EVENTS_ENUMS.REACTIVATE_QUOTE, { tripId, quoteId });
        }}>
        {CTA_TEXT}
      </button>
    }
  </div>
);

ReactivateQuote.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  callbackHandler: PropTypes.func.isRequired,
  isQuoteCardCta: PropTypes.bool
};

ReactivateQuote.defaultProps = {
  isQuoteCardCta: false,
  loading: false
};

export default ReactivateQuote;

