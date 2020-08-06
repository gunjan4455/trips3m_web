import { placesToVisit } from 'helpers/urlHelpers';
import config from 'appConfig';

export const PLACES_TO_VISIT_LOAD = 'PLACES_TO_VISIT_LOAD';
export const PLACES_TO_VISIT_LOAD_SUCCESS = 'PLACES_TO_VISIT_LOAD_SUCCESS';
export const PLACES_TO_VISIT_LOAD_FAIL = 'PLACES_TO_VISIT_LOAD_FAIL';
export const LOAD_MORE_PLACES_TO_VISIT = 'LOAD_MORE_PLACES_TO_VISIT';
export const LOAD_MORE_PLACES_TO_VISIT_SUCCESS = 'LOAD_MORE_PLACES_TO_VISIT_SUCCESS';
export const LOAD_MORE_PLACES_TO_VISIT_FAIL = 'LOAD_MORE_PLACES_TO_VISIT_FAIL';

export function fetchPlacesToVisitData({ destination = '', lookupParent = false, queryParams = {}, filters = {}, main_api = false }) {
  const destinations = destination.split(',');
  const mostRecentDest = destinations.length ? destinations[0] : '';

  queryParams['places_to_visit'] = true;
  queryParams['lookup_parent'] = lookupParent;

  return {
    types: [
      PLACES_TO_VISIT_LOAD,
      PLACES_TO_VISIT_LOAD_SUCCESS,
      PLACES_TO_VISIT_LOAD_FAIL
    ],
    promise: client => client.get(placesToVisit(mostRecentDest, queryParams, filters), {
      params: { main_api },
      hostType: config.apiEndpoints.placesToVisit.host
    }),
    withoutCamelCasing: false
  };
}
