import config from 'appConfig';

import createApiReducer from '../../reducers/api';
import { thingsToDo } from 'helpers/urlHelpers';

import {
  THINGS_TO_DO_LOAD,
  THINGS_TO_DO_LOAD_SUCCESS,
  THINGS_TO_DO_LOAD_FAIL,
  LOAD_MORE_THINGS_TO_DO,
  LOAD_MORE_THINGS_TO_DO_SUCCESS,
  LOAD_MORE_THINGS_TO_DO_FAIL
} from './action';

export const results = (globalState) => {
  try {
    return globalState.thingsToDo.data.thingsToDo || {};
  } catch (e) {
    return {};
  }
};

const initialState ={};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case THINGS_TO_DO_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case THINGS_TO_DO_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result && action.result.data,
        errors: null
      };
    case THINGS_TO_DO_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    case LOAD_MORE_THINGS_TO_DO:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_MORE_THINGS_TO_DO_SUCCESS:
      const thingsToDoNew = action.result.data.thingsToDo.destinationSchemes;
      const thingsToDoOld = state.data.thingsToDo.destinationSchemes;
      const combinedThingsToDo = [...thingsToDoOld, ...thingsToDoNew];
      return {
        data: {...state.data, 
          thingsToDo: {...state.data.thingsToDo,
            destinationSchemes: combinedThingsToDo
          }
        }
      };
    case LOAD_MORE_THINGS_TO_DO_FAIL:
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

export const loadMoreThingsToDoCards = (payload) => {
  const { destination, queryParams, filters } = payload;
  return({
    types: [LOAD_MORE_THINGS_TO_DO, LOAD_MORE_THINGS_TO_DO_SUCCESS, LOAD_MORE_THINGS_TO_DO_FAIL],
    promise: client => client.get(thingsToDo(destination, queryParams, filters), {
      params: { main_api: false },
      hostType: config.apiEndpoints.thingsToDo.host
    }),
    withoutCamelCasing: false
  });
};

