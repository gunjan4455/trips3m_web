import createApiReducer from '../../reducers/api';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from './action';

export default createApiReducer([LOAD, LOAD_SUCCESS, LOAD_FAIL]);

export const isLoaded = globalState => {
  return (globalState && globalState.career && globalState.career.apply && globalState.career.apply.loaded) || false;
};
