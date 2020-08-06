import createApiReducer from '../../reducers/api';
import { SEARCH_LOAD_REQUEST, SEARCH_LOAD_FAILURE, SEARCH_LOAD_SUCCESS } 
  from './action';

export default createApiReducer([
  SEARCH_LOAD_REQUEST,
  SEARCH_LOAD_FAILURE,
  SEARCH_LOAD_SUCCESS
]);

export const results = (globalState) => {
  try {
    return globalState.search.data || {};
  } catch (e) {
    return {};
  }
};
