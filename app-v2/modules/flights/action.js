import config from 'appConfig';
import { getFlightDetailsUrl } from 'helpers/urlHelpers';

const DESTINATION_SEARCH_LIST = 'flights/DESTINATION_SEARCH_LIST';
export const DESTINATION_SEARCH_LIST_SUCCESS = 'flights/DESTINATION_SEARCH_LIST_SUCCESS';
export const DESTINATION_SEARCH_LIST_FAILURE = 'flights/DESTINATION_SEARCH_LIST_FAILURE';

const DESTINATION_FILTERED_LIST = 'flights/DESTINATION_FILTERED_LIST';
const DESTINATION_FILTERED_LIST_SUCCESS = 'flights/DESTINATION_FILTERED_LIST_SUCCESS';
const DESTINATION_FILTERED_LIST_FAILURE = 'flights/DESTINATION_FILTERED_LIST_FAILURE';

const POST_FLIGHT_DETAILS = 'flights/POST_FLIGHT_DETAILS';
export const POST_FLIGHT_DETAILS_SUCCESS = 'flights/POST_FLIGHT_DETAILS_SUCCESS';
const POST_FLIGHT_DETAILS_FAILURE = 'flights/POST_FLIGHT_DETAILS_FAILURE';

const GET_FLIGHT_DETAILS = 'flights/GET_FLIGHT_DETAILS';
export const GET_FLIGHT_DETAILS_SUCCESS = 'flights/GET_FLIGHT_DETAILS_SUCCESS';
const GET_FLIGHT_DETAILS_FAILURE = 'flights/GET_FLIGHT_DETAILS_FAILURE';


export const getDestinationSearchList = () => ({
  types: [
    DESTINATION_SEARCH_LIST,
    DESTINATION_SEARCH_LIST_SUCCESS,
    DESTINATION_SEARCH_LIST_FAILURE,
  ],
  promise: client => client.get(config.apiEndpoints.requestedTrip.destinationSearchList.url, {
    cms: false,
    handleTimeout: true,
    hostType: config.apiEndpoints.requestedTrip.destinationSearchList.host
  })
});


export const getFilteredDestinations = (searchTerm) => ({
  types: [
    DESTINATION_FILTERED_LIST,
    DESTINATION_FILTERED_LIST_SUCCESS,
    DESTINATION_FILTERED_LIST_FAILURE,
  ],
  promise: client => client.get(
    config.apiEndpoints.requestedTrip.destinationFilteredList.url,
    {
      params: { 'search_key': searchTerm },
      cms: false,
      handleTimeout: true,
      hostType: config.apiEndpoints.requestedTrip.destinationFilteredList.host
    }
  )
});


export const postFlightDetails = (data) => ({
  types: [
    POST_FLIGHT_DETAILS,
    POST_FLIGHT_DETAILS_SUCCESS,
    POST_FLIGHT_DETAILS_FAILURE,
  ],
  promise: client => client.post(config.apiEndpoints.requestedTrip.flightDetails.url, {
    data,
    hostType: config.apiEndpoints.requestedTrip.flightDetails.host
  })
});

export const getFlightDetails = (rTripId) => ({
  types: [
    GET_FLIGHT_DETAILS,
    GET_FLIGHT_DETAILS_SUCCESS,
    GET_FLIGHT_DETAILS_FAILURE,
  ],
  promise: client => client.get(getFlightDetailsUrl(rTripId), {
    hostType: config.apiEndpoints.requestedTrip.getFlightDetails.host
  })
});
