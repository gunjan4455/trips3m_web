import createApiReducer from '../../../reducers/api';
import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../actions/constants';

export default createApiReducer([
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
]);

export const getQuoteRejectionReasons = state => (
  (
    state.quote.constants.data && state.quote.constants.data.quoteRejectionReasons
  ) || {}
);

export const getRequestCallbackReasons = state => (
  (
    state.quote.constants.data && state.quote.constants.data.requestCallBackOptions
  ) || {}
);

export const quoteConstantsLoaded = (state) => {
  return state.quote.constants.loaded || false;
};
