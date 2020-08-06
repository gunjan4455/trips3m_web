import {
  BOOKING_DETAILS_LOAD,
  BOOKING_DETAILS_LOAD_SUCCESS,
  BOOKING_DETAILS_LOAD_FAIL
} from './action';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case BOOKING_DETAILS_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case BOOKING_DETAILS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result && action.result.data,
        errors: null
      };
    case BOOKING_DETAILS_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    default:
      return state;
  }
}
