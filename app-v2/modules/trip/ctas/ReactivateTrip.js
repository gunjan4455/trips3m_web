import React from 'react';
import { PropTypes } from 'prop-types';

import EVENTS_ENUMS from 'modules/trip/ChildEventsType';

const CTA_TEXT = 'Reactivate Trip';

const ReactivateTrip = ({
                          tripId,
                          callbackHandler
                        }) => (<div className="flexFull flex">
    <button
      className="wfull btn-pri-large ripple pl5 pr5"
      onClick={() => {
        callbackHandler(EVENTS_ENUMS.REACTIVATE_TRIP, { tripId });
      }}
    >
      {CTA_TEXT}
    </button>
  </div>
);

ReactivateTrip.propTypes = {
  tripId: PropTypes.number.isRequired,
  callbackHandler: PropTypes.func.isRequired
};

ReactivateTrip.defaultProps = {};

export default ReactivateTrip;
