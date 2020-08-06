import config from 'appConfig';

import { getCurrentMonth } from 'amp/helpers/DateTime';
import { pdpFooterLinks } from 'amp/helpers/urlHelpers';

export const LOAD = 'package/details/LOAD';
export const LOAD_SUCCESS = 'package/details/LOAD_SUCCESS';
export const LOAD_FAIL = 'packages/details/LOAD_FAIL';
export const FETCH_FOOTER_LINKS_SUCCESS = 'FETCH_FOOTER-LINKS_SUCCESS';
export const FETCH_FOOTER_LINKS_FAIL = 'FETCH_FOOTER-LINKS_FAIL';
export const FOOTER_LINKS_LOAD = 'LOAD_FOOTER-LINKS';

export function loadDetails(path = '', { params } = {}) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(
      `${config.apiEndpoints.packageDetails.url}/${params.id || 'undefined'}`,
      {
        params: {
          base_url: path,
          meta_tags: true,
          faqs: true,
          similar_packages: true,
          breadcrumbs: true,
          travel_month: params.travelmonth || getCurrentMonth() + 1,
          main_api: true
        },
        hostType: config.apiEndpoints.packageDetails.host
      },
    ),
    resource: {
      path,
      params
    }
  };
}


export const fetchpdpFooterLinks = ( id, queryParams ) => {
  return {
    types: [
      FOOTER_LINKS_LOAD,
      FETCH_FOOTER_LINKS_SUCCESS,
      FETCH_FOOTER_LINKS_FAIL,
    ],
    promise: client => client.get(pdpFooterLinks( id, queryParams ), {
      hostType: config.apiEndpoints.fetchFooterLink.host
    }),
    withoutCamelCasing: false
  };
};


