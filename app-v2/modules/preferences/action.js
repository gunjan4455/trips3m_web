import {
  preferenceOptionsPath,
  updatePreferencesPath,
} from 'helpers/urlHelpers';
import config from 'appConfig';

// Action constants
export const PREFERENCE_OPTIONS_LOAD = 'RTRIPS/PREFERENCEOPTIONS/LOAD';
export const PREFERENCE_OPTIONS_LOAD_SUCCESS = 'RTRIPS/PREFERENCEOPTIONS/LOAD_SUCCESS';
export const PREFERENCE_OPTIONS_LOAD_FAIL = 'RTRIPS/PREFERENCEOPTIONS/LOAD_FAIL';

export const UPDATE_RTRIP_LOAD = 'REQUESTEDLANDING/UPDATEPREFERENCES/LOAD';
export const UPDATE_RTRIP_LOAD_SUCCESS = 'REQUESTEDLANDING/UPDATEPREFERENCES/LOAD_SUCCESS';
export const UPDATE_RTRIP_LOAD_FAIL = 'REQUESTEDLANDING/UPDATEPREFERENCES/LOAD_FAIL';

export function fetchPreferenceOptions({ requestedTripId, query = '' }) {
  return {
    types: [
      PREFERENCE_OPTIONS_LOAD,
      PREFERENCE_OPTIONS_LOAD_SUCCESS,
      PREFERENCE_OPTIONS_LOAD_FAIL
    ],
    promise: client => client.get(preferenceOptionsPath(requestedTripId, query), {
      hostType: config.apiEndpoints.preferenceOptions.host
    }),
    withoutCamelCasing: false
  };
}

export function updatePreferences(rtripId, rtParams, query = '') {
  const data = {
    _method: 'put',
    ...rtParams,
    hostType: config.apiEndpoints.updatePreferences.host
  };
  return {
    types: [
      UPDATE_RTRIP_LOAD,
      UPDATE_RTRIP_LOAD_SUCCESS,
      UPDATE_RTRIP_LOAD_FAIL
    ],
    promise: client => client.put(updatePreferencesPath(rtripId, query), { data }),
    withoutCamelCasing: false
  };
}
