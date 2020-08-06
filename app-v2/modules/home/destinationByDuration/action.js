import config from 'appConfig';
import { destinationByDuration } from 'helpers/urlHelpers';

export const DESTINATION_BY_DURATION = 'DESTINATION_BY_DURATION';
export const DESTINATION_BY_DURATION_SUCCESS = 'DESTINATION_BY_DURATION_SUCCESS';
export const DESTINATION_BY_DURATION_FAIL = 'DESTINATION_BY_DURATION_FAIL';

export function fetchDestinationByDuration({ queryParams = {}, main_api = false }) {
  return {
    types: [
      DESTINATION_BY_DURATION,
      DESTINATION_BY_DURATION_SUCCESS,
      DESTINATION_BY_DURATION_FAIL
    ],
    promise: client => client.get(destinationByDuration(queryParams),
      {
        params: { main_api }, handleTimeout: true, hostType: config.apiEndpoints.destinationByDuration.host
      }),
    withoutCamelCasing: false
  };
}
