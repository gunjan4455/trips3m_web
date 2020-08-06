import { normalize } from 'helpers/blog';
import {
  TRAVELLER_STORY_LOAD,
  TRAVELLER_STORY_LOAD_SUCCESS,
  TRAVELLER_STORY_LOAD_FAIL
} from './action';

const initialState = {
  travellerStories: [],
  loaded: false,
  loading: false,
};

export function travellerStories(state = initialState, action = {}) {

  switch (action.type) {
    case TRAVELLER_STORY_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case TRAVELLER_STORY_LOAD_SUCCESS: {
      return {
        ...state,
        travellerStories: normalize(action.result), //normalize(data)
        loaded: true,
        loading: false,
        errors: null
      };
    }
    case TRAVELLER_STORY_LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        errors: action.error && action.error.errors
      };
    }
    default:
      return state;
  }
}
