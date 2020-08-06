import { rtripConstantsPath } from 'helpers/urlHelpers';

export const TRIP_CONSTANTS_LOAD = 'RequestLanding/RTRIP_CONSTANTS_LOAD';
export const TRIP_CONSTANTS_LOAD_SUCCESS = 'RequestLanding/RTRIP_CONSTANTS_LOAD_SUCCESS';
export const TRIP_CONSTANTS_LOAD_FAIL = 'RequestLanding/RTRIP_CONSTANTS_LOAD_FAIL';


export function fetchTripConstants() {
  return {
    types: [
      TRIP_CONSTANTS_LOAD,
      TRIP_CONSTANTS_LOAD_SUCCESS,
      TRIP_CONSTANTS_LOAD_FAIL
    ],
    promise: client => client.get(rtripConstantsPath()),
    withoutCamelCasing: false
  };
}

