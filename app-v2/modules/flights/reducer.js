import {
  DESTINATION_SEARCH_LIST_SUCCESS,
  DESTINATION_SEARCH_LIST_FAILURE,
  GET_FLIGHT_DETAILS_SUCCESS,
  POST_FLIGHT_DETAILS_SUCCESS
} from './action';

const initialState = {
  destinations: [],
  flightsData: []
};

const mockDefaultDestinations = [
  { value: 'Kerala', label: 'Kerala', hasPackage: true },
  { value: 'Himachal', label: 'Himachal', hasPackage: true },
  { value: 'Andaman', label: 'Andaman', hasPackage: true },
  { value: 'Thailand', label: 'Thailand', hasPackage: true },
  { value: 'Sikkim - Gangtok - Darjeeling', label: 'Sikkim - Gangtok - Darjeeling', hasPackage: true },
  { value: 'Maldives', label: 'Maldives', hasPackage: true },
  { value: 'Mauritius', label: 'Mauritius', hasPackage: true },
  { value: 'Bali', label: 'Bali', hasPackage: true },
  { value: 'Sri Lanka', label: 'Sri Lanka', hasPackage: true },
  { value: 'Goa', label: 'Goa', hasPackage: true },
  { value: 'Singapore', label: 'Singapore', hasPackage: true },
  { value: 'Europe', label: 'Europe', hasPackage: true },
  { value: 'Dubai', label: 'Dubai', hasPackage: true },
  { value: 'Uttarakhand', label: 'Uttarakhand', hasPackage: true },
  { value: 'Kashmir', label: 'Kashmir', hasPackage: true },
  { value: 'Rajasthan', label: 'Rajasthan', hasPackage: true },
  { value: 'Ladakh', label: 'Ladakh', hasPackage: true },
  { value: 'Karnataka', label: 'Karnataka', hasPackage: true },
  { value: 'Hong Kong', label: 'Hong Kong', hasPackage: true },
  { value: 'Manali', label: 'Manali', hasPackage: true },
  { value: 'Bhutan', label: 'Bhutan', hasPackage: true },
  { value: 'Maharashtra', label: 'Maharashtra', hasPackage: true },
  { value: 'Ooty', label: 'Ooty', hasPackage: true },
  { value: 'Malaysia', label: 'Malaysia', hasPackage: true },
  { value: 'Nainital', label: 'Nainital', hasPackage: true },
  { value: 'Jim Corbett', label: 'Jim Corbett', hasPackage: true },
  { value: 'Australia', label: 'Australia', hasPackage: true },
  { value: 'Turkey', label: 'Turkey', hasPackage: true },
  { value: 'Seychelles', label: 'Seychelles', hasPackage: true },
  { value: 'Delhi', label: 'Delhi', hasPackage: true },
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DESTINATION_SEARCH_LIST_SUCCESS:
      return {
        ...state,
        destinations: action.result.data.default_destinations.length ? action.result.data.default_destinations : mockDefaultDestinations
      };
    case DESTINATION_SEARCH_LIST_FAILURE:
      return {
        ...state,
        destinations: {
          default_destinations: mockDefaultDestinations
        }
      };
    case GET_FLIGHT_DETAILS_SUCCESS:
      return {
        ...state,
        flightsData: action.result.data
      };
    case POST_FLIGHT_DETAILS_SUCCESS:
      return {
        ...state,
        flightsData: [action.result.data]
      };
    default:
      return state;
  }
}
