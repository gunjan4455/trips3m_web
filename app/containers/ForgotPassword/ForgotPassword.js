import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import { goBack } from 'react-router-redux';
import { isLoaded as requestStatus, reset as resetStatus } from '../../reducers/forgotPassword';


const ForgotPasswordAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'forgot-password' */ './ForgotPasswordAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('./ForgotPasswordAsync') },
  ],
  state => ({ isLoaded: requestStatus(state) }),
  { goBackState: goBack, resetStatus })(ForgotPasswordAsync);
