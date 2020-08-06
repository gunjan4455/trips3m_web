import { howToReach } from 'helpers/urlHelpers';
import config from 'appConfig';

export const HOW_TO_REACH_LOAD = 'HOW_TO_REACH_LOAD';
export const HOW_TO_REACH_LOAD_SUCCESS = 'HOW_TO_REACH_LOAD_SUCCESS';
export const HOW_TO_REACH_LOAD_FAIL = 'HOW_TO_REACH_LOAD_FAIL';

export function fetchHowToReach({destination, queryParams}) {
  return {
    types: [
      HOW_TO_REACH_LOAD,
      HOW_TO_REACH_LOAD_SUCCESS,
      HOW_TO_REACH_LOAD_FAIL
    ],
    promise: client => client.get(howToReach(destination, queryParams), {
      hostType: config.apiEndpoints.howToReach.host
    }),
    withoutCamelCasing: false
  };
}
