import {
  BREAD_CRUMB_LOAD,
  BREAD_CRUMB_LOAD_SUCCESS,
  BREAD_CRUMB_LOAD_FAIL
} from '../actionConstants';
import config from '../../config';

const loadBreadCrumbs = url => ({
  types: [
    BREAD_CRUMB_LOAD,
    BREAD_CRUMB_LOAD_SUCCESS,
    BREAD_CRUMB_LOAD_FAIL
  ],
  promise: client => client.get(config.apiEndpoints.breadCrumbs.url, {
    params: { url },
    hostType: config.apiEndpoints.breadCrumbs.host
  })
});

export {
  loadBreadCrumbs,
};
