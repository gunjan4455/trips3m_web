import { essentialInfo } from 'helpers/urlHelpers';
import config from 'appConfig';

export const EINFO_LOAD = 'cityBlock/einfo/EINFO_LOAD';
export const EINFO_LOAD_SUCCESS = 'cityBlock/einfo/EINFO_LOAD_SUCCESS';
export const EINFO_LOAD_FAIL = 'cityBlock/einfo/EINFO_LOAD_FAIL';

export const fetchEssentialInfo = ({ destination, queryParams }) => {
  return {
    types: [EINFO_LOAD, EINFO_LOAD_SUCCESS, EINFO_LOAD_FAIL],
    promise: client => client.get(essentialInfo(destination, queryParams), {
      hostType: config.apiEndpoints.essentialInfo.host
    }),
    withoutCamelCasing: false
  };
};
