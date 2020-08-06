import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostBookingForm from './FormContainer';
import { createPostBookingFeedback } from '../action';

export default withRouter(connect(
  state => {
    return {
      submitted: state.feedback.submitted,
      securityToken: state.trip.currentTrip.data.securityToken,
      formValues: state.form.postBookingNpsForm && state.form.postBookingNpsForm.values || {}
    };
  },
  {
    createPostBookingFeedback,
  }
)(PostBookingForm));
