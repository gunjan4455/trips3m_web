import config from 'appConfig';

// Action constants
const UPDATE = 'search/UPDATE';
const LOAD = 'search/suggestions/LOAD';
const LOAD_SUCCESS = 'search/suggestions/LOAD_SUCCESS';
const LOAD_FAIL = 'search/suggestions/LOAD_FAIL';
const TOGGLE = 'search/suggestions/TOGGLE';
const RESET_DATA = 'search/suggestions/RESET_DATA';

const initialState = {
  query: '',
  isOpen: false,
  loaded: false,
  loading: false,
  data: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        term: action.query || ''
      };
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.result.data || {}
      };
    case LOAD_FAIL:
      return {
        ...state,
        data: null,
        error: action.error,
        loaded: false,
        loading: false
      };
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen || false
      };
    case RESET_DATA:
      return {
        ...state,
        data: {}
      };
    default:
      return state;
  }
}

// Actions

export const toggle = () => ({ type: TOGGLE });

export const resetData = () => ({ type: RESET_DATA });

export const load = (query = '') => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.search.url, { params: { query },
    hostType: config.apiEndpoints.search.host})
});


// Contract

export const isOpen = globalState => (globalState.search && globalState.search.isOpen) || false;

export const data = (globalState) => {
  try {
    return globalState.search.data.package_url || {};
  } catch (e) {
    return {};
  }
};
