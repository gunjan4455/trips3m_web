import config from 'appConfig';

export const HANDLE_TOP_NAVIGATION_REQUEST = 'HANDLE_TOP_NAVIGATION_REQUEST';
export const HANDLE_TOP_NAVIGATION_SUCCESS = 'HANDLE_TOP_NAVIGATION_SUCCESS';
export const HANDLE_TOP_NAVIGATION_FAILURE = 'HANDLE_TOP_NAVIGATION_FAILURE';

export const handleRequestTopNavigationItems = () => ({
  types: [
    HANDLE_TOP_NAVIGATION_REQUEST,
    HANDLE_TOP_NAVIGATION_SUCCESS,
    HANDLE_TOP_NAVIGATION_FAILURE,
  ],
  promise: client => client.get(config.apiEndpoints.topNavigation.url, {
    params: {
      platform: 2,
      'type[]': ['listing', 'weekend', 'destination', 'category'],
    },
    hostType: config.apiEndpoints.topNavigation.host,
    handleTimeout: true
  })
});
