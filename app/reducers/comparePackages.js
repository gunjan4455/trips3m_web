import {
  COMPARE_PACKAGES_SUCCESS,
  COMPARE_PACKAGES_ADD_TO_COMPARING,
  COMPARE_PACKAGES_REMOVE_FROM_COMPARING,
  REMOVE_PACKAGE,
  REMOVE_COMPARE_DATA
} from '../actions/comparePackages';

const defaultState = {
  details: {},
  comparing: [],
  comparedPackagesIndex: ''
};

export default function comparePackages(state = defaultState, action) {
  switch (action.type) {
    case COMPARE_PACKAGES_SUCCESS: {
      const comparingData = {
        comparing: action.result.data.packages
      };
      return { ...state, details: action.result.data, ...comparingData };
    }
    case COMPARE_PACKAGES_ADD_TO_COMPARING: {
      /* eslint-disable eqeqeq */
      const packageIdAlreadyExist = state.comparing.findIndex(pkg => pkg.id == action.pkg.id);
      /* eslint-enable */
      if (packageIdAlreadyExist === -1) {
        return { ...state, comparing: [...state.comparing, action.pkg],
          comparedPackagesIndex: state.comparedPackagesIndex.concat(action.pkg.index,',') };
      }

      return state;
    }
    case COMPARE_PACKAGES_REMOVE_FROM_COMPARING: {
      /* eslint-disable eqeqeq */
      const packageIndexToRemove = state.comparing.findIndex(pkg => pkg.id == action.pkg.id);
      /* eslint-enable */
      if (packageIndexToRemove === -1) {
        return state;
      }

      return {
        ...state,
        comparing: [
          ...state.comparing.slice(0, packageIndexToRemove),
          ...state.comparing.slice(packageIndexToRemove + 1)
        ]
      };
    }
    case REMOVE_PACKAGE: {
      const updatedPackages = {
        packages: [
          ...state.details.packages.slice(0, action.i),
          ...state.details.packages.slice(action.i + 1)
        ]
      };
      const updatedHotels = {
        hotels: state.details.hotels.map(hotelsByDay =>
          [...hotelsByDay.slice(0, action.i), ...hotelsByDay.slice(action.i + 1)]
        )
      };
      const updatedIncExc = {
        inclusions: [
          ...state.details.inclusions.slice(0, action.i),
          ...state.details.inclusions.slice(action.i + 1)
        ]
      };

      const updatedItineraries = {
        itineraries: state.details.itineraries.map(itineraries =>
          [...itineraries.slice(0, action.i), ...itineraries.slice(action.i + 1)]
        )
      };

      return {
        ...state,
        details: {
          ...state.details,
          ...updatedPackages,
          ...updatedHotels,
          ...updatedIncExc,
          ...updatedItineraries
        }
      };
    }
    case REMOVE_COMPARE_DATA: {
      return defaultState;
    }
    default:
      return state;
  }
}

