import createApiReducer from '../../reducers/api';
import {
  FULL_BANNER_LOAD,
  FULL_BANNER_LOAD_SUCCESS,
  FULL_BANNER_LOAD_FAIL
} from './action';

export default createApiReducer([
  FULL_BANNER_LOAD,
  FULL_BANNER_LOAD_SUCCESS,
  FULL_BANNER_LOAD_FAIL
]);
