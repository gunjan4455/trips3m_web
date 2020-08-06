import config from 'appConfig';

export const SEARCH_LOAD_REQUEST = 'SEARCH_LOAD_REQUEST';
export const SEARCH_LOAD_SUCCESS = 'SEARCH_LOAD_SUCCESS';
export const SEARCH_LOAD_FAILURE = 'SEARCH_LOAD_FAILURE';
export const SEARCH_NAVIGATION_REQUEST = 'SEARCH_NAVIGATION_REQUEST';
export const SEARCH_NAVIGATION_SUCCESS = 'SEARCH_NAVIGATION_SUCCESS';
export const SEARCH_NAVIGATION_FAILURE = 'SEARCH_NAVIGATION_FAILURE';
export const SEARCH_CLEAR = 'SEARCH_CLEAR';

export const clear = () => ({ type: SEARCH_CLEAR });

export const load = query => ({
  types: [
    SEARCH_LOAD_REQUEST,
    SEARCH_LOAD_SUCCESS,
    SEARCH_LOAD_FAILURE,
  ],
  promise: (client) => client.get(config.apiEndpoints.search.url, {
    params: {
      query
    },
    hostType: config.apiEndpoints.search.host
  }),
  withoutCamelCasing: true
});
export const search = query => ({
  types: [
    SEARCH_NAVIGATION_REQUEST,
    SEARCH_NAVIGATION_SUCCESS,
    SEARCH_NAVIGATION_FAILURE,
  ],
  promise: (client) => client.get(config.apiEndpoints.searchNavigationURL.url, {
    params: {
      query
    },
    hostType: config.apiEndpoints.searchNavigationURL.host
  }),
  withoutCamelCasing: true
});
