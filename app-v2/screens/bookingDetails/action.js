import config from 'appConfig';
import { bookingDetailUrl } from 'helpers/urlHelpers';

export const BOOKING_DETAILS_LOAD = 'BOOKING_DETAILS_LOAD';
export const BOOKING_DETAILS_LOAD_SUCCESS = 'BOOKING_DETAILS_LOAD_SUCCESS';
export const BOOKING_DETAILS_LOAD_FAIL = 'BOOKING_DETAILS_LOAD_FAIL';

export const getBookingDetail = (bookingId) => {

  return ({
    types: [BOOKING_DETAILS_LOAD, BOOKING_DETAILS_LOAD_SUCCESS, BOOKING_DETAILS_LOAD_FAIL],
    promise: client => client.get(bookingDetailUrl(bookingId), {
      params: {
        main_api: true
      },
      hostType: config.apiEndpoints.hotelSearch.host
    }),
    withoutCamelCasing: false
  });
};
