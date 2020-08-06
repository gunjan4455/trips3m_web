import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GNoTripIconDiv } from '../G';
import { LookingIcon } from 'app/helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const NoTrips = ({ trackSegment }) => (
  <div className="flex flexDColumn text-center sbcw p15 pt64 mt4 mb8">
    <GNoTripIconDiv className="mb24">
      <LookingIcon />
    </GNoTripIconDiv>
    <h3 className="f20 fw7 mb15">No Requested Trips</h3>
    <p className="f14 mb64">When you request a trip , You will see it’s<br/>details here</p>
    <Link to='/requested_trips/new' className="btn-filled-pri"
          onClick={() => trackSegment({ event: ORGANISM_CLICKED, cta: 'Plan my holiday' })}>Plan My Holiday</Link>
  </div>
);

NoTrips.propTypes = {
  trackSegment: PropTypes.func.isRequired
};

export default NoTrips;
