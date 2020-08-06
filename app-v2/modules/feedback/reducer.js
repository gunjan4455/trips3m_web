import {
  POST_BOOKING_FEEDBACK_LOAD,
  POST_BOOKING_FEEDBACK_LOAD_SUCCESS,
  POST_BOOKING_FEEDBACK_LOAD_FAIL,
  POST_TRIP_FEEDBACK_LOAD,
  POST_TRIP_FEEDBACK_LOAD_SUCCESS,
  POST_TRIP_FEEDBACK_LOAD_FAIL
} from './action';

const initialState = {
  submitted: false,
  submitting: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_TRIP_FEEDBACK_LOAD:
    case POST_BOOKING_FEEDBACK_LOAD: {
      return {
        ...state,
        submitted: false,
        submitting: true
      };
    }
    case POST_TRIP_FEEDBACK_LOAD_SUCCESS:
    case POST_BOOKING_FEEDBACK_LOAD_SUCCESS: {
      return {
        ...state,
        submitted: true,
        submitting: false
      };
    }
    case POST_TRIP_FEEDBACK_LOAD_FAIL:
    case POST_BOOKING_FEEDBACK_LOAD_FAIL: {
      return {
        ...state,
        submitted: false,
        submitting: false
      };
    }
    default: {
      return state;
    }
  }
}
