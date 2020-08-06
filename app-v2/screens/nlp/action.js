import config from 'appConfig';

import { replaceUniqueAndSecretKeys } from'helpers/urlHelpers';

export const GET_PREFERENCES_DATA = 'pnp/GET_PREFERENCES_DATA';
export const GET_PREFERENCES_DATA_SUCCESS = 'pnp/GET_PREFERENCES_DATA_SUCCESS';
export const GET_PREFERENCES_DATA_FAIL = 'pnp/GET_PREFERENCES_DATA_FAIL';
export const GET_PREFERENCES_PARAMS = 'pnp/GET_PREFERENCES_PARAMS';
export const GET_PREFERENCES_PARAMS_SUCCESS = 'pnp/GET_PREFERENCES_PARAMS_SUCCESS';
export const GET_PREFERENCES_PARAMS_FAIL = 'pnp/GET_PREFERENCES_PARAMS_FAIL';

export const getPreferencesData = (params) => ({
  types: [GET_PREFERENCES_DATA, GET_PREFERENCES_DATA_SUCCESS, GET_PREFERENCES_DATA_FAIL],
  promise: client => client.get(
    config.apiEndpoints.nuturePreferences.preferenceNurture.url,
    { params,
      hostType: config.apiEndpoints.nuturePreferences.preferenceNurture.host,
    }),
  withoutCamelCasing: false,
});

export const getPreferenceParams = (uniqueKey, secretKey) => ({
  types: [GET_PREFERENCES_PARAMS, GET_PREFERENCES_PARAMS_SUCCESS, GET_PREFERENCES_PARAMS_FAIL],
  promise: client => client.get(replaceUniqueAndSecretKeys(config.apiEndpoints.nuturePreferences.preferenceParams.url, uniqueKey, secretKey),
    {
      params: { main_api: true },
      hostType: config.apiEndpoints.nuturePreferences.preferenceParams.host
    }),
});
