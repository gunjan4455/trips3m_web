import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CancelRequestContainer from './CancelRequestContainer';
import { cancelBooking } from '../actions/tripActivities';

export default withRouter(connect(
  null, {
    cancelBooking
  }
)(CancelRequestContainer));
