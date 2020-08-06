import config from 'appConfig';

// Action constants
export const LOAD = 'forgotPassword/LOAD';
export const LOAD_SUCCESS = 'forgotPassword/LOAD_SUCCESS';
export const LOAD_FAIL = 'forgotPassword/LOAD_FAIL';
export const RESET = 'forgotPassword/RESET';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error.errors || action.error
      };
    case RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

export const isLoaded = globalState =>
(globalState.forgotPassword && globalState.forgotPassword.loaded) || false;

export const isLoading = globalState =>
(globalState.forgotPassword && globalState.forgotPassword.loading) || false;

export const reset = () => ({ type: RESET });

export const load = params => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.post(
    config.apiEndpoints.forgotPassword.url,
    {
      params,
      hostType: config.apiEndpoints.forgotPassword.host
    }
  )
});
