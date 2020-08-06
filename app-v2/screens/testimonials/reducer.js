import { parse, stringify } from 'query-string';


import {
  TESTIMONIALS_LOAD,
  TESTIMONIALS_LOAD_SUCCESS,
  TESTIMONIALS_LOAD_FAILURE,
  TESTIMONIALS_LOAD_MORE_CARDS
} from './action';

const initialState = {
  loading: false,
  loaded: false,
  data: {}
};

export default function testimonials(state = initialState, action = {}) {
  switch (action.type) {
    case TESTIMONIALS_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case TESTIMONIALS_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.result.data
      };
    }
    case TESTIMONIALS_LOAD_MORE_CARDS: {
      const newCards = state.data && state.data.testimonials.concat(action.result.data.testimonials);
      return {
        ...state,
        loaded: true,
        loading: false,
        data: { ...state.data, testimonials: newCards }
      };
    }
    case TESTIMONIALS_LOAD_FAILURE: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
      return state;
  }
}

export const parseFilters = (query, filterOptions = []) => {
  const filters = Object.keys(query || {})
    .filter(key => filterOptions.includes(key))
    .reduce((obj, key) => {
      obj[key] = query[key];
      return obj;
    }, {});

  return parse(stringify(filters), { arrayFormat: 'bracket' });
};

export const testimonialsFilter = (query, arrayFormat = 'none') => {
  const filterOptions = ['ratings[]'];

  const parsed = parseFilters(query, filterOptions);

  const keyFormatted = {};

  Object.keys(parsed).forEach(e => {
    keyFormatted[e] = keyFormatted[e] || {};
    parsed[e].forEach(i => (keyFormatted[e][i] = true));
  });
  switch (arrayFormat) {
    case 'query': {
      return { filters: parsed };
    }
    default: {
      return {
        filters: keyFormatted
      };
    }
  }
};

export const parseDestinationId = (destination = '') => parseInt(destination.split('-')[0]);

