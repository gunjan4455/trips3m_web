import { entryFeesTimingsTips } from 'helpers/urlHelpers';
import config from 'appConfig';

export const TIMINGS_LOAD = 'TIMINGS_LOAD';
export const TIMINGS_LOAD_SUCCESS = 'TIMINGS_LOAD_SUCCESS';
export const TIMINGS_LOAD_FAIL = 'TIMINGS_LOAD_FAIL';

export function fetchTimings({destination, queryParams}) {
  return {
    types: [
      TIMINGS_LOAD,
      TIMINGS_LOAD_SUCCESS,
      TIMINGS_LOAD_FAIL
    ],
    promise: client => client.get(entryFeesTimingsTips(destination, queryParams),{
      hostType: config.apiEndpoints.entryFeesTimingsTips.host
    }),
    withoutCamelCasing: false
  };
}
