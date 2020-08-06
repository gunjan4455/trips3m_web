import config from 'appConfig';
import { getCurrentMonth } from 'helpers/DateTime';
import {
  HOTEL_SEARCH_LOAD,
  HOTEL_SEARCH_LOAD_SUCCESS,
  HOTEL_SEARCH_LOAD_FAIL,
  HOTEL_SEARCH_PARAMS_UPDATE,
  HOTEL_BOOKING_DETAILS
} from './action';

const HDP_LOAD = 'HDP_LOAD';
const HDP_LOAD_SUCCESS = 'HDP_LOAD_SUCCESS';
const HDP_LOAD_FAIL = 'HDP_LOAD_FAIL';

const HDP_TESTIMONIALS_LOAD = 'HDP_TESTIMONIALS_LOAD';
const HDP_TESTIMONIALS_LOAD_SUCCESS = 'HDP_TESTIMONIALS_LOAD_SUCCESS';
const HDP_TESTIMONIALS_LOAD_FAIL = 'HDP_TESTIMONIALS_LOAD_FAIL';

const HDP_UPDATE_MONTH = 'HDP_UPDATE_MONTH';

const initialState = {
  loaded: false,
  searchParams: {
    hotel_id: '',
    checkInDate: null,
    checkOutDate: null,
    rooms: [{ adults: 2, children: 0 }]
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HDP_LOAD:
    case HOTEL_SEARCH_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case HDP_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result && action.result.data,
        errors: null
      };
    case HDP_LOAD_FAIL:
    case HOTEL_SEARCH_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    case HDP_TESTIMONIALS_LOAD:
      return {
        ...state,
      };
    case HDP_TESTIMONIALS_LOAD_SUCCESS:
      const testimonialArray = [...state.data.testimonials.testimonialList, ...action.result.data.testimonials.testimonialList];
      return {
        data: {
          ...state.data,
          testimonials: {
            ...state.data.testimonials,
            testimonialList: testimonialArray,
          }
        }
      };
    case HDP_TESTIMONIALS_LOAD_FAIL:
      return {
        ...state,
      };
    case HDP_UPDATE_MONTH:
      const monthObj = state.data && state.data.hotel &&
        state.data.hotel.monthOptions.monthRanges.filter(item => item.id === action.month.value)[0] || {};
      if (!Object.keys(monthObj).length) {
        return state;
      }
      const { endPrice, startPrice } = monthObj;
      return {
        data: {
          ...state.data,
          hotel: {
            ...state.data.hotel,
            priceRange: {
              ...state.data.hotel.priceRange,
              priceFrom: startPrice,
              priceTo: endPrice
            },
            travelMonth: action.month.value
          }
        }
      };
    case HOTEL_SEARCH_LOAD_SUCCESS: {
      const data = getHotelSearchDataObj(action.result.data);

      return {
        ...state,
        loading: false,
        loaded: true,
        searchData: data,
        errors: null
      };
    }
    case HOTEL_SEARCH_PARAMS_UPDATE: {
      return {
        ...state,
        searchParams: action.searchParams
      };
    }
    case HOTEL_BOOKING_DETAILS: {
      return {
        ...state,
        bookingDetails: action.bookingDetails
      };
    }
    default:
      return state;
  }
}

export const loadHotelDetails = (hotelName = '', { query } = {}) => ({
  types: [HDP_LOAD, HDP_LOAD_SUCCESS, HDP_LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.hotelDetail.url, {
    params: {
      base_url: hotelName,
      breadcrumbs: true,
      faqs: true,
      p_testimonials: JSON.stringify({ required: true, page: 1 }),
      similar_hotels: true,
      // cache: false,
      travel_month: query && query.travelMonth || getCurrentMonth() + 1,
      main_api: true,
      html_tags: true,
      trust_card: true
    },
    hostType: config.apiEndpoints.hotelDetail.host
  }),
  withoutCamelCasing: false
});

export const updateTestimonials = (pageNumber, hotelName = '') => {
  return ({
    types: [HDP_TESTIMONIALS_LOAD, HDP_TESTIMONIALS_LOAD_SUCCESS, HDP_TESTIMONIALS_LOAD_FAIL],
    promise: client => client.get(config.apiEndpoints.hotelDetail.url, {
      params: {
        base_url: hotelName,
        breadcrumbs: false,
        faqs: false,
        similar_hotels: false,
        // cache: false,
        main_api: false,
        main_data: false,
        html_tags: false,
        p_testimonials: JSON.stringify({ required: true, page: pageNumber })
      },
      hostType: config.apiEndpoints.hotelDetail.host
    }),
    withoutCamelCasing: false
  });
};

export const updateMonth = (month) => ({
  type: HDP_UPDATE_MONTH,
  month
});

export const getHotelSearchDataObj = (hotelData) => {
  const recommendedRooms = hotelData.recommended && hotelData.recommended.rooms;
  const allRooms = hotelData.all && hotelData.all.rooms;

  const recommendedRoomsObject = recommendedRooms && recommendedRooms.reduce((recommendedRoomsObj, recommendedRoom) => ({
    ...recommendedRoomsObj,
    [recommendedRoom.selectionId]: recommendedRoom
  }), {});

  const allRoomsObject = allRooms && Object.keys(allRooms).reduce((allRoomsObj, requestId) => {
    const rooms = allRooms[requestId];

    const roomsObj = rooms.reduce((allRoomObj, room) => {
      const boardObj = room.boards.reduce((allBoardsObj, board) => ({
        ...allBoardsObj,
        [board.selectionId.toString()]: board
      }), {});
      const roomObj = { ...room, boards: boardObj };

      return {
        ...allRoomObj,
        [room.roomCode.toString()]: roomObj
      };
    }, {});

    allRoomsObj[requestId] = roomsObj;
    return allRoomsObj;
  }, {});

  const data = {
    ...hotelData, recommended: {
      ...hotelData.recommended,
      rooms: recommendedRoomsObject
    }, all: {
      ...hotelData.all,
      rooms: allRoomsObject
    }
  };
  return data;
};

