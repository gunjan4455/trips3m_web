import createApiReducer from '../../../reducers/api';
import { ENTRY_FEES_LOAD, ENTRY_FEES_LOAD_FAIL, ENTRY_FEES_LOAD_SUCCESS } from './action';

export default createApiReducer([
  ENTRY_FEES_LOAD,
  ENTRY_FEES_LOAD_SUCCESS,
  ENTRY_FEES_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return  globalState.entryFees.data.entryFees || {};
  } catch (e) {
    return {};
  }
};

