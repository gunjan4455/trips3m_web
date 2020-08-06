import { LOAD, LOAD_FAIL, LOAD_SUCCESS, FOOTER_LINKS_SUCCESS } from './action';

const initialState = {
  loading: false,
  loaded: false,
  data: {},
  footerLinks: [],
};

export default function hlp(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result && action.result.data,
        errors: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    case FOOTER_LINKS_SUCCESS: {
      return {
        ...state,
        footerLinks: action.result && action.result.data
      };
    }
    default:
      return state;
  }
}

export const results = (globalState) => {
  try {
    return globalState.cityBlock.data || {};
  } catch (e) {
    return {};
  }
};

export const isLoaded = (globalState) => {
  try {
    return globalState.cityBlock.cityBlock.loaded || false;
  } catch (e) {
    return false;
  }
};
