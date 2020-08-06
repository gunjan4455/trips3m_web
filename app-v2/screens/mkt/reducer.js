import createApiReducer from '../../reducers/api';
import { MKT_LOAD, MKT_LOAD_SUCCESS, MKT_LOAD_FAILURE } from './actions';

export default createApiReducer([
  MKT_LOAD, MKT_LOAD_SUCCESS, MKT_LOAD_FAILURE
]);
