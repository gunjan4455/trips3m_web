import createApiReducer from '../../reducers/api';
import {
  FAQ_LOAD,
  FAQ_LOAD_SUCCESS,
  FAQ_LOAD_FAIL
} from './action';

export default createApiReducer([
  FAQ_LOAD,
  FAQ_LOAD_SUCCESS,
  FAQ_LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.faqs.data || {};
  } catch (e) {
    return {};
  }
};

export const hlpResults = (globalState) => {
  try {
    return globalState.hlp.data && globalState.hlp.data.data.faqs || {};
  } catch (e) {
    return {};
  }
};
