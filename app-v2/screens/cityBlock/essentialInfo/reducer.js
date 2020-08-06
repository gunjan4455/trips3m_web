import createApiReducer from '../../../reducers/api';
import {
  EINFO_LOAD,
  EINFO_LOAD_SUCCESS,
  EINFO_LOAD_FAIL
} from './action';

export default createApiReducer([
  EINFO_LOAD,
  EINFO_LOAD_SUCCESS,
  EINFO_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.essentialInfo.data.essentialInfo || {};
  } catch (e) {
    return {};
  }
};

