import { banner } from 'helpers/urlHelpers';
import config from 'appConfig';

export const FULL_BANNER_LOAD = 'FULL_BANNER_LOAD';
export const FULL_BANNER_LOAD_SUCCESS = 'FULL_BANNER_LOAD_SUCCESS';
export const FULL_BANNER_LOAD_FAIL = 'FULL_BANNER_LOAD_FAIL';

export function fetchBannerData({ destination, queryParams }) {
  return {
    types: [
      FULL_BANNER_LOAD,
      FULL_BANNER_LOAD_SUCCESS,
      FULL_BANNER_LOAD_FAIL
    ],
    promise: client => client.get(banner(destination, queryParams), {
      params: { main_api: true },
      hostType: config.apiEndpoints.banner.host
    }),
    withoutCamelCasing: false
  };
}
