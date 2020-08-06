import config from 'appConfig';
import { cityBlockCommon } from '../../../app/helpers/urlHelpers';

export const LOAD = 'cityBlock/LOAD';
export const LOAD_SUCCESS = 'cityBlock/LOAD_SUCCESS';
export const LOAD_FAIL = 'cityBlock/LOAD_FAIL';
export const FOOTER_LINKS = 'FOOTER_LINKS';
export const FOOTER_LINKS_SUCCESS = 'FOOTER_LINKS_SUCCESS';
export const FOOTER_LINKS_FAIL = 'FOOTER_LINKS_FAIL';

export const load = ({ destination, queryParams }) => {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(cityBlockCommon(destination, queryParams), {
      hostType: config.apiEndpoints.cityBlockCommon.host
    }),
    withoutCamelCasing: false
  };
};

export const footerLinks = (params) => ({
  types: [FOOTER_LINKS, FOOTER_LINKS_SUCCESS, FOOTER_LINKS_FAIL],
  promise: client => client.get(config.apiEndpoints.footerLinks.url, {
    params,
    hostType: config.apiEndpoints.footerLinks.host
  })
});

