import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { goBack } from 'react-router-redux';

import { reactivateBooking } from 'modules/trip/actions/tripActivities';
import AllTrips from './AllTrips';

const container = withRouter(connect(
  state => {
    return {
      trips: state.trip.list,
    };
  },
  {
    goBack,
    reactivateBooking
  })(AllTrips));

export default {
  container
};
