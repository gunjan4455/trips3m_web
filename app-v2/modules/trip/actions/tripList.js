import { allTripsUrl } from 'helpers/urlHelpers';

// Action constants
export const LOAD = 'trip/list/LOAD';
export const LOAD_SUCCESS = 'trip/list/LOAD_SUCCESS';
export const LOAD_FAIL = 'trip/list/LOAD_FAIL';

// Action creators
export const load = ({ view }) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(allTripsUrl(view)),
  withoutCamelCasing: false
});
