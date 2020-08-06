import createApiReducer from '../../reducers/api';
import {
  MAP_BOX_LOAD,
  MAP_BOX_LOAD_SUCCESS,
  MAP_BOX_LOAD_FAIL
} from './action';

export default createApiReducer([
  MAP_BOX_LOAD,
  MAP_BOX_LOAD_SUCCESS,
  MAP_BOX_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.mapInformation.data.mapInformation || {};
  } catch (e) {
    return {};
  }
};
