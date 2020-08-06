import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { quoteDetailPath } from 'helpers/urlHelpers';

const CTA_TEXT = 'View Booked Quote';

const SwitchQuote = ({ tripId, quoteId, trackSegment }) => {
  const switchQuoteUrl = quoteDetailPath(tripId, quoteId);

  return (<div className="flexFull flex">
    <Link to={switchQuoteUrl} className="wfull btn-filled-pri-large radius0 pl5 pr5 ripple">
      {CTA_TEXT}
    </Link>
  </div>);
};

SwitchQuote.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  trackSegment: PropTypes.func
};

SwitchQuote.defaultProps = {
  trackSegment: () => {}
};

export default SwitchQuote;

