import config from 'appConfig';

const LOAD = 'packages/faq/LOAD';
const LOAD_SUCCESS = 'packages/faq/LOAD_SUCCESS';
const LOAD_FAIL = 'packages/faq/LOAD_FAIL';

const initialState = {
  loaded: false,
  data: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error.errors || action.error,
      };
    default:
      return state;
  }
}

export function load(params) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(
      config.apiEndpoints.faq.url,
      {
        params, hostType: config.apiEndpoints.faq.host
      }
    )
  };
}
