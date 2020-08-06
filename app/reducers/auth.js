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

import { setCookie } from 'helpers/FormDataFormatter';

const initialState = {
  loaded: false,
  loading: false,
  user: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case AUTH_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        loadData: action.result,
        error: null
      };
    case AUTH_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: false,
        user: null,
        error: action.error,
      };
    case SIGNIN:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: null
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loaded: false,
        user: action.result,
        error: null
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: null,
        error: action.error
      };
    case SIGNOUT:
      return {
        ...state,
        loggingOut: true,
        loggedOut: false,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        loggedOut: true,
        loaded: false,
        user: null,
        error: null
      };
    case SIGNOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        loggedOut: false,
        error: action.error
      };
    case SIGNUP:
      return {
        ...state,
        signingUp: true,
        loggedIn: false,
        signedUp: false,
        user: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true,
        signingUp: false,
        loaded: false
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signingUp: false,
        signedUp: false,
        signUpError: action.error.errors || action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return (globalState.auth && globalState.auth.loaded);
}

export function isLoading(globalState) {
  return (globalState.auth && globalState.auth.loading);
}

export function isLoggedIn(globalState) {
  try {
    return globalState.auth.loadData.data.logged_in || false;
  } catch (e) {
    return false;
  }
}

export function canUserRefer(globalState) {
  try {
    return globalState.auth.loadData.data.can_user_refer || false;
  } catch (e) {
    return false;
  }
}

export function isSignedUp(globalState) {
  return (globalState.auth && globalState.auth.signedUp) || false;
}

export function signUpError(globalState) {
  return (globalState.auth && globalState.auth.signUpError) || null;
}

export function user(globalState) {
  if (!isLoggedIn(globalState)) {
    setCookie('u_id', '', -1);
    return {
      name: 'Guest',
      email: ''
    };
  }
  try {
    const userDetails = globalState.auth.loadData.data.user;
    setCookie('u_id', globalState.auth.loadData.data.user.id);
    return {
      id: userDetails.id,
      name: `${userDetails.first_name} ${userDetails.last_name}`,
      email: userDetails.email,
      avatar: userDetails.image,
      lastActiveTrip: (
        userDetails.latest_active_trip && Object.keys(userDetails.latest_active_trip).length ?
          userDetails.latest_active_trip :
          null
      )
    };
  } catch (e) {
    setCookie('u_id', '', -1);
    return {
      name: 'Guest',
      email: ''
    };
  }
}

export function shouldDisplayLatestTrip(globalState) {
  try {
    const userDetails = globalState.auth.loadData.data.user.latest_active_trip;
    if (
      typeof userDetails !== 'undefined' &&
      typeof userDetails.trip_id !== 'undefined' &&
      typeof userDetails.destination_name !== 'undefined' &&
      typeof userDetails.trip_path !== 'undefined' &&
      typeof userDetails.destination_image !== 'undefined'
    ) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export function userEmail(globalState) {
  try {
    return globalState.auth.loadData.data.user.email || null;
  } catch (e) {
    return null;
  }
}

export function getUserDetails(globalState) {
  try {
    return globalState.auth.loadData.data.user || {};
  } catch (e) {
    return {};
  }
}
