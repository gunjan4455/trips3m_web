import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import feedback from 'modules/feedback/reducer';
const feedbackReducers = {
  feedback
};

export { feedbackReducers };

class Feedback extends Component {

  static propTypes = {
  };

  render() {

    return (
      <Layout {...this.props} />
    );
  }
}

export default Feedback;
