import createApiReducer from '../../../reducers/api';
import {
  RECENT_PACKAGES_LOAD,
  RECENT_PACKAGES_LOAD_SUCCESS,
  RECENT_PACKAGES_LOAD_FAIL
} from './action';

export default createApiReducer([
  RECENT_PACKAGES_LOAD,
  RECENT_PACKAGES_LOAD_SUCCESS,
  RECENT_PACKAGES_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.recentPackages.data.packages || {};
  } catch (e) {
    return {};
  }
};
