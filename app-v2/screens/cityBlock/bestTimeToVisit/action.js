import { bestTimeToVisit } from 'helpers/urlHelpers';
import config from 'appConfig';

export const BEST_TIME_TO_VISIT_LOAD = 'cityBlock/bstv/BEST_TIME_TO_VISIT_LOAD';
export const BEST_TIME_TO_VISIT_LOAD_SUCCESS = 'cityBlock/bstv/BEST_TIME_TO_VISIT_LOAD_SUCCESS';
export const BEST_TIME_TO_VISIT_LOAD_FAIL = 'cityBlock/bstv/BEST_TIME_TO_VISIT_LOAD_FAIL';

export const fetchBestTimeToVisit = ({ destination, queryParams }) => {
  return {
    types: [BEST_TIME_TO_VISIT_LOAD, BEST_TIME_TO_VISIT_LOAD_SUCCESS, BEST_TIME_TO_VISIT_LOAD_FAIL],
    promise: client => client.get(bestTimeToVisit(destination, queryParams), {
      hostType: config.apiEndpoints.bestTimeToVisit.host
    }),
    withoutCamelCasing: false
  };
};
