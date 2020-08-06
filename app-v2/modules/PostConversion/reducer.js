

import {
  POST_CONVERSION_DATA_LOAD,
  POST_CONVERSION_DATA_LOAD_SUCCESS,
  POST_CONVERSION_DATA_LOAD_FAIL
} from './action';

import {
  getLoadState,
  getFailState,
  getSuccessState,
  INITIAL_STATE
} from 'amp/helpers/reducer';

const postConversion = (state = INITIAL_STATE, action) => {
  let newState = state;
  const { type } = action;
  switch(type) {
    case POST_CONVERSION_DATA_LOAD: {
      newState = getLoadState(state);
      break;
    }
    case POST_CONVERSION_DATA_LOAD_SUCCESS: {
      newState = getSuccessState(state);
      newState.data = action.result;
      break;
    }
    case POST_CONVERSION_DATA_LOAD_FAIL: {
      newState = getFailState(state);
      break;
    }
    default: {
      state = newState;
    }
  };
  return newState;
};

export default postConversion;
