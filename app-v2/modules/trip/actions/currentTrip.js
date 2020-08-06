import { securityTokenPath } from 'helpers/urlHelpers';

export const SECURITY_TOKEN_LOAD = 'trip/SECURITY_TOKEN_LOAD';
export const SECURITY_TOKEN_LOAD_SUCCESS = 'trip/postTrip/SECURITY_TOKEN_LOAD_SUCCESS';
export const SECURITY_TOKEN_LOAD_FAIL = 'trip/SECURITY_TOKEN_LOAD_FAIL';

export const UPDATE_REQUESTED_TRIP = 'trip/UPDATE_REQUESTED_TRIP';

export const updateRequestedTripId = requestedTripId => {
  return {
    type: UPDATE_REQUESTED_TRIP,
    requestedTripId,
  };
};

export function getSecurityToken(tripId) {
  return {
    types: [SECURITY_TOKEN_LOAD, SECURITY_TOKEN_LOAD_SUCCESS, SECURITY_TOKEN_LOAD_FAIL],
    promise: client => client.get(securityTokenPath(tripId), { params: { main_api: true } }),
    withoutCamelCasing: true
  };
}
