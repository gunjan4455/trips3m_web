import config from 'appConfig';

// Action constants
export const LOAD = 'quoteDetail/constants/LOAD';
export const LOAD_SUCCESS = 'quoteDetail/constants/LOAD_SUCCESS';
export const LOAD_FAIL = 'quoteDetail/constants/LOAD_FAIL';

// Action creators
export const load = () => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.quoteConstants.url, {
    hostType: config.apiEndpoints.quoteConstants.host
  }),
  withoutCamelCasing: false
});
