import config from 'appConfig';
import _get from 'lodash/get';

import { LOAD, LOAD_SUCCESS, LOAD_FAIL, FETCH_FOOTER_LINKS_SUCCESS } from './action';
const TESTIMONIALS_LOAD_SUCCESS = 'testimonials/LOAD_SUCCESS';
const UPDATE_PRICE = 'packages/details/UPDATE_PRICE';
const UPDATE_SELECTED_MONTH = 'packages/displayRange/UPDATE_SELECTED_MONTH';
const LOAD_INLINE_GATEWAYS = 'package/details/LOAD_INLINE_GATEWAYS';
const LOAD_SUCCESS_INLINE_GATEWAYS = 'package/details/LOAD_SUCCESS_INLINE_GATEWAYS';
const LOAD_FAIL_INLINE_GATEWAYS = 'packages/details/LOAD_FAIL_INLINE_GATEWAYS';

const initialState = {
  loaded: false,
  data: null,
  resource: null,
  testimonials: undefined
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
        resource: action.resource
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        metaTags: action.result.data.seo_packages && action.result.data.seo_packages.meta_tags,
        error: null,
        priceFrom: null,
        priceTo: null,
        updatedMonth: null,
        selectedMonthNumber: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    case TESTIMONIALS_LOAD_SUCCESS:
      if (action.page === 'package') {
        return {
          ...state,
          testimonials: action.result.data.testimonials,
        };
      }
      return state;
    case UPDATE_PRICE:
      return {
        ...state,
        priceFrom: action.price.from,
        priceTo: action.price.to,
        updatedMonth: action.month,
        selectedMonthNumber: action.selectedMonthNumber
      };
    case UPDATE_SELECTED_MONTH:
      return {
        ...state,
        selectedMonthNumber: action.selectedMonthNumber
      };

    case LOAD_INLINE_GATEWAYS: {
      return state;
    }

    case LOAD_SUCCESS_INLINE_GATEWAYS: {
      return {
        ...state,
        data: {
          ...state.data,
          inline_gateways: action.result && action.result.data.inline_gateways
        },
      };
    }
    case LOAD_FAIL_INLINE_GATEWAYS: {
      return state;
    }
    case FETCH_FOOTER_LINKS_SUCCESS: {
      return {
        ...state,
        footerLinks: action.result && action.result.data
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.packages.details && globalState.packages.details.loaded;
}

export function isLoading(globalState) {
  return (globalState.packages.details && globalState.packages.details.loading) || false;
}

export function loadingError(globalState) {
  return (globalState.packages.details && globalState.packages.details.error) || null;
}

export function resource(globalState) {
  const {
    path = '',
    params: { id = '' }
  } = (
    (globalState.packages.details && globalState.packages.details.resource) ||
      {
        params: {}
      }
  );
  return {
    path,
    id
  };
}

export function packageDetails(globalState) {
  try {
    const details = globalState.packages.details;
    const data = globalState.packages.details.data.data.seo_packages;
    const inlineGateway = globalState.packages.details.data.inline_gateways;
    // const selectedMonth = data.month_options.month_ranges
    //             .filter(e => e.id === details.selectedMonthNumber)[0];
    // TODO: Manvendra, this code is just a hack to show the current month prices.
    // It is not playing well with how prices are being shown to the user and
    // the UpdatePackage component.
    const selectedMonth = data.month_options.month_ranges.find(e => e.id === details.selectedMonthNumber);
    return {
      ...data,
      id: data.id,
      overview: data.overview,
      name: data.heading,
      images: {
        imageUrl: data.image_url,
        imagekitUrl: data.imagekit_url,
        slider: data.slider_pic.map(e => ({
          imageUrl: e.picture_details.picture,
          imagekitUrl: e.picture_details.imagekit_url
        })) || []
      },
      covers: {
        days: data.days,
        nights: data.nights
      },
      itinerary: data.itineraries,
      hotels: data.hotels || [],
      flights: data.flights || [],
      cities: data.cities.join('->'),
      incExc: {
        inclusions: data.inclusions.filter(e => e.available || false),
        exclusions: data.inclusions.filter(e => !e.available),
      },
      destinations: data.destinations || [],
      price: {
        total: data.total_price,
        discount: (data.total_price - data.discounted_price),
        currency: data.currency,
        miniDesc: data.mini_desc,
        from: details.priceFrom || (selectedMonth ? selectedMonth.start_price : null),
        to: details.priceTo || (selectedMonth ? selectedMonth.end_price : null),
        month: selectedMonth ? selectedMonth.value :
          data.month_options.month_ranges[0].value
      },
      selectedMonthNumber: details.selectedMonthNumber,
      inlineGateway: inlineGateway,
      rating: _get(details, 'data.data.rating', null),
      reviews: _get(details, 'data.data.reviews', null),
      schemaAttributes: _get(details, 'data.data.schema_attributes', {})
    };
  } catch (e) {
    return null;
  }
}

export const fetchInlineGateways = (packageId, packageUrl, params) => ({
  types: [LOAD_INLINE_GATEWAYS, LOAD_SUCCESS_INLINE_GATEWAYS, LOAD_FAIL_INLINE_GATEWAYS],
  promise: client => client.get(
    `${config.apiEndpoints.inlineGateways.url}/${(packageId === '') ? undefined : packageId}`,
    {
      params: {
        base_url: packageUrl,
        filters: '["Duration"]',
      },
      hostType: config.apiEndpoints.inlineGateways.host
    }
  ),
  withoutCamelCasing: true
});

export function updatePrice({ from = 0, to = 0, month = null, selectedMonthNumber }) {
  return {
    type: UPDATE_PRICE,
    price: {
      from,
      to
    },
    month,
    selectedMonthNumber
  };
}

export function updateSelectedMonth(selectedMonth = '') {
  return {
    type: UPDATE_SELECTED_MONTH,
    selectedMonthNumber: (parseInt(selectedMonth, 10)) || 0,
  };
}

export function checkWeekendpackage(globalState) {
  let weekendPackage = false;
  try {
    weekendPackage = globalState.packages.details.data.data.is_weekend_package;
  } catch (e) {
    weekendPackage = false;
  }
  return weekendPackage;
}

export function detailsResource(globalState) {
  const {
    path = '',
    params: { id = '' }
  } = (
    (globalState.packages.details && globalState.packages.details.resource) ||
      {
        params: {}
      }
  );
  return {
    path,
    id
  };
}
