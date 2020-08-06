import { preDefinedMessagePath } from 'helpers/urlHelpers';
import config from 'appConfig';

// Action constants
export const PDM_LOAD = 'PDM/chat/LOAD';
export const PDM_LOAD_SUCCESS = 'PDM/chat/LOAD_SUCCESS';
export const PDM_LOAD_FAIL = 'PDM/chat/LOAD_FAIL';
export const CURRENT_PDM_CATEGORY = 'PDM/chat/CURRENT_PDM_CATEGORY';
export const PDM_VIEW_SHOW = 'PDM/chat/SHOW_VIEW';

export const setPdmCategory = (category) => ({
  type: CURRENT_PDM_CATEGORY,
  category
});

export const showHidePdmView = (show) => ({
  type: PDM_VIEW_SHOW,
  show
});

export const fetchPreDefinedMessages = () => ({
  types: [PDM_LOAD, PDM_LOAD_SUCCESS, PDM_LOAD_FAIL],
  promise: client => client.get(preDefinedMessagePath(), {
    hostType: config.apiEndpoints.preDefinedMessagePath.host
  }),
  withoutCamelCasing: true
});
