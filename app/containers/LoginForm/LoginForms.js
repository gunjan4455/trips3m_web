import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import { goBack, push, replace } from 'react-router-redux';

import { login, signUp } from '../../actions/auth.js';
import { aliasPayload, identifyPayload } from '../../actions/segmentEvents';
import { isLoggedIn as isAuthenticated, user, signUpError, canUserRefer } from '../../reducers/auth';
import { reset as resetForgotPassword } from '../../reducers/forgotPassword';

const LoginFormsAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'login-forms' */ '../../components/LoginSignup/LoginFormsAsync'),
  loading: () => null
});

export default asyncConnect(
  [
    { promise: () => import('../../components/LoginSignup/LoginFormsAsync') }
  ],
  state => ({
    isAuthenticated: isAuthenticated(state),
    userDetails: user(state),
    signUpError: signUpError(state),
    canUserRefer: canUserRefer(state)
  }),
  dispatch => ({
    pushState: params => dispatch(push(params)),
    goBack: params => dispatch(goBack(params)),
    signUp: params => dispatch(signUp(params)),
    login: params => dispatch(login(params)),
    resetForgotPassword: params => dispatch(resetForgotPassword(params)),
    replaceState: params => dispatch(replace(params)),
    aliasPayload: params => dispatch(aliasPayload(params)),
    identifyPayload: params => dispatch(identifyPayload(params))
  }))(LoginFormsAsync);
