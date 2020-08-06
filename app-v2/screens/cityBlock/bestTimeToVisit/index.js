import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loadable from "react-loadable";

import { results } from './reducer';

const loadableBestTimeToVisit = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-best-time-to-visit' */ './BestTimeToVisit'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }))(loadableBestTimeToVisit));

export default container;
