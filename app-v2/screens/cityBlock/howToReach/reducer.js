import createApiReducer from '../../../reducers/api';
import {
  HOW_TO_REACH_LOAD,
  HOW_TO_REACH_LOAD_SUCCESS,
  HOW_TO_REACH_LOAD_FAIL
} from './action';

export default createApiReducer([
  HOW_TO_REACH_LOAD,
  HOW_TO_REACH_LOAD_SUCCESS,
  HOW_TO_REACH_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.howToReach.data.howToReach || {};
  } catch (e) {
    return {};
  }
};
