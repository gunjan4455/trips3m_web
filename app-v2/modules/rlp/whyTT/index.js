import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import WhyTT from './WhyTT';

const container = withRouter(connect(
  null, null
)(WhyTT));

export default {
  container
};
