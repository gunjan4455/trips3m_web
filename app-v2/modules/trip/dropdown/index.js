import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Dropdown from './Dropdown';

const container = withRouter(connect(
  state => {
    return {
      trips: state.trip.list,
      currentTripId: state.trip.currentTrip.data.id,
    };
  },
  {
  })(Dropdown));

export default {
  container
};
