import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostTripFormContainer from './FormContainer';
import { createPostTripFeedback } from '../action';

export default withRouter(connect(
  state => {
    return {
      submitted: state.feedback.submitted,
      formValues: state.form.postTripNpsForm && state.form.postTripNpsForm.values || {}
    };
  },
  {
    createPostTripFeedback,
  }
)(PostTripFormContainer));
