import createApiReducer from '../../../reducers/api';
import {
  BEST_TIME_TO_VISIT_LOAD,
  BEST_TIME_TO_VISIT_LOAD_SUCCESS,
  BEST_TIME_TO_VISIT_LOAD_FAIL
} from './action';

export default createApiReducer([
  BEST_TIME_TO_VISIT_LOAD,
  BEST_TIME_TO_VISIT_LOAD_SUCCESS,
  BEST_TIME_TO_VISIT_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.bestTimeToVisit.data.bestTimeToVisit || {};
  } catch (e) {
    return {};
  }
};

