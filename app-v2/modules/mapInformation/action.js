import { mapInformation } from 'helpers/urlHelpers';
import config from 'appConfig';

export const MAP_BOX_LOAD = 'MAP_BOX_LOAD';
export const MAP_BOX_LOAD_SUCCESS = 'MAP_BOX_LOAD_SUCCESS';
export const MAP_BOX_LOAD_FAIL = 'MAP_BOX_LOAD_FAIL';

export function fetchMapInformationData({destination, queryParams}) {
  return {
    types: [
      MAP_BOX_LOAD,
      MAP_BOX_LOAD_SUCCESS,
      MAP_BOX_LOAD_FAIL
    ],
    promise: client => client.get(mapInformation(destination, queryParams), {
      hostType: config.apiEndpoints.mapInformation.host
    }),
    withoutCamelCasing: false
  };
}
