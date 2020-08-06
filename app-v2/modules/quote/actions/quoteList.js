import { tripQuotesPath } from 'helpers/urlHelpers';

// Action constants
export const LOAD = 'quote/list/LOAD';
export const LOAD_SUCCESS = 'quote/list/LOAD_SUCCESS';
export const LOAD_FAIL = 'quote/list/LOAD_FAIL';

// Action creators
export const load = ({ tripId, query = '', view = 'full' }) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(tripQuotesPath(tripId, query, view)),
  withoutCamelCasing: false
});
