import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { reactivateBooking } from 'modules/trip/actions/tripActivities';
import CanceledCard from './CanceledCard';

const container = withRouter(connect(
  null, {
    reactivateBooking
  }
)(CanceledCard));

export default {
  container
};
