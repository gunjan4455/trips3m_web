import createApiReducer from '../../../reducers/api';
import { TIPS_LOAD, TIPS_LOAD_FAIL, TIPS_LOAD_SUCCESS } from './action';

export default createApiReducer([
  TIPS_LOAD,
  TIPS_LOAD_SUCCESS,
  TIPS_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return  globalState.tips.data.tips || {};
  } catch (e) {
    return {};
  }
};

