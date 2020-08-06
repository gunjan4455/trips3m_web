import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';
import { load, footerLinks } from './action';
import { isEmptyTestimonialData, isNewDestination } from './helper';
import { fetchPlacesToVisitData } from 'modules/placesToVisit/action';
import { fetchThingsToDoData } from 'modules/thingsToDo/action';
import { fetchMapInformationData } from 'modules/mapInformation/action';
import { fetchCityBlockTestimonials } from 'modules/travelerReview/action';
// import { fetchTravellerStories } from 'modules/travellerStory/action';
// import { fetchLetsDiscover } from 'modules/letsDiscover/action';
import { fetchFaqsData } from 'modules/faqs/action';
import { fetchBannerData } from 'modules/banner/action';
import { fetchRecentPackages } from 'modules/packages/recent/action';
import { fetchHowToReach } from './howToReach/action';
import { fetchBestTimeToVisit } from './bestTimeToVisit/action';
import { fetchEssentialInfo } from './essentialInfo/action';
import { results } from './reducer';
import { fetchTips } from './tips/action';
import { fetchTimings } from './timings/action';
import { fetchEntryFees } from './entryFees/action';
import parseFilters from 'helpers/parseCityBlockFilters';
import { useQuery } from 'containers/Listing/parseFilters';
import { replaceDashWithUnderscore } from 'helpers/parsers';

const CityBlock = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block' */ './CityBlock'),
  loading: () => null
});

const checkOverviewOrIndexTab = (scheme, indexTab, tab, newTab) => {
  if (!scheme) {
    return replaceDashWithUnderscore(indexTab);
  } else if (scheme && !tab) {
    return 'overview';
  }
  return newTab;
};

