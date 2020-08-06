import { pageLayout } from 'helpers/urlHelpers';
import config from 'appConfig';

export const LAYOUT_REQUEST = 'LAYOUT_REQUEST';
export const LAYOUT_SUCCESS = 'LAYOUT_SUCCESS';
export const LAYOUT_FAILURE = 'LAYOUT_FAILURE';

export const loadLayout = (pageName, tripId) => ({
  types: [
    LAYOUT_REQUEST,
    LAYOUT_SUCCESS,
    LAYOUT_FAILURE,
  ],
  promise: client => client.get(pageLayout(pageName, tripId), {
    params: { main_api: true },
    hostType: config.apiEndpoints.pageLayout.host,
  })
});
