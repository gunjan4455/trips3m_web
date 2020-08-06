import _get from "lodash/get";

import {
  DESTINATION_LISTING_VIEWED,
  DESTINATION_LIST_LOAD_SUCCESS,
  LOAD_MORE_DESTINATIONS,
  UPDATE_SELECTED_ITEM,
  TOGGLE_SELECTION_LIST
}
from '../../actionConstants';

const weekendDestinations =
  ['Agra', 'Chandigarh', 'Jammu', 'Delhi',
    'Jaipur', 'Dehradun', 'Mysore', 'Mumbai',
    'Pune', 'Bangalore', 'Tirupati', 'Mangalore',
    'Chennai', 'Kolkata', 'Ahmedabad', 'Baroda',
    'Bhopal', 'Indore', 'Lucknow', 'Nagpur'];

function generateWeekendOptions() {
  return weekendDestinations.reduce((options, weekendDestination) => (
    {
      ...options,
      [weekendDestination]: {
        name: `From ${weekendDestination}`,
        url: `/places-near/${weekendDestination}`
      }
    }
  ), {});
}
const initialState = {
  loaded: false,
  list: [],
  total: null,
  defaultDestinationsToDisplay: 10,
  destinationsToDisplay: 10,
  currentPage: 1,
  category: '',
  weekendDestination: '',
  options: {},
  count: 49,
  selectionListVisible: false,
  selectionList: {
    tripTypes: {
      all: { name: 'All', url: '/All-Places' },
      romantic: { name: 'Romantic', url: '/Romantic-Places' },
      honeymoon: { name: 'Honeymoon', url: '/Honeymoon-Places' },
      adventure: { name: 'Adventure', url: '/Adventure-Places' },
      family: { name: 'Family', url: '/Family-Places' },
      nature: { name: 'Nature', url: '/Nature-Places' },
      // religious: { name: 'Religious', url: '/Religious-Places' },
      wildlife: { name: 'Wildlife', url: '/Wildlife-Places' },
      friends: { name: 'Friends / Group', url: '/Friends-Places' },
      waterActivities: { name: 'Water Activities', url: '/Water%20Activities-Places' },
    },
    weekends: generateWeekendOptions(),
  },
  selectedItem: 'all'
};

function adaptDestinationList(data) {
  const result = (data.destinations || []).map(destination => (
    {
      id: destination.id,
      bestTimeToVisit: destination.best_time_to_visit.split('..'),
      name: destination.name,
      ratings: destination.ratings,
      budget: destination.budget,
      maxDays: destination.max_days,
      minDays: destination.min_days,
      numberOfReviews: destination.number_of_reviews,
      activityLabels: destination.activies,
      imagePath: destination.image_path,
      imagekitUrl: destination.imagekit_url,
      flightsIncluded: destination.is_flight_present,
      numberOfTravelers: destination.travelers,
      numberOfPackages: destination.num_of_packages
    }
  ));
  return result;
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DESTINATION_LISTING_VIEWED:
      return {
        ...state,
        category: action.category,
        weekendDestination: action.weekendDestination
      };
    case DESTINATION_LIST_LOAD_SUCCESS :
      // var remainingPackages = state.total - state.packagesToDisplay;
      // if(remainingPackages < 0) remainingPackages = 0;
      return {
        ...state,
        loading: false,
        loaded: true,
        list: adaptDestinationList(action.result.data),
        count: action.result.data.total_count,
        destinationsToDisplay: state.defaultDestinationsToDisplay,
        weekendFromDestination: action.result.data.weekend_from_destination,
        htmlTags: _get(action.result.data, 'trip_type.html_tags', [])
      };
    case LOAD_MORE_DESTINATIONS:
      return {
        ...state,
        destinationsToDisplay: state.destinationsToDisplay + state.defaultDestinationsToDisplay
      };
    case UPDATE_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.selectedItem
      };
    case TOGGLE_SELECTION_LIST:
      return {
        ...state,
        selectionListVisible: !state.selectionListVisible
      };
    default:
      return state;
  }
}

export function destinationListingInformation(state) {
  return () => (
    {
      category: state.destinationListing.destinationListing.category,
      weekendDestination: state.destinationListing.destinationListing.weekendDestination,
      options: state.destinationListing.destinationListing.options
    }
  );
}

export function getSelectionList(state) {
  if (state.destinationListing.destinationListing.category) {
    return state.destinationListing.destinationListing.selectionList.tripTypes;
  }
  return state.destinationListing.destinationListing.selectionList.weekends;
}

export function getSelectedItem(state) {
  return state.destinationListing.destinationListing.selectedItem;
}

export function isSelectionListVisible(state) {
  return state.destinationListing.destinationListing.selectionListVisible;
}

export function getFiltersData(state) {
  try {
    return {
      filters: state.destinationListing.filters.data,
      selectedFilters: state.destinationListing.filters.selected,
    };
  } catch (e) {
    console.log(e);
    return {
      filters: {},
      selectedFilters: {}
    };
  }
}
