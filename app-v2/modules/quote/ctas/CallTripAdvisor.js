import React from 'react';
import PropTypes from 'prop-types';

const CTA_TEXT = 'Call Trip Guide';

const CallTripAdvisor = ({ phoneNumber, ctaText }) => (
  <div>
    <a href={`tel:${phoneNumber}`} className="wfull btn-filled-pri-large radius2 ripple">
      {ctaText}
    </a>
  </div>
);

CallTripAdvisor.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
};
CallTripAdvisor.defaultProps = {
  ctaText: CTA_TEXT,
};

export default CallTripAdvisor;
