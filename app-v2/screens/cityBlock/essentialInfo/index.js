import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loadable from "react-loadable";

import { results } from './reducer';

const loadableEssentialInfo = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-essential-info' */ './EssentialInfo'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }))(loadableEssentialInfo));

export default container;
