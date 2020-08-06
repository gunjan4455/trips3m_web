import { recentPackages } from 'helpers/urlHelpers';
import config from 'appConfig';

export const RECENT_PACKAGES_LOAD = 'RECENT_PACKAGES_LOAD';
export const RECENT_PACKAGES_LOAD_SUCCESS = 'RECENT_PACKAGES_LOAD_SUCCESS';
export const RECENT_PACKAGES_LOAD_FAIL = 'RECENT_PACKAGES_LOAD_FAIL';

export function fetchRecentPackages({destination, queryParams}) {
  return {
    types: [
      RECENT_PACKAGES_LOAD,
      RECENT_PACKAGES_LOAD_SUCCESS,
      RECENT_PACKAGES_LOAD_FAIL
    ],
    promise: client => client.get(recentPackages(destination, queryParams), {
      hostType: config.apiEndpoints.recentPackages.host
    }),
    withoutCamelCasing: false
  };
}
