import {
  DESTINATION_LISTING_VIEWED,
  DESTINATION_LIST_LOAD,
  DESTINATION_LIST_LOAD_SUCCESS,
  DESTINATION_LIST_LOAD_FAIL,
  LOAD_MORE_DESTINATIONS,
  UPDATE_SELECTED_ITEM,
  TOGGLE_SELECTION_LIST,
  INITIALIZE_WEEKEND_FILTER,
} from '../actionConstants';
import config from 'appConfig';

const fetchDestinationList = query => ({
  types: [DESTINATION_LIST_LOAD, DESTINATION_LIST_LOAD_SUCCESS, DESTINATION_LIST_LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.destinationListing.url, {
    params: query,
    hostType: config.apiEndpoints.destinationListing.host
  })
});

const destinationListingViewed = (category, weekendDestination) => ({
  type: DESTINATION_LISTING_VIEWED,
  category,
  weekendDestination
});

const loadMoreDestinations = () => ({
  type: LOAD_MORE_DESTINATIONS
});

const updateSelectedItem = selectedItem => ({
  type: UPDATE_SELECTED_ITEM,
  selectedItem
});

const toggleSelectionList = () => ({
  type: TOGGLE_SELECTION_LIST
});

const initializeWeekendFilter = () => ({
  type: INITIALIZE_WEEKEND_FILTER
});

export {
  destinationListingViewed,
  fetchDestinationList,
  loadMoreDestinations,
  updateSelectedItem,
  toggleSelectionList,
  initializeWeekendFilter,
};
