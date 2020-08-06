import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loadable from "react-loadable";

import { results } from './reducer';

const loadableEntryFees = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-entry-fees' */ './EntryFees'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }))(loadableEntryFees));

export default container;
