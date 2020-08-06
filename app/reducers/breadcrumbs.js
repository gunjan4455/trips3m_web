import {
  BREAD_CRUMB_LOAD,
  BREAD_CRUMB_LOAD_SUCCESS,
  BREAD_CRUMB_LOAD_FAIL
} from '../actionConstants';

const initialState = {
  loading: false,
  breadcrumbs: [],
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case BREAD_CRUMB_LOAD:
      return {
        ...state,
        loading: true,
      };
    case BREAD_CRUMB_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        breadcrumbs: action.result.data && action.result.data.breadcrumbs
      };
    case BREAD_CRUMB_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}

