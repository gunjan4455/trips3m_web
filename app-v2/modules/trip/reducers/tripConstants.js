import { TRIP_CONSTANTS_LOAD, TRIP_CONSTANTS_LOAD_FAIL, TRIP_CONSTANTS_LOAD_SUCCESS} from '../actions/tripConstants';

const initialState = {
  loaded: false,
  loading: false,
  constants:{}
};

export default function tripConstantsReducer(state = initialState, action = {}) {

  switch (action.type) {
    case TRIP_CONSTANTS_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case TRIP_CONSTANTS_LOAD_SUCCESS: {

      return {
        ...state,
        loaded: true,
        loading: false,
        constants: action.result.data
      };
    }
    case TRIP_CONSTANTS_LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
      return state;
  }
}
