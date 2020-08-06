import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { results, hlpResults } from './reducer';

import Faqs from './Faqs';

const container = withRouter(connect(
  state => ({
    data: results(state)
  }))(Faqs));

const hlpContainer = withRouter(connect(
  state => ({
    data: hlpResults(state)
  }))(Faqs));

export default {
  container,
  hlpContainer,
  actions: {},
  defaultAction: null
};
