import { quoteCommentsPath } from 'helpers/urlHelpers';

export const LOAD = 'quotes/comments/LOAD';
export const LOAD_SUCCESS = 'quotes/comments/LOAD_SUCCESS';
export const LOAD_FAIL = 'quotes/comments/LOAD_FAIL';

// Action creators
export const load = ({ tripId, quoteIds = [] }) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(quoteCommentsPath(tripId, quoteIds)),
  withoutCamelCasing: false
});
