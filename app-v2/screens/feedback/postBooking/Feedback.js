import React, { Component } from 'react';

import Layout from './Layout';
import feedback from 'modules/feedback/reducer';
import trip from 'modules/trip/reducers/index';
import { getSecurityToken } from 'modules/trip/actions/currentTrip';

const feedbackReducers = {
  feedback,
  trip
};

const feedbackActions = {
  getSecurityToken,
};

export { feedbackReducers };
export { feedbackActions };

class Feedback extends Component {

  static propTypes = {};

  render() {

    return (
      <Layout {...this.props} />
    );
  }
}

export default Feedback;
