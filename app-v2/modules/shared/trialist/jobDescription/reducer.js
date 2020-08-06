import createApiReducer from '../../../../reducers/api';

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
} from './action';

export default createApiReducer([
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
]);

