import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  AUTH_LOAD,
  AUTH_LOAD_SUCCESS,
  AUTH_LOAD_FAIL,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from '../actionConstants';
import config from 'appConfig';

const login = params => ({
  types: [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL],
  promise: client => client.post(
    config.apiEndpoints.auth.signin.url,
    {
      data: {
        login_type: 'json',
        user: {
          email: params.email,
          password: params.password
        },
        session: {
          login_type: 'json',
          user: {
            email: params.email,
            password: params.password
          }
        },
        next_url: 'true'
      },
      hostType: config.apiEndpoints.auth.signin.host
    }
  )
});

function load() {
  return {
    types: [AUTH_LOAD, AUTH_LOAD_SUCCESS, AUTH_LOAD_FAIL],
    promise: client => client.get(config.apiEndpoints.auth.userDetails.url, {
      hostType: config.apiEndpoints.auth.userDetails.host
    })
  };
}

function logout() {
  return {
    types: [SIGNOUT, SIGNOUT_SUCCESS, SIGNOUT_FAIL],
    promise: client => client.del(config.apiEndpoints.auth.signOut.url, {
      hostType: config.apiEndpoints.auth.signOut.host
    })
  };
}

function signUp(data = {}) {
  return {
    types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL],
    promise: client => client.post(config.apiEndpoints.auth.signUp.url, {
      data, hostType: config.apiEndpoints.auth.signUp.host
    })
  };
}

export {
  login,
  load,
  logout,
  signUp
};
