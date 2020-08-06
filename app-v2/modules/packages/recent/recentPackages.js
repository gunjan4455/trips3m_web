import config from 'appConfig';

const LOAD = 'recentPackages/LOAD';
const LOAD_SUCCESS = 'recentPackages/LOAD_SUCCESS';
const LOAD_FAIL = 'recentPackages/LOAD_FAIL';

const initialState = {
  loaded: false,
  data: [],
  loading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}

export function isRecentPackagesPresent(globalState) {
  try {
    return (globalState.recentPackages.data.total_count > 0);
  } catch (e) {
    return false;
  }
}

export function loadRecentPackages(params) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(
      config.apiEndpoints.recentPackages.url,
      {
        params, hostType: config.apiEndpoints.recentPackages.host
      }
    ),
    withoutCamelCasing: true
  };
}

export function getRecentPackages(globalState) {
  try {
    return globalState.recentPackages.data.packages;
  } catch (e) {
    return [];
  }
}

export function isLoaded(globalState) {
  return globalState.recentPackages && globalState.recentPackages.loaded;
}
