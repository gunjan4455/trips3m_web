import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../actions/tripList';
import { UPDATE_RTRIP_LOAD_SUCCESS } from '../../preferences/action';

const initialState = {
  loaded: false,
  loading: false,
  allIds: [],
  byId: {}
};

function updateTripLocation(state, action) {
  const { id, firstDestinationName, fromLoc } = action.result.data.requestedTrip;
  return {
    ...state.byId,
    [id]: {
      ...state.byId[id],
      firstDestinationName: firstDestinationName,
      fromLoc: fromLoc
    }
  };
}

export default function tripListReducer(state = initialState, action = {}) {

  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case LOAD_SUCCESS: {
      const tripList = {};
      action.result.data.requestedTrips.forEach((trip) => {
        tripList[trip.id] = trip;
      });

      return {
        ...state,
        loaded: true,
        loading: false,
        allIds: Object.keys(tripList),
        byId: tripList
      };
    }
    case LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case UPDATE_RTRIP_LOAD_SUCCESS: {
      return {
        ...state,
        byId: updateTripLocation(state, action),
      };
    }
    default:
      return state;
  }
}

export const getTripsByBookingStatusLabel = (trips, bookingStatusLabel) => {
  return trips.allIds.filter(id => {
    return trips.byId[id].bookingStatusLabel.toLowerCase() === bookingStatusLabel;
  });
};

export const tripsLoaded = (state) => {
  return state.trip && state.trip.list.loaded || false;
};
