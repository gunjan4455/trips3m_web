/* eslint-disable */
import config from 'appConfig';

// Action constants
const UPDATE = 'toLocation/UPDATE';
const LOAD = 'toLocation/suggestions/LOAD';
const LOAD_SUCCESS = 'toLocation/suggestions/LOAD_SUCCESS';
const LOAD_FAIL = 'toLocation/suggestions/LOAD_FAIL';
const TOGGLE = 'toLocation/suggestions/TOGGLE';
const RESET = 'toLocation/suggestions/RESET';

const initialState = {
  term: '',
  data: {
    destinations: ['a', 'b'],
    cities: [],
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        term: action.term || ''
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
        data: action.result.data || {}
      };
    case LOAD_FAIL:
      return {
        ...state,
        data: null,
        error: action.error,
        loaded: false
      };
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen || false
      };
    case RESET:
      return {
        ...state,
        data: null
      };
    default:
      return state;
  }
}

// Actions

export const toggle = () => ({ type: TOGGLE });

export const resetSuggestions = () => ({ type: RESET });

export const load = (term = '', limit = 5) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(
    config.apiEndpoints.toLocation.url,
    {
      params: {
        term,
        limit
      },
      hostType: config.apiEndpoints.toLocation.host
    }
  )
});


// Contract

export const isOpen = globalState => (globalState.search && globalState.search.isOpen) || false;

export const suggestions = (globalState) => {
  try {
    return {
      destinations: globalState.citySearch.data.destination_searches,
      cities: globalState.citySearch.data.city_searches,
    }
  } catch (e) {
    console.log(e)
    return {
      destinations: [],
      cities: [],
    }
  }
};

