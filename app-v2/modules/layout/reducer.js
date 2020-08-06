import {
  LAYOUT_REQUEST,
  LAYOUT_SUCCESS,
  LAYOUT_FAILURE
} from './action';

const initialState = {
  loading: false,
  loaded: false,
  data: {}
};

export default function layoutReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LAYOUT_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case LAYOUT_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.result.data
      };

    case LAYOUT_FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
      };

    default:
      return state;
  }
}
