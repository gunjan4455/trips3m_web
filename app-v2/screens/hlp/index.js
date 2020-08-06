import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import { initialize } from 'redux-form';
import _get from 'lodash/get';

import { getHotelSearchParams } from 'helpers/hotels';
import { getCurrentMonth, getTravelMonth } from 'helpers/DateTime';
import { load, loadMoreHotels, footerLinks } from './action';
import { load as popularPackages } from 'screens/cityBlock/action';
import { setPivotInStore } from './reducer';
import { fetchPlacesToVisitData } from 'modules/placesToVisit/action';
import {
  parseHotelUrl, applyFilters, applySort, parseHotelFilters, findElementByKey,
  Constants
} from 'helpers/hotels';
import { useQuery } from 'containers/Listing/parseFilters';
import { updateHotelSearchParams } from '../hdp/action';

const Hlp = Loadable({
  loader: () => import(/* webpackChunkName: 'hotel-listing' */ './Hlp'),
  loading: () => null
});

export default asyncConnect(
  [
    { promise: () => import('./Hlp') },
    {
      promise: ({ store: { dispatch }, match: { params: { destination } } }) => {
        if (!destination) {
          return Promise.resolve();
        }
        const queryParams = {
          offset: 0,
          limit: 10,
          places_to_visit: true,
          lookup_parent: true,
          module: 'hotel'
        };
        return dispatch(fetchPlacesToVisitData({ destination, queryParams, lookupParent: true }));
      }
    },
    {
      promise: ({
                  store: { dispatch, getState },
                  location: { search },
                  match: { params: { filterType, propertyType, destination = '', landmark } },
                  route,
                  helpers: { client }
                }) => {
        const state = getState();
        const pivot = state.hlp && state.hlp.constants;
        const query = useQuery(search);
        propertyType = propertyType ? propertyType : route.hotelType;
        const { primaryPivot, secondaryPivot } = parseHotelUrl({
          filterType,
          propertyType,
          destination,
          landmark,
          query
        });
        if (pivot && Object.keys(pivot).length === 0) {
          dispatch(setPivotInStore({ secondaryPivot, primaryPivot }));
        }

        const star_ratings = secondaryPivot[Constants.STAR_RATING] ?
          findElementByKey('title', secondaryPivot[Constants.STAR_RATING]).value : '';

        const themes = secondaryPivot[Constants.THEMES] ? secondaryPivot[Constants.THEMES] : '';
        const travelMonth = query.travelmonth ?
          (query.travelmonth === 'nd' ? 13 : getTravelMonth(query.travelmonth) + 1) : getCurrentMonth() + 1;

        const hotelSearchParams = getHotelSearchParams(client, query);

        dispatch(updateHotelSearchParams(hotelSearchParams));
        return dispatch(
          load({
            query: parseHotelFilters(query, 'query').filters,
            params: {
              property_types: propertyType,
              location: destination,
              nearby: landmark || '',
              star_ratings,
              themes,
              travel_month: travelMonth
            },
            hotelSearchParams: hotelSearchParams,
            sortBy: query.sort_by,
            pageNumber: query.page
          })
        );
      }
    },
    {
      promise: ({ store: { dispatch }, match: { params: { landmark, destination } } }) => {
        if (!destination) {
          return Promise.resolve();
        }

        const queryParams = {
          landmark: landmark,
          module: 'hotel',
          popular_packages: true,
          rated: false,
          similar_destinations: false,
          tabs: false,
          tourism_guide: false
        };
        return dispatch(popularPackages({ destination, queryParams }));
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { propertyType, destination = '', landmark, filterType } },
                  location: { search },
                  route
                }) => {

        if (!destination) {
          return Promise.resolve();
        }

        const query = useQuery(search);
        const { secondaryPivot } = parseHotelUrl({
          filterType,
          propertyType,
          destination,
          landmark,
          query
        });

        propertyType = propertyType ? propertyType : route.hotelType;

        const star_rating = secondaryPivot[Constants.STAR_RATING] ?
          findElementByKey('title', secondaryPivot[Constants.STAR_RATING]).value : '';

        const theme = secondaryPivot[Constants.THEMES] ? secondaryPivot[Constants.THEMES] : '';
        return dispatch(
          footerLinks({
            property_type: propertyType,
            location: destination,
            star_rating,
            theme,
            scope: 'hotel'
          })
        );
      }
    },
  ],
  state => ({
    hlp: _get(state, 'hlp.data', {}),
    loading: _get(state, 'hlp.loading', {}),
    primaryPivot: _get(state, 'hlp.constants.primaryPivot', {}),
    packages: state.cityBlock.data && state.cityBlock.data.popularPackages,
    footerLinks: _get(state, 'hlp.footerLinks', []),
    searchParams: _get(state, 'hotelDetail.searchParams', {}),
  }),
  dispatch => ({
    applyFilters(params) {
      dispatch(applyFilters(params));
    },
    loadMoreHotels(params) {
      dispatch(loadMoreHotels(params));
    },
    applySort(params) {
      dispatch(applySort(params));
    },
    resetFilters(params) {
      dispatch(initialize('hlpFilters', params));
    }
  })
)(Hlp);


