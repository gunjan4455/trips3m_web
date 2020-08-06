import { postBookingFeedbackPath, postTripFeedbackPath } from 'helpers/urlHelpers';
import config from 'appConfig';

export const POST_BOOKING_FEEDBACK_LOAD = 'feedback/postBooking/FEEDBACK_LOAD';
export const POST_BOOKING_FEEDBACK_LOAD_SUCCESS = 'agentShow/FEEDBACK_LOAD_SUCCESS';
export const POST_BOOKING_FEEDBACK_LOAD_FAIL = 'agentShow/FEEDBACK_LOAD_FAIL';

export const POST_TRIP_FEEDBACK_LOAD = 'feedback/postTrip/FEEDBACK_LOAD';
export const POST_TRIP_FEEDBACK_LOAD_SUCCESS = 'feedback/postTrip/FEEDBACK_LOAD_SUCCESS';
export const POST_TRIP_FEEDBACK_LOAD_FAIL = 'feedback/postTrip/FEEDBACK_LOAD_FAIL';

export function createPostBookingFeedback(tripId, params) {
  const data = {
    _method: 'post',
    ...params,
    hostType: config.apiEndpoints.postBookingFeedback.host
  };
  return {
    types: [POST_BOOKING_FEEDBACK_LOAD, POST_BOOKING_FEEDBACK_LOAD_SUCCESS, POST_BOOKING_FEEDBACK_LOAD_FAIL],
    promise: client => client.post(postBookingFeedbackPath(tripId), { data }),
    withoutCamelCasing: true
  };
}

export function createPostTripFeedback(tripId, params) {
  const data = {
    _method: 'post',
    ...params,
    hostType: config.apiEndpoints.postTripFeedback.host
  };
  return {
    types: [POST_TRIP_FEEDBACK_LOAD, POST_TRIP_FEEDBACK_LOAD_SUCCESS, POST_TRIP_FEEDBACK_LOAD_FAIL],
    promise: client => client.post(postTripFeedbackPath(tripId), { data }),
    withoutCamelCasing: true
  };
}
