import Loadable from 'react-loadable';
import { asyncConnect } from 'redux-connect';
import _get from 'lodash/get';

import {
  loadFilterCounts, loadMorePackages, loadPackages,
  setDestinationTypeFilter, setTourCategoryFilter, submittedForCompare, createFilterParam
} from '../../actions/listing';
import { addToComparingPackages, removeFromComparingPackages,
  removeCompareData } from '../../actions/comparePackages';
import { filterSelected } from 'actions/filterview';

import {
  selectedFilterCount, isTourFilterSelected, isDestinationTypeAll, updateSeasonalFilterData,
  setListingFiltersCategory, setListingFiltersDestinationType,
  setDefaultSelectedFilters, setInitialFilters, resetDefaultFilters, CATEGORY_FILTER, DESTINATION_FILTER
} from 'reducers/listing/filters';

import { capitalizeFirstLetter } from '../../utils/parsers';
import parseFilters, { useQuery } from './parseFilters';
import { fetchPlacesToVisitData } from 'modules/placesToVisit/action';
import { fetchThingsToDoData } from 'modules/thingsToDo/action';
import { getCookieFromServer, SORT_BY_COOKIE } from '../../helpers/FormDataFormatter';
import { loadSeoFooter, resetSeoFooter } from 'actions/listing';
import { getPackageData } from "../FormOneLead/action";
import { fetchPlpFooterLinks } from 'screens/hlp/action';
import { fetchFobpFooterLinks } from 'screens/hlp/action';
import deals from 'modules/hotel/deals';


const ListingAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'listing' */ './ListingAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('./ListingAsync') },
    {
      promise: ({
                  store: { dispatch },
                  location: { search },
                  match: { params: { destination, listingType }},
                  route: { packageType, category },
                  helpers: { client }
                }) => {

        const query = useQuery(search);
        return new Promise((resolve) => {
          const { filters, sortBy } = parseFilters({ query, category, destinationType: '' });
          const sortByValue = sortBy ? sortBy : 'popularity';
          return dispatch(loadPackages({
            destination: destination || '',
            query: filters,
            packageType,
            sortBy: sortByValue,
            listingType
          })).then(response => {
            if (response && response.data.destination_name) {
              const params = {
                property_types: 'hotels',
                location: response.data.destination_name.toLowerCase(),
                is_bookable_b2c: true
              };
              return dispatch(deals.defaultAction({ params })).then(() => resolve()).catch(() => resolve());
            }
            return Promise.resolve();
          }).then(response => {
            return resolve();
          });
        });
      }
    },
    {
      promise: ({ store: { dispatch }, location: { search }, match: { params: { listingType, destination }},
                  route: { packageType, category } }) => {
        const query = useQuery(search);
        const { filters, sortBy, pageNumber, destination: dest } = parseFilters({
          query,
          category,
          destinationType: ''
        });
        return dispatch(loadFilterCounts({
          query: filters,
          pageNumber,
          packageType,
          params: {
            category,
            destination: dest ? dest : (destination ? destination : ''),
            listingType,
            preview_package_id: query.preview_package_id || '',
            cache: query.cache || true
          }
        }));
      }
    },
    {
      promise: ({ store: { dispatch }, route: { packageType } }) => {
        return 'seasonal' === packageType ? dispatch(updateSeasonalFilterData()) : Promise.resolve();
      }
    },
    {
      promise: (
      {
        store: { dispatch },
        match: { params: { destination }},
        route: { category },
      }
      ) => {
        const queryParams = {
          suffix: destination,
          category: category,
          link_type: 'nxn'
        };
        return (destination ? dispatch(fetchPlpFooterLinks(queryParams)) : null);
      }

    },
    {
      promise: (
      {
        store: { dispatch },
        match: { params: { destination } },
        route: { category }
      }
      ) => {
        const queryParams = {
          suffix: destination,
          category: category,
          link_type: 'fobp'
        };
        return (destination ? dispatch(fetchFobpFooterLinks(queryParams)) : null);
      }

    },
    {
      promise: ({ store: { dispatch }, location: { search }, match: { params: { destination }},
                  route: { category }}) => {
        const { filters } = parseFilters({ query: useQuery(search), category, destinationType: '' });

        dispatch(setListingFiltersCategory(category, filters.category || []));
        dispatch(resetDefaultFilters());
        dispatch(setDefaultSelectedFilters(category, CATEGORY_FILTER, filters.category || []));
        dispatch(setInitialFilters(category, CATEGORY_FILTER, filters.category || []));

        let destinationType = 'all';
        if (filters.destination_type && filters.destination_type.length === 1) {
          destinationType = filters.destination_type[0];
        }

        const hideDestinationFilters = Boolean(destination);
        dispatch(setDefaultSelectedFilters(destination || destinationType, DESTINATION_FILTER));
        dispatch(setInitialFilters(destination || destinationType, DESTINATION_FILTER));
        return dispatch(setListingFiltersDestinationType(destination || destinationType, hideDestinationFilters));
      }
    },
    {
      promise: ({ store: { dispatch }, match: { params: { destination } }}) => {
        if (!destination) {
          return Promise.resolve();
        }
        return dispatch(fetchPlacesToVisitData({ destination: destination || '', lookupParent: true }));
      }
    },
    {
      promise: ({ store: { dispatch }, match: {params: { destination }} }) => {
        if (!destination) {
          return Promise.resolve();
        }
        return dispatch(fetchThingsToDoData({ destination: destination || '', lookupParent: true }));
      }
    },
    {
      key: 'pathParams',
      promise: ({ match: { params: { destination }}, route: { category } }) => {
        return Promise.resolve({
          category: capitalizeFirstLetter(category || 'tour'),
          destination: capitalizeFirstLetter(destination || '')
        });
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: {params: { destination, listingType }},
                  route: { packageType, category },
                }) => {
        return 'seasonal' === packageType ? Promise.resolve() : dispatch(loadSeoFooter(destination || '', category, listingType));
      }
    },
    {
      key: 'experimentId',
      promise: ({
                  store: { dispatch, getState },
                  match: { params },
                  helpers: { client }
                }) => {
        const cookie = client.req ? client.req.get('cookie') : '';
        const experimentId = getCookieFromServer('pr_tv', cookie);
        return Promise.resolve(experimentId);
      }
    }
  ],
  state => ({
    packages: state.listing.packages.list,
    totalPackages: state.listing.packages.total,
    filterViewOpen: false,
    packagesToDisplay: state.listing.packages.packagesToDisplay,
    filters: state.listing.filters.data,
    selectedFilters: state.listing.filters.selected,
    sortBy: state.listing.filters.sortBy,
    currentPage: state.listing.packages.currentPage,
    selectedFilterCount: selectedFilterCount(state),
    testimonials: state.listing.packages.testimonials,
    metaTags: state.listing.packages.metaTags,
    comparingPackages: state.comparePackages.comparing,
    submitted: state.listing.packages.submitted,
    isTourFilterSelected: isTourFilterSelected(state),
    isDestinationTypeAll: isDestinationTypeAll(state),
    startingPrice: state.listing.packages.startingPrice,
    isMultiDestination: state.listing.packages.isMultiDestination,
    isCity: state.listing.packages.isCity,
    multiDestinationTexts: state.listing.packages.multiDestinationTexts,
    breadcrumbs: state.listing.packages.breadcrumbs,
    footerSection: state.listing.packages.footerSection || {},
    faqs: state.listing.packages.faqs || [],
    similarLiveCities: state.listing.packages.similarLiveCities || [],
    loading: state.listing.packages.loading,
    allPackageLink: state.listing.packages.allPackageLink,
    bannerHeadline: state.listing.packages.bannerHeadline,
    filterCategory: state.listing.packages.filterCategory,
    filterDestinationActivities: state.listing.packages.filterDestinationActivities,
    formToLocation: state.listing.packages.formToLocation,
    dynamicPlpPage: state.listing.packages.dynamicPlpPage,
    filterCounts: state.listing.filterCounts.filterCounts,
    destinationName: state.listing.packages.destinationName,
    seoFooter: state.listing.seoFooter.data,
    richText: state.listing.packages.richText,
    rating: state.listing.packages.rating,
    reviews: state.listing.packages.reviews,
    packageStartPrice: state.listing.packages.startingPrice,
    banner: state.listing.packages.banner,
    schemaAttributes: state.listing.packages.schemaAttributes,
    footerLinks: _get(state, 'hlp.footerLinks', []),
    fobpLinks: _get(state, 'hlp.fobpLinks', [])
  }),
  {
    setTourCategoryFilter,
    submittedForCompare,
    loadMorePackages,
    setDestinationTypeFilter,
    addToComparingPackages,
    removeFromComparingPackages,
    removeCompareData,
    createFilterParam,
    filterSelected,
    setDefaultSelectedFilters,
    resetDefaultFilters,
    getPackageData
  })(ListingAsync);
