import { normalize } from 'helpers/blog';
import { LETS_DISCOVER_LOAD_SUCCESS, } from './action';

const initialState = {
  letsDiscover: []
};

export function letsDiscover(state = initialState, action = {}) {
  switch (action.type) {
    case LETS_DISCOVER_LOAD_SUCCESS: {
      return {
        ...state,
        letsDiscover: normalize(action.result)
      };
    }
    default:
      return state;
  }
}
