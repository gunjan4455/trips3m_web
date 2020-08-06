import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import LeadSubmittedStage from './LeadSubmittedStage';
import { sendActivationMail } from 'modules/trip/actions/tripActivities';
import { showRoster } from 'modules/roster/action';

const container = withRouter(connect(
  state => ({
    trips: state.trip.list,
    currentTripId: state.trip.currentTrip.data.id,
    activationMailSent: state.trip.activities.activationMailSent,
    activationMailSuccessMsg: state.trip.activities.activationMailSuccessMsg
  }), {
    sendActivationMail,
    showRoster
  }
)(LeadSubmittedStage));

export default {
  container
};
