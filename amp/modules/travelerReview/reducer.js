import {
  TESTIMONIALS_LOAD_SUCCESS,
} from './action';

const initialState = {
  testimonials: []
};

export default function travelerReviewReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TESTIMONIALS_LOAD_SUCCESS: {
      if (action.result && action.result.data) {
        return {
          ...state,
          testimonials: action.result.data.testimonials,
          pagination: action.result.data.pagination
        };
      } else {
        return {
          ...state
        };
      }
    }

    default:
      return state;
  }
}

export function getRequestedTrip(globalState, requestedTripId) {
  return globalState.rlpReducer.requestedTripsById[requestedTripId.split('-')[0]];
}
