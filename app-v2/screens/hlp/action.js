import { hlpCommon, plpFooterLinks } from 'helpers/urlHelpers';
import config from 'appConfig';

export const HLP_LOAD = 'HLP_LOAD';
export const HLP_LOAD_SUCCESS = 'HLP_LOAD_SUCCESS';
export const HLP_LOAD_FAIL = 'HLP_LOAD_FAIL';
export const SET_PIVOT = 'SET_PIVOT';
export const HLP_LOAD_MORE_HOTELS = 'HLP_LOAD_MORE_HOTELS';
export const FETCH_FOOTER_LINKS_SUCCESS = 'FETCH_FOOTER-LINKS_SUCCESS';
export const FETCH_FOOTER_LINKS_FAIL = 'FETCH_FOOTER-LINKS_FAIL';
export const FOOTER_LINKS_LOAD = 'LOAD_FOOTER-LINKS';
export const FOBP_LINKS_LOAD = 'FETCH_FOBP_LINKS';
export const FETCH_FOBP_LINKS_SUCCESS = 'FETCH_FOBP_LINKS_SUCCESS';
export const FETCH_FOBP_LINKS_FAIL = 'FETCH_FOBP_LINKS_FAIL';

export const load = ({ query = {}, params = {}, hotelSearchParams = {}, sortBy = '', pageNumber = 1 }) => ({
  types: [HLP_LOAD, HLP_LOAD_SUCCESS, HLP_LOAD_FAIL],
  promise: client => client.get(hlpCommon(hotelSearchParams), {
    params: {
      ...params,
      limit: 10,
      offset: Math.max(10 * ((pageNumber || 1) - 1)),
      breadcrumbs: true,
      faqs: true,
      footer_section: true,
      html_tags: true,
      sort_by: sortBy || 'recommended',
      p_search: JSON.stringify(query),
      main_api: true,
      trust_card: true
    },
    hostType: config.apiEndpoints.hlpCommon.host
  }),
  withoutCamelCasing: false
});

export const loadMoreHotels = ({ query = {}, params = {}, hotelSearchParams = {}, sortBy = '', pageNumber = 1 }) => ({
  types: [HLP_LOAD, HLP_LOAD_MORE_HOTELS, HLP_LOAD_FAIL],
  promise: client => client.get(hlpCommon(hotelSearchParams), {
    params: {
      ...params,
      limit: 10,
      offset: Math.max(10 * ((pageNumber || 1) - 1)),
      html_tags: true,
      sort_by: sortBy || 'recommended',
      p_search: JSON.stringify(query),
      travel_month: params.travelmonth,
      main_api: true
    },
    hostType: config.apiEndpoints.hlpCommon.host
  }),
  withoutCamelCasing: false
});

export const footerLinks = (params) => ({
  types: [FOOTER_LINKS_LOAD,
    FETCH_FOOTER_LINKS_SUCCESS,
    FETCH_FOOTER_LINKS_FAIL,],
  promise: client => client.get(config.apiEndpoints.footerLinks.url, {
    params,
    hostType: config.apiEndpoints.footerLinks.host
  }),
  withoutCamelCasing: false
});

export const fetchPlpFooterLinks = (queryParams) => {
  return {
    types: [
      FOOTER_LINKS_LOAD,
      FETCH_FOOTER_LINKS_SUCCESS,
      FETCH_FOOTER_LINKS_FAIL,
    ],
    promise: client => client.get(plpFooterLinks(queryParams), {
      hostType: config.apiEndpoints.fetchPlpFooterLinks.host
    }),
    withoutCamelCasing: false
  };
};

export const fetchFobpFooterLinks = (queryParams) => {
  return {
    types: [
      FOBP_LINKS_LOAD,
      FETCH_FOBP_LINKS_SUCCESS,
      FETCH_FOBP_LINKS_FAIL,
    ],
    promise: client => client.get(plpFooterLinks(queryParams), {
      hostType: config.apiEndpoints.fetchPlpFooterLinks.host
    }),
    withoutCamelCasing: false
  };
};


