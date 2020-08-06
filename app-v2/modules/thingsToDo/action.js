import { thingsToDo } from 'helpers/urlHelpers';
import config from 'appConfig';

export const THINGS_TO_DO_LOAD = 'THINGS_TO_DO_LOAD';
export const THINGS_TO_DO_LOAD_SUCCESS = 'THINGS_TO_DO_LOAD_SUCCESS';
export const THINGS_TO_DO_LOAD_FAIL = 'THINGS_TO_DO_LOAD_FAIL';
export const LOAD_MORE_THINGS_TO_DO = 'LOAD_MORE_THINGS_TO_DO';
export const LOAD_MORE_THINGS_TO_DO_SUCCESS = 'LOAD_MORE_THINGS_TO_DO_SUCCESS';
export const LOAD_MORE_THINGS_TO_DO_FAIL = 'LOAD_MORE_THINGS_TO_DO_FAIL';

export function fetchThingsToDoData({ destination = '', lookupParent = false, queryParams = {}, filters = {}, main_api = false }) {
  const destinations = destination.split(',');
  const mostRecentDest = destinations.length ? destinations[0] : '';

  queryParams['things_to_do'] = true;
  queryParams['lookup_parent'] = lookupParent;

  return {
    types: [
      THINGS_TO_DO_LOAD,
      THINGS_TO_DO_LOAD_SUCCESS,
      THINGS_TO_DO_LOAD_FAIL
    ],
    promise: client => client.get(thingsToDo(mostRecentDest, queryParams, filters), {
      params: { main_api },
      hostType: config.apiEndpoints.thingsToDo.host
    }),
    withoutCamelCasing: false
  };
}
