import config from 'appConfig';

import createApiReducer from '../../reducers/api';
import { placesToVisit } from 'helpers/urlHelpers';

import {
  PLACES_TO_VISIT_LOAD,
  PLACES_TO_VISIT_LOAD_SUCCESS,
  PLACES_TO_VISIT_LOAD_FAIL,
  LOAD_MORE_PLACES_TO_VISIT,
  LOAD_MORE_PLACES_TO_VISIT_SUCCESS,
  LOAD_MORE_PLACES_TO_VISIT_FAIL
} from './action';

export const results = (globalState) => {
  try {
    return globalState.placesToVisit.data.placesToVisit || {};
  } catch (e) {
    return {};
  }
};

const initialState ={};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLACES_TO_VISIT_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case PLACES_TO_VISIT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result && action.result.data,
        errors: null
      };
    case PLACES_TO_VISIT_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    case LOAD_MORE_PLACES_TO_VISIT:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_MORE_PLACES_TO_VISIT_SUCCESS:
      const placesToVisitNew = action.result.data.placesToVisit.destinationSchemes;
      const placesToVisitOld = state.data.placesToVisit.destinationSchemes;
      const combinedplacesToVisit = [...placesToVisitOld, ...placesToVisitNew];
      return {
        data: {...state.data, 
          placesToVisit: {...state.data.placesToVisit,
            destinationSchemes: combinedplacesToVisit
          }
        }
      };
    case LOAD_MORE_PLACES_TO_VISIT_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    default:
      return state;
  }
}

export const loadMoreCards = (payload) => {
  const { destination, queryParams, filters } = payload;
  return({
    types: [LOAD_MORE_PLACES_TO_VISIT, LOAD_MORE_PLACES_TO_VISIT_SUCCESS, LOAD_MORE_PLACES_TO_VISIT_FAIL],
    promise: client => client.get(placesToVisit(destination, queryParams, filters), {
      params: { main_api: false },
      hostType: config.apiEndpoints.placesToVisit.host
    }),
    withoutCamelCasing: false
  });
};
