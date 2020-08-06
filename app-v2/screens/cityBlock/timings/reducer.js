import createApiReducer from '../../../reducers/api';
import { TIMINGS_LOAD, TIMINGS_LOAD_FAIL, TIMINGS_LOAD_SUCCESS } from './action';

export default createApiReducer([
  TIMINGS_LOAD,
  TIMINGS_LOAD_SUCCESS,
  TIMINGS_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return  globalState.timings.data.timings || {};
  } catch (e) {
    return {};
  }
};

