import config from 'appConfig';

const LOAD = 'animatedBanner/LOAD';
const LOAD_SUCCESS = 'animatedBanner/LOAD_SUCCESS';
const LOAD_FAIL = 'animatedBanner/LOAD_FAIL';

const initialState = {
  loaded: false,
  banner: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        banner: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error.errors || action.error,
        banner: {}
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.banner && globalState.banner.loaded;
}

export function isContent(globalState) {
  try {
    return globalState.banner.banner.success;
  } catch (e) {
    return false;
  }
}

export function content(globalState) {
  try {
    return globalState.banner.banner.data.banner;
  } catch (e) {
    return {};
  }
}

export function loadContent(params) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(
      config.apiEndpoints.animatedBanner.url,
      {
        params, hostType: config.apiEndpoints.animatedBanner.host
      }
    )
  };
}
