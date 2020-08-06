import { parse } from 'query-string';

import {
  LISTING_PACKAGES_LOAD,
  LISTING_PACKAGES_LOAD_FAIL,
  LISTING_PACKAGES_LOAD_SUCCESS,
  LISTING_FILTERS_TOGGLE_VIEW,
  LISTING_LOAD_MORE_SUCCESS,
  TESTIMONIALS_LOAD,
  TESTIMONIALS_LOAD_SUCCESS,
  TESTIMONIALS_LOAD_FAIL,
  SUBMITTED_FOR_COMPARE,
  SET_TOUR_CATEGORY_FILTER,
  SET_DESTINATION_TYPE_ALL_FILTER,
  FILTER_COUNTS_LOAD,
  FILTER_COUNTS_LOAD_SUCCESS,
  FILTER_COUNTS_LOAD_FAIL,
  SEO_FOOTER_LOAD,
  SEO_FOOTER_LOAD_SUCCESS,
  SEO_FOOTER_LOAD_FAIL,
  SEO_FOOTER_RESET,
}
  from '../actionConstants';
import config from 'appConfig';
import parseFilters from "containers/Listing/parseFilters";
import { createListingFilterApiParams } from './../utils/parsers';

const loadPackages = ({ destination = '', listingType = '', query = {}, packageType = 'seo', sortBy = '' }) => ({
  types: [LISTING_PACKAGES_LOAD, LISTING_PACKAGES_LOAD_SUCCESS, LISTING_PACKAGES_LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.listing.url, {
    params: {
      package_type: packageType,
      limit: 10,
      suffix: destination,
      prefix: listingType,
      sort_by: sortBy,
      p_search: JSON.stringify(query),
      html_tags: true,
      faqs: true,
      breadcrumbs: true,
      footer_section: true,
      testimonials: true,
      // meta_tags: true,
      main_api: true
    },
    hostType: config.apiEndpoints.listing.host
  })
});

const loadMorePackages = pathName => ({
  types: [LISTING_PACKAGES_LOAD, LISTING_LOAD_MORE_SUCCESS, LISTING_PACKAGES_LOAD_FAIL],
  promise: client => client.get(pathName, {
    hostType: config.apiEndpoints.listing.host
  })
});

const toggleFilterView = () => ({ type: LISTING_FILTERS_TOGGLE_VIEW });

const fetchTestimonials = (page, params) => ({
  types: [
    TESTIMONIALS_LOAD,
    TESTIMONIALS_LOAD_SUCCESS,
    TESTIMONIALS_LOAD_FAIL
  ],
  page,
  promise: client => client.get(`${config.apiEndpoints.testimonials.url}`, {
    params, hostType: config.apiEndpoints.testimonials.host
  })
});

const submittedForCompare = submitted => ({ type: SUBMITTED_FOR_COMPARE, submitted });

const setTourCategoryFilter = () => ({
  type: SET_TOUR_CATEGORY_FILTER
});

const setDestinationTypeFilter = () => ({
  type: SET_DESTINATION_TYPE_ALL_FILTER
});

const loadFilterCounts = ({ query = {}, params = {}, pageNumber = 1, packageType = 'seo' }) => ({
  types: [FILTER_COUNTS_LOAD, FILTER_COUNTS_LOAD_SUCCESS, FILTER_COUNTS_LOAD_FAIL],
  promise: client => client.get(`${config.apiEndpoints.filterCounts.url}`,
    {
      params: {
        package_type: packageType,
        limit: 20,
        // offset: Math.max(0, pageNumber - 1),
        offset: Math.max(20 * ((pageNumber || 1) - 1)),
        suffix: params.destination || '',
        prefix: params.listingType || '',
        p_search: JSON.stringify(query),
        cache: params.cache,
        preview_package_id: params.preview_package_id
      },
      hostType: config.apiEndpoints.filterCounts.host
    }
  ),
  resource: params,
});

const createFilterParam = (route, params) => (dispatch, getState) => {
  const state = getState();
  const listingFiltersObj = state.listing.filters;
  const { data: listingFilters, selected: selectedFilters, sortBy: { selected: sortByValue } } = state.listing.filters;
  const query = createListingFilterApiParams(
    listingFilters,
    selectedFilters,
    sortByValue,
    route && route.category,
    1,
    params.destination || '',
  );
  const { packageType, category } = route;
  const { filters, sortBy, pageNumber } =
    parseFilters({ query: parse(query), category, destinationType: '' });

  return dispatch(loadFilterCounts({
    query: filters,
    sortBy,
    pageNumber,
    packageType,
    params: {
      category,
      destination: params.destination.toLowerCase(),
      preview_package_id: query.preview_package_id,
      cache: query.cache || true
    }
  }));
};

const resetSeoFooter = () => ({
  type: SEO_FOOTER_RESET
});

const loadSeoFooter = (suffix, tripType, prefix) => ({
  types: [SEO_FOOTER_LOAD, SEO_FOOTER_LOAD_SUCCESS, SEO_FOOTER_LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.listingSeoFooter.url, {
    params: { suffix, trip_type: tripType, prefix },
    hostType: config.apiEndpoints.listingSeoFooter.host
  }),
  withoutCamelCasing: true
});

export {
  loadPackages,
  toggleFilterView,
  loadMorePackages,
  fetchTestimonials,
  submittedForCompare,
  setTourCategoryFilter,
  setDestinationTypeFilter,
  loadFilterCounts,
  createFilterParam,
  loadSeoFooter,
  resetSeoFooter,
};
