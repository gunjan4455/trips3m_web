import React from 'react';
import { connect } from 'react-redux';
import Loadable from "react-loadable";
import { withRouter } from 'react-router-dom';

import { results } from '../reducer';

const loadableOverview = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-overview' */ './Overview'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    cityBlock: results(state)
  }))(loadableOverview));

export default container;
