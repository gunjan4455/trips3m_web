import * as ActionTypes from '../actions/search';
import config from 'appConfig';
import {
  parse,
  UserIntent
} from '../../app-v2/screens/search/parser';

// Action constants
const UPDATE = 'search/UPDATE';
const TOGGLE = 'search/TOGGLE';

const initialState = {
  query: '',
  isOpen: false,
  loaded: false,
  loading: false,
  data: {
    raw: {},
    parsed: {}
  }
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        term: action.query || ''
      };
    case ActionTypes.SEARCH_LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.SEARCH_LOAD_SUCCESS:
      // return { ...initialState, raw: action.result, parsed: parse(action.result) };
      return {
        ...state,
        loaded: true,
        loading: false,
        data: { raw: action.result, parsed: parse(action.result) }
      };
    case ActionTypes.SEARCH_LOAD_FAILURE:
      return {
        ...state,
        data: {raw: {}, parsed: {}},
        error: action.error,
        loaded: false,
        loading: false
      };
    case ActionTypes.SEARCH_NAVIGATION_REQUEST:
      return {
        ...state,
        loading: true,
        navigationUrl: null
      };
    case ActionTypes.SEARCH_NAVIGATION_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        navigationUrl: action.result.data.url
      };
    case ActionTypes.SEARCH_NAVIGATION_FAILURE:
      return {
        ...state,
        data: {raw: {}, parsed: {}},
        error: action.error,
        loaded: false,
        loading: false
      };
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen || false
      };
    case ActionTypes.SEARCH_CLEAR:
      return initialState;
    default:
      return state;
  }
}

// Actions

export const toggle = () => ({ type: TOGGLE });

export const resetData = () => ({ type: ActionTypes.SEARCH_CLEAR });

// Contract

export const isOpen = globalState =>
  (globalState.search && globalState.search.isOpen) || false;

export const data = globalState => {
  try {
    const { package_url } = globalState.search.data.raw;

    if (package_url) {
      return package_url;
    }
    return globalState.search.data.raw.data.package_url || {};
  } catch (e) {
    return {};
  }
};

const buildUrl = ({ tour_type, destination, filters }) => {
  if (tour_type) {
    let url = `/${tour_type}-packages`;
    if (destination) {
      url += `/${destination}`;
    }

    const paramsTypes = [
      'category',
      'days[]',
      'price_ranges[]',
      'hotel_ratings[]',
      'inclusions[]',
      'trip_types[]',
      'destination_type'
    ];
    const params = [];
    for (const filter in filters) {
      if (paramsTypes.includes(filter) && filters[filter]) {
        params.push(`${filter}=${filters[filter]}`);
      }
    }
    return `${url}?${params.join('&')}`;
  }

  return `/tour-packages`;
};

export const getRedirectUrl = globalState => {
  return globalState.search.navigationUrl;
};
