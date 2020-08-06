import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import { fetchLetsDiscover } from './action';
import LetsDiscover from './LetsDiscover';

const container = withRouter(connect(
  state => ({
    letsDiscover: _get(state,'letsDiscover.letsDiscover',{})
  }), {
    fetchLetsDiscover
  })(LetsDiscover));

export default {
  container,
  actions: {
    fetchLetsDiscover
  },
  defaultAction: fetchLetsDiscover
};










