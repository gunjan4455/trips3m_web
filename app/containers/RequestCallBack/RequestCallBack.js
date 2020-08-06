import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import { goBack } from 'react-router-redux';
import { isLoading, isLoaded, load, reset, loadingError } from '../../reducers/requestCallBack';

const RequestCallBackAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'request-callback' */ './RequestCallBackAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('./RequestCallBackAsync') }
  ],
  state => ({
    isLoading: isLoading(state),
    isLoaded: isLoaded(state),
    loadingError: loadingError(state)
  }),
  { load, reset, goBack })(RequestCallBackAsync);