export default asyncConnect(
  [
    { promise: () => import('./CityBlock') },
    {
      promise: (params) => {
        const  {
          store: { dispatch },
          match: { params: { destination, city, scheme } },
          route : { schemeType }
        } =  params;
        const queryParams = {
          city: city,
          set_url: scheme,
          scheme_type: schemeType
        };
        return dispatch(load({ destination, queryParams }));
      }
    },
    {
      promise: ({
                  store: { dispatch, getState },
                  location: { search },
                  match: { params: { destination, city, category, tab, scheme } },
                  route: { experience, indexTab }
                }) => {
        const query = useQuery(search);
        let newTab = tab ? replaceDashWithUnderscore(tab) : query.t === 'ptv' ?
          'places_to_visit' : undefined;
        const { filters } = parseFilters({ query: query });
        let main_api = false;

        newTab = checkOverviewOrIndexTab(scheme, indexTab, tab, newTab);

        if (experience && !newTab) {
          newTab = 'places_to_visit';
          main_api = true;
        }

        if (
          experience && filters && filters['filter_categories[]'] &&
          typeof filters['filter_categories[]'] === 'string'
        ) {
          delete filters['filter_categories[]'];
          main_api = true;
        }

        const queryParams = {
          offset: 0,
          limit: 10,
          places_to_visit: true,
          lookup_parent: false,
          city: city,
          tab: newTab || 'overview',
          set_url: category,
          experience: experience
        };

        if (
          !['timings', 'entry_fees', 'tips'].includes(newTab) &&
          (newTab === 'places_to_visit' || newTab === 'overview' || isNewDestination(getState(), destination, city))
        ) {
          if (query.page && !isNaN(query.page)) {
            queryParams.offset = (query.page - 1) * 10;
          }
          return dispatch(fetchPlacesToVisitData({ destination, queryParams, filters, main_api }));
        }

        return Promise.resolve();
      }
    },
    {
      promise: ({
                  store: { dispatch, getState },
                  location: { search },
                  match: { params: { destination, city, category, tab, scheme } },
                  route: { experience, indexTab }
                }) => {
        const query = useQuery(search);
        let newTab = tab ? replaceDashWithUnderscore(tab) : query.t === 'ttd' ?
          'things_to_do' : undefined;
        const { filters } = parseFilters({ query: query || {} });
        let main_api = false;

        newTab = checkOverviewOrIndexTab(scheme, indexTab, tab, newTab);

        if (experience && !newTab) {
          newTab = 'things_to_do';
          main_api = true;
        }

        if (
          experience && filters && filters['filter_categories[]'] &&
          typeof filters['filter_categories[]'] === 'string'
        ) {
          delete filters['filter_categories[]'];
          main_api = true;
        }

        const queryParams = {
          offset: 0,
          limit: 10,
          things_to_do: true,
          lookup_parent: false,
          city: city,
          tab: newTab || 'overview',
          set_url: category,
          experience: experience
        };

        if (
          !['timings', 'entry_fees', 'tips'].includes(newTab) &&
          (newTab === 'things_to_do' || newTab === 'overview' || isNewDestination(getState(), destination, city))
        ) {
          if (query.page && !isNaN(query.page)) {
            queryParams.offset = (query.page - 1) * 10;
          }
          return dispatch(fetchThingsToDoData({ destination, queryParams, filters, main_api }));
        }

        return Promise.resolve();
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city } },
                }) => {
        const queryParams = {
          city: city
        };
        return dispatch(fetchMapInformationData({ destination, queryParams }));
        //return Promise.resolve();
      }
    },
    {
      promise: ({
                  store: { dispatch, getState },
                  match: { params: { destination, city } },
                }) => {
        const queryParams = {
          city: city,
          destination: destination
        };
        if (isEmptyTestimonialData(getState()) || isNewDestination(getState(), destination, city)) {
          return dispatch(fetchCityBlockTestimonials({ destination, queryParams }));
        }

        return Promise.resolve();
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city, scheme, from, category, tab } },
                  route: { schemeType, experience, indexTab }
                }) => {
        let newTab = '';
        newTab = checkOverviewOrIndexTab(scheme, indexTab, tab, newTab);
        const queryParams = {
          accountable_type: 'DestinationScheme',
          destination: city ? city : destination,
          scheme_type: schemeType,
          set_url: scheme || category,
          from,
          tab: experience ? 'overview' : replaceDashWithUnderscore(tab || newTab)
        };

        return dispatch(fetchFaqsData({ destination, queryParams }));

      }
    },
    {
      promise: ({
                  store: { dispatch },
                  location: { search },
                  match: { params: { destination, city, scheme, from, category, tab } },
                  route: { schemeType, indexTab }
                }) => {
        const query = useQuery(search);
        let newTab = '';

        newTab = checkOverviewOrIndexTab(scheme, indexTab, tab, newTab);
        const queryParams = {
          city: city,
          tab: replaceDashWithUnderscore(tab && (/^[a-zA-Z]+$/).test(tab) ? tab : '' || newTab || 'overview'),
          set_url: category || scheme,
          scheme_type: schemeType,
          from: from,
          offset: 0,
          limit: 10
        };
        if (query.page && !isNaN(query.page)) {
          queryParams.offset = (query.page - 1) * 10;
        }
        return dispatch(fetchBannerData({ destination, queryParams }));
      }
    },
    {
      promise: ({
                  store: { dispatch, getState },
                  match: { params: { destination, city } },
                }) => {
        const queryParams = {
          city: city
        };
        if (isNewDestination(getState(), destination, city)) {
          return dispatch(fetchRecentPackages({ destination, queryParams }));
        }

        return Promise.resolve();
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city, from, scheme } },
                  route: { schemeType }
                }) => {
        const queryParams = {
          city: city,
          tab: 'how_to_reach',
          scheme_type: schemeType,
          set_url: scheme,
          from: from
        };
        return dispatch(fetchHowToReach({ destination, queryParams }));
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city } },
                }) => {
        const queryParams = {
          city: city,
          tab: 'best_time_to_visit'
        };

        return dispatch(fetchBestTimeToVisit({ destination, queryParams }));
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city, tab } },
                  route: { indexTab }
                }) => {
        const newTab = replaceDashWithUnderscore(tab || indexTab);
        const queryParams = {
          city: city,
          tab: newTab
        };
        if (newTab === 'essential_info') {
          return dispatch(fetchEssentialInfo({ destination, queryParams }));
        } else {
          return Promise.resolve();
        }
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city, scheme, tab } },
                  route: { schemeType }
                }) => {
        const newTab = replaceDashWithUnderscore(tab);
        const queryParams = {
          city: city,
          tab: newTab,
          scheme_type: schemeType,
          set_url: scheme
        };
        queryParams[newTab] = true;
        if (newTab === 'entry_fees') {
          return dispatch(fetchEntryFees({ destination, queryParams }));
        } else {
          return Promise.resolve();
        }
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city, scheme, tab } },
                  route: { schemeType }
                }) => {
        const newTab = replaceDashWithUnderscore(tab);
        const queryParams = {
          city: city,
          tab: newTab,
          scheme_type: schemeType,
          set_url: scheme
        };
        queryParams[newTab] = true;
        if (newTab === 'timings') {
          return dispatch(fetchTimings({ destination, queryParams }));
        } else {
          return Promise.resolve();
        }
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city, scheme, tab } },
                  route: { schemeType }
                }) => {
        const newTab = replaceDashWithUnderscore(tab);
        const queryParams = {
          city: city,
          tab: newTab,
          scheme_type: schemeType,
          set_url: scheme
        };
        queryParams[newTab] = true;
        if (newTab === 'tips') {
          return dispatch(fetchTips({ destination, queryParams }));
        } else {
          return Promise.resolve();
        }
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination, city } },
                }) => {
        const queryParams = {
          location: city || destination,
          scope: 'city_block',
          property_type: 'hotel_and_resort',
        };
        return dispatch(footerLinks(queryParams));
      }
    },
  ],
  state => ({
    cityBlock: results(state),
    breadcrumbs: _get(state, 'banner.data.breadcrumbs', []),
    footerLinks: state.cityBlock.footerLinks
  })
)(CityBlock);


