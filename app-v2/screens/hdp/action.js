import config from 'appConfig';
import { hotelSearchUrl } from 'helpers/urlHelpers';

export const HOTEL_SEARCH_LOAD = 'HOTEL_SEARCH_LOAD';
export const HOTEL_SEARCH_LOAD_SUCCESS = 'HOTEL_SEARCH_LOAD_SUCCESS';
export const HOTEL_SEARCH_LOAD_FAIL = 'HOTEL_SEARCH_LOAD_FAIL';
export const HOTEL_SEARCH_PARAMS_UPDATE = 'HOTEL_SEARCH_PARAMS_UPDATE';
export const HOTEL_BOOKING_DETAILS = 'HOTEL_BOOKING_DETAILS';
export const HOTEL_CHECKOUT_LOAD = 'HOTEL_CHECKOUT_LOAD';
export const HOTEL_CHECKOUT_LOAD_SUCCESS = 'HOTEL_CHECKOUT_LOAD_SUCCESS';
export const HOTEL_CHECKOUT_LOAD_FAIL = 'HOTEL_CHECKOUT_LOAD_FAIL';

export const hotelSearch = (queryParams = {}) => {

  return ({
    types: [HOTEL_SEARCH_LOAD, HOTEL_SEARCH_LOAD_SUCCESS, HOTEL_SEARCH_LOAD_FAIL],
    promise: client => client.get(hotelSearchUrl(queryParams), {
      hostType: config.apiEndpoints.hotelSearch.host
    }),
    withoutCamelCasing: false
  });
};

export const updateHotelSearchParams = (searchParams = {}) => {
  return ({
    type: HOTEL_SEARCH_PARAMS_UPDATE,
    searchParams
  });
};

export const updateHotelBookingDetails = (bookingDetails = {}) => {
  return ({
    type: HOTEL_BOOKING_DETAILS,
    bookingDetails
  });
};

export const checkOutHotel = (checkOutDetails = {}) => {
  return {
    types: [HOTEL_CHECKOUT_LOAD, HOTEL_CHECKOUT_LOAD_SUCCESS, HOTEL_CHECKOUT_LOAD_FAIL],
    promise: client => client.post(config.apiEndpoints.checkOut.url, {
      data: checkOutDetails,
      hostType: config.apiEndpoints.hotelSearch.host
    }),
    withoutCamelCasing: true
  };
};

