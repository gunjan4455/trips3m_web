import {
  cancelBookingUrl,
  reactivateRequestUrl,
  sendActivationMailPath
} from 'helpers/urlHelpers';

export const CANCEL_BOOKING_LOAD = 'CANCEL_BOOKING_LOAD';
export const CANCEL_BOOKING_LOAD_SUCCESS = 'CANCEL_BOOKING_LOAD_SUCCESS';
export const CANCEL_BOOKING_LOAD_FAIL = 'CANCEL_BOOKING_LOAD_FAIL';

export const REACTIVATE_BOOKING_LOAD = 'REACTIVATE_BOOKING_LOAD';
export const REACTIVATE_BOOKING_LOAD_SUCCESS = 'REACTIVATE_BOOKING_LOAD_SUCCESS';
export const REACTIVATE_BOOKING_LOAD_FAIL = 'REACTIVATE_BOOKING_LOAD_FAIL';

export const SEND_ACTIVATION_MAIL_SUCCESS = 'SEND_ACTIVATION_MAIL_SUCCESS';
export const SEND_ACTIVATION_MAIL_FAIL = 'SEND_ACTIVATION_MAIL_FAIL';
export const SEND_ACTIVATION_MAIL_LOAD = 'SEND_ACTIVATION_MAIL_LOAD';

export function cancelBooking({ tripId, params = {}, query = '' }) {
  const data = {
    _method: 'post',
    ...params
  };
  return {
    types: [
      CANCEL_BOOKING_LOAD,
      CANCEL_BOOKING_LOAD_SUCCESS,
      CANCEL_BOOKING_LOAD_FAIL
    ],
    promise: client => client.post(cancelBookingUrl(tripId, query), { data }),
    withoutCamelCasing: true
  };
}

export function reactivateBooking({ tripId, query = '' }) {
  return {
    types: [
      REACTIVATE_BOOKING_LOAD,
      REACTIVATE_BOOKING_LOAD_SUCCESS,
      REACTIVATE_BOOKING_LOAD_FAIL
    ],
    promise: client => client.post(reactivateRequestUrl(tripId, query)),
    withoutCamelCasing: true
  };
}

export function sendActivationMail(tripId) {
  return {
    types: [SEND_ACTIVATION_MAIL_LOAD, SEND_ACTIVATION_MAIL_SUCCESS, SEND_ACTIVATION_MAIL_FAIL],
    promise: client => client.post(sendActivationMailPath(tripId))
  };
}
