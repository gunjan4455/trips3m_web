import createApiReducer from 'app-v2/reducers/api';
import {
  DESTINATION_BY_DURATION,
  DESTINATION_BY_DURATION_SUCCESS,
  DESTINATION_BY_DURATION_FAIL
} from './action';

export default createApiReducer([
  DESTINATION_BY_DURATION,
  DESTINATION_BY_DURATION_SUCCESS,
  DESTINATION_BY_DURATION_FAIL
]);