import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import { destinationListingViewed, fetchDestinationList, loadMoreDestinations,
  updateSelectedItem, initializeWeekendFilter } from 'actions/destinationListing';
import { filterSelected } from 'actions/filterview';
import { destinationListingInformation, getFiltersData, } from 'reducers/destinationListing/destinations';
import { selectedFilterCount, isBadWeekendFilter } from 'reducers/destinationListing/filter';
import {
  setDefaultSelectedFilters,
  resetDefaultFilters,
  setInitialFilters,
  DEST_LISTING_DESTINATION_FILTER
} from 'reducers/listing/filters';
import { useQuery } from 'containers/Listing/parseFilters';

const getDestinationListingPath = (category, weekendDestination) => {
  const query = {};
  if (category) {
    query.category = category;
  } else if (weekendDestination) {
    query.weekendDestination = weekendDestination;
  }
  return query;
};

const getDestinationList = (filterParams) => (dispatch, getState) => {
  const state = getState();
  const { category, weekendDestination, options } = destinationListingInformation(state)();
  let query = getDestinationListingPath(category, weekendDestination, options);
  if (filterParams) {
    query = {
      ...query,
      ...filterParams
    };
  }
  // fetch destination list
  dispatch(fetchDestinationList(query));
};

const getDestinationParams = (filterParams, category, weekendDestination) => (dispatch) => {
  let query = getDestinationListingPath(category, weekendDestination);
  if (filterParams) {
    query = {
      ...query,
      ...filterParams
    };
  }
  // fetch destination list
  return dispatch(fetchDestinationList(query));
};

const getFilterParams = (state, currentParams) => {
  try {
    const { filters, selectedFilters } = getFiltersData(state);
    const params = Object.keys(selectedFilters).reduce((query, filterId) => {
      const filter = filters[filterId];
      const options = filter.options;
      // for selection options, get the value for that option
      query[filter.paramsName] =
        Object.keys(selectedFilters[filterId]).reduce((res, optionId) => {
          if (selectedFilters[filterId][optionId]) {
            // get the option
            const _option = options.filter(option => (option.id === parseInt(optionId, 10)))[0];
            res.push(_option.value);
          }
          return res;
        }, []).join(',');
      return query;
    }, {});

    // get sort by
    const sortByOption = filters.sortBy && filters.sortBy.selected;
    if (sortByOption) {
      const sortOptionSplit = sortByOption.split('_');
      params.sort_by = sortOptionSplit[0];
      params.sort_order = sortOptionSplit[1];
    }
    return {
      ...params,
      ...currentParams
    };
  } catch (e) {
    console.log(e);
    return currentParams;
  }
};

const DestinationListingAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'destination-listing' */
    'components/DestinationListing/DestinationListingAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('components/DestinationListing/DestinationListingAsync') },
    {
      promise: ({ store: { dispatch, getState }, location: { search, pathname }, route, match: { params } }) => {
        let destination = 'all';
        const query = useQuery(search);
        if (query.is_international) {
          if (query.is_international === 'true') {
            destination = 'international';
          } else {
            destination = 'domestic';
          }
        }
        const qparams = { destination_type: destination };

        dispatch(setDefaultSelectedFilters(destination , DEST_LISTING_DESTINATION_FILTER, null, true));
        dispatch(setInitialFilters(destination , DEST_LISTING_DESTINATION_FILTER, null, true));

        let category;
        let weekendDestination;
        if (route.pageType === 'weekend') {
          weekendDestination = params.destination;
        } else if (route.pageType === 'category') {
          category = pathname.substring(1).split('-')[0];
        }
        const filterParams = getFilterParams(getState(), qparams);
        return getDestinationParams(
          filterParams, category, weekendDestination
        )(dispatch, getState);
      }
    }
  ],
  state => ({
    destinationList: state.destinationListing.destinationListing.list,
    filters: state.destinationListing.filters.data,
    selectedFilters: state.destinationListing.filters.selected,
    sortBy: state.destinationListing.filters.sortBy,
    destinationsToDisplay: state.destinationListing.destinationListing.destinationsToDisplay,
    selectedItem: state.destinationListing.destinationListing.selectedItem,
    selectionList: state.destinationListing.destinationListing.selectionList,
    selectedFilterCount: selectedFilterCount(state),
    category: state.destinationListing.destinationListing.category,
    weekendDestination: state.destinationListing.destinationListing.weekendDestination,
    count: state.destinationListing.destinationListing.count,
    weekendFromDestination: state.destinationListing.destinationListing.weekendFromDestination || 'Delhi',
    isBadWeekendFilter: isBadWeekendFilter(state),
    htmlTags: state.destinationListing.destinationListing.htmlTags
  }),
  dispatch => ({
    listOpened: (category, weekendDestination) =>
      dispatch(destinationListingViewed(category, weekendDestination)), // update the url of the page
    fetchDestinationList: filterParams => dispatch(getDestinationList(filterParams)),
    loadMoreDestinations: () => dispatch(loadMoreDestinations()),
    updateSelectedItem: selectedItem => dispatch(updateSelectedItem(selectedItem)),
    filterSelected: (filter, filterOptions) => dispatch(filterSelected(filter, filterOptions, true)),
    initializeWeekendFilter: () => dispatch(initializeWeekendFilter()),
    setDefaultSelectedFilters: (type, filterId, filterValue, isCategoryPage) =>
      dispatch(setDefaultSelectedFilters(type, filterId, filterValue, isCategoryPage)),
    resetDefaultFilters: (isCategoryPage) => dispatch(resetDefaultFilters(isCategoryPage))
  }))(DestinationListingAsync);
