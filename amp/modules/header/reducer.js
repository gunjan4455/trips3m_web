import { combineReducers } from 'redux';
import * as ActionTypes from './action';
import createApiReducer from 'app-v2/reducers/api';

const ui = createApiReducer([
  ActionTypes.HANDLE_TOP_NAVIGATION_REQUEST,
  ActionTypes.HANDLE_TOP_NAVIGATION_SUCCESS,
  ActionTypes.HANDLE_TOP_NAVIGATION_FAILURE,
]);

const items = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.HANDLE_TOP_NAVIGATION_SUCCESS: {
      return action.result.data.entities;
    }
    default:
      return state;
  }
};

export default combineReducers({
  items,
  ui,
});

