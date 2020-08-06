import React from 'react';
import { connect } from 'react-redux';
import Loadable from "react-loadable";
import { withRouter } from 'react-router';

import { results } from './reducer';

const loadableTips = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-tips' */ './Tips'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }))(loadableTips));

export default container;
