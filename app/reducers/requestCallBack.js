import config from 'appConfig';

// Action constants
export const LOAD = 'requestCallBack/LOAD';
export const LOAD_SUCCESS = 'requestCallBack/LOAD_SUCCESS';
export const LOAD_FAIL = 'requestCallBack/LOAD_FAIL';
export const RESET = 'requestCallBack/RESET';

const initialState = {
  loaded: false,
  data: null
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
        ...state,
        loaded: false,
        loading: false
      };
    default:
      return state;
  }
}

export const isLoaded = globalState =>
  (globalState.requestCallBack && globalState.requestCallBack.loaded) || false;

export const isLoading = globalState =>
  (globalState.requestCallBack && globalState.requestCallBack.loading) || false;

export const loadingError = globalState =>
  (globalState.requestCallBack && globalState.requestCallBack.error) || null;

export const reset = () => ({
  type: RESET
});

export const load = ({ phone }) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.post(
    config.apiEndpoints.requestCallBack.url,
    {
      params: {
        feedback: {
          body: phone,
          type_of_feedback: 'request_on_call'
        }
      },
      hostType: config.apiEndpoints.requestCallBack.host
    }
  )
});
