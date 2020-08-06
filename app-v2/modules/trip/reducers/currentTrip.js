import {
  UPDATE_REQUESTED_TRIP,
  SECURITY_TOKEN_LOAD_SUCCESS,
} from '../actions/currentTrip';

const initialState = {
  data: {},
};

export default function currentTripReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_REQUESTED_TRIP: {
      return {
        ...state,
        data: { ...state.data, id: action.requestedTripId }
      };
    }
    case SECURITY_TOKEN_LOAD_SUCCESS: {
      console.log('sec token', action.result.data);
      return {
        ...state,
        data: { ...state.data, securityToken: action.result.data }
      };
    }
    default:
      return state;
  }
}
