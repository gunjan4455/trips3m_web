/* eslint-disable */
import { parse } from 'query-string';
import _get from 'lodash/get';
import config from '../../config';
import parseFilters, { useQuery } from "../containers/Listing/parseFilters";
import HostType from 'constants/hostType';

const currencySymbols = {
  Rupee: '₹',
  INR: '₹',
  Dollar: '$',
  Euro: '€',
  SGD: 'S$',
  MYR: 'MYR',
  PHP: 'PHP',
  GBP: '£',
  AUD: 'A$',
  CAD: 'C$',
  SAR: 'SAR',
  LBP: 'LBP',
  ZAR: 'ZAR',
  PKR: 'PKR',
  AED: 'AED',
  CHF: 'CHF',
  JPY: 'JPY',
  NZD: 'NZ$'
};

const DESTINATION_TYPE = "37";

export const EXCLUSION_TAGS = {
  'inclusion_category_tags': ['flight_filter']
};
export const EXCLUSION_CATEGORY_TAGS = 'exclusion_category_tags';
export const EXCLUSION_CATEGORY_TAGS_KEYWORD = '_not_included';
export const FLIGHT_INCLUSION = '7578';

const hostMapper = {
  [HostType.BROWSING]: {
    host: 'browsing',
    protocol: 'browsing_protocol'
  },
  [HostType.CMS]: {
    host: 'cms',
    protocol: 'cms_protocol'
  },
  [HostType.SERVER]: {
    host: 'server.public',
    protocol: 'browsing_protocol'
  },
  [HostType.API]: {
    host: 'api',
    protocol: 'api_protocol'
  },
  'DEFAULT': {
    host: 'api',
    protocol: 'api_protocol'
  }
}

const formatURL = ({ path, hostType = 'DEFAULT'} = {}) => {
  if (path.indexOf('http') >= 0) {
    return path;
  }
  const env = __SERVER__ ? 'internal' : 'external';
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  const adjustedPort = config.api.port ? ':' + config.api.port : '';   // eslint-disable-line prefer-template
  let adjustedHost = _get(config, `${hostMapper[hostType].host}.${env}.host`, config.api[env].host);
  let protocol = _get(config, `${hostMapper[hostType].host}.${env}.scheme`, config.api_protocol);
  return `${protocol}://${adjustedHost}${adjustedPort}${adjustedPath}`;
};

// parsed category and destination from the url for listing page
const parsePackagesPath = ({ pathname: pathName }) => {
  const destination = ''; // pathName.split('/')[1] || '';
  const category = pathName.substring(1).split('-')[0];

  return `${config.apiEndpoints.listing.url}?result_type=package_catalog&trip_type=${category}&destination=${destination}`;
};

const currencyToSymbol = currency => (currencySymbols[currency] || currency);

const parsePrice = ({ price, currency = 'Rupee' }) => `${currencyToSymbol(currency)} ${numberWithCommas(Math.round(price))}`;

const getPercentage = ({ price = 0, discount = 0 }) => Math.round((discount / price) * 100);

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const deCapitalizeFirstLetter = string => string.charAt(0).toLowerCase() + string.slice(1);

export const createListingParams = (filters, selectedFilters, sortBy, category, pageNumber = 1) => {
  let filter;
  let option;
  const params = [];
  // params for filter
  for (const filterId in selectedFilters) {
    if (filterId === 'cities' || filterId === 'inclusion_category_tags' || filterId === 'location_experiences') {
      for (const optionId in selectedFilters[filterId]) {
        if (selectedFilters[filterId][optionId]) {
          params.push(`${filterId}[]=${optionId}`);
        }
      }
    } else if (EXCLUSION_TAGS['inclusion_category_tags'].includes(filterId)) {
      for (const optionId in selectedFilters[filterId]) {
        if (selectedFilters[filterId][optionId]) {
          if (optionId.toLowerCase().includes(EXCLUSION_CATEGORY_TAGS_KEYWORD)) {
            params.push(`${EXCLUSION_CATEGORY_TAGS}[]=${optionId.replace(EXCLUSION_CATEGORY_TAGS_KEYWORD, '')}`);
          } else {
            params.push(`${filters[filterId].paramsName}[]=${optionId}`);
          }
        }
      }
    } else {
      filter = filters[filterId];
      for (const optionId in selectedFilters[filterId]) {
        option = filter.options.filter(elem => (elem.id === parseInt(optionId)))[0];
        if (option && selectedFilters[filterId][optionId]) {
          params.push(`${filter.paramsName}=${option.value}`);
        }
      }
    }
  }
  // params for sort by
  params.push(`sort_by=${sortBy}`);
  params.push(`page_number=${pageNumber}`);
  if (category.toLowerCase() === 'seasonal') {
    if (params.includes('category=honeymoon')) {
      params.splice(params.indexOf('category=honeymoon'), 1);
    }
    if (params.includes('category=family')) {
      params.splice(params.indexOf('category=family'), 1);
    }
    if (params.includes('category=friends')) {
      params.splice(params.indexOf('category=friends'), 1);
    }
    params.push('category=seasonal');
  }
  if (params.includes('destination_type=india') && params.includes('destination_type=international')) {
    params.splice(params.indexOf('destination_type=india'), 1);
    params.splice(params.indexOf('destination_type=international'), 1);
    params.push('destination_type=all');
  }
  return params.join('&');
};

const getCategory = (filters, selectedFilters, category = 'tour') => {
  const categoryId = 36;
  const honeymoonId = 1;
  const familyId = 2;
  const friendsId = 3;
  const categorySelected = selectedFilters[categoryId];
  const honeymoonSelected = categorySelected ? categorySelected[honeymoonId] : '';
  const familySelected = categorySelected ? categorySelected[familyId] : '';
  const friendsSelected = categorySelected ? categorySelected[friendsId] : '';
  if (categorySelected) {
    if ((honeymoonSelected && familySelected) || (familySelected && friendsSelected) ||
      (friendsSelected && honeymoonSelected) || (!honeymoonSelected && !familySelected && !friendsSelected)) {
      if (category === 'seasonal') {
        return category;
      } else {
        return 'tour';
      }
    }
    if (honeymoonSelected) {
      return 'honeymoon';
    }
    if (familySelected) {
      return 'family';
    }
    if (friendsSelected) {
      return 'friends';
    }
  }
  return category;
};

const createListingUrl = (filters, selectedFilters, sortBy, pageCategory, pageNumber = 1, destination = '', listingType = '') => {
  const params = createListingParams(filters, selectedFilters, sortBy, pageCategory, pageNumber);
  const category = getCategory(filters, selectedFilters, pageCategory);
  return (`/${(listingType) ? `${listingType}-` : ''}${category}-packages${(destination) ? `/${destination}` : ''}?${params}`);
};

const createListingApiUrl = (location, route, sortBy, pageNumber = 1, destination = '', packageType = 'seo', listingType = '', initFilters = {}, selectedFilters = {}) => {
  let query = useQuery(location.search);
  if (Object.keys(query).length === 0) {
    const queryStr = createListingParams(initFilters, selectedFilters, '', route.category);
    query = parse(queryStr);
  }
  const { filters } = parseFilters({ query, category: route.category, destinationType: '' });
  return `${config.apiEndpoints.listing.url}?${listingType ? `prefix=${listingType}&` : ''}suffix=${destination}&sort_by=${sortBy}&p_search=${JSON.stringify(filters)}&package_type=${packageType}&limit=10&offset=${10 * (pageNumber - 1)}`;
};

const createListingFilterApiParams = (filters, selectedFilters, sortBy, pageCategory, pageNumber = 1, destination = '') =>
  createListingParams(filters, selectedFilters, sortBy, pageCategory, pageNumber);

const createHotelUrl = (filters, selectedFilters, sortBy, pageCategory, pageNumber = 1, destination = '') => {
  const params = createListingParams(filters, selectedFilters, sortBy, pageCategory, pageNumber);
  const category = getCategory(filters, selectedFilters, pageCategory);
  return (`/${category}-packages/${(destination) ? destination : ''}?${params}`);
};

const createHotelApiUrl = (filters, selectedFilters, sortBy, pageNumber = 1, destination = '', package_type = 'seo') => {
  const params = createListingParams(filters, selectedFilters, sortBy, '', pageNumber);
  if (package_type === 'seasonal')
    return `${config.apiEndpoints.listing.url}?result_type=package_catalog&trip_type=seasonal&${params}&destination=${destination}&package_type=seasonal`;
  else {
    return `${config.apiEndpoints.listing.url}?result_type=package_catalog&trip_type=tour&${params}&destination=${destination}`;
  }
};
// Avoid using this function.
// Effects performance.
// Left with no other options given tight deadlines :/
const generateUniqueHash = (string) => {
  let hash = 0;

  if (string.length === 0) return hash;

  for (const i in string) { // eslint-disable-line
    const chr = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr; //eslint-disable-line
    hash |= 0; // eslint-disable-line
  }

  return hash;
};

const numberWithCommas = (number) => {
  const parts = (number || '').toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const parseDestinationsToShow = (destinations = [], separater = '-') => destinations.join(separater);

const capitalizeAndReplaceDash = (params) => {
  if (params instanceof Array) {
    return params.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(', ');
  }

  const string = params.scheme || params.city || params.destination || params;
  let separator = ' ';
  if (string.match('-')) {
    separator = '-';
  }
  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator).replace(/-/g, ' ');
};

const capitalizeEveryFirstLetter = string => {
  let separator = ' ';
  if (string.match('-')) {
    separator = '-';
  }
  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator);
};

const firstKeyValue = obj => {
  let first = null;
  if (obj) {
    for (let key in obj) {
      first = { key, value: obj[key] };
      break;
    }
  }
  return first;
};

const parseDestinationToShow = (destination = '') => {
  if (destination) {
    return capitalizeEveryFirstLetter(destination).replace(/-/g, ' ');
  }

  return '';
};

const inflatePrice = (price, inflateAmt = 15) => {
  if (!price || isNaN(price)) {
    return price;
  }
  return Math.floor(price + (price * (inflateAmt/100)));
};

const compareArr = (a, b) => {
  if (a > b) { return 1; }
  if (b > a) { return -1; }
  return 0;
};

export {
  formatURL,
  parsePackagesPath,
  currencyToSymbol,
  parsePrice,
  getPercentage,
  capitalizeFirstLetter,
  deCapitalizeFirstLetter,
  createListingUrl,
  createListingApiUrl,
  generateUniqueHash,
  numberWithCommas,
  parseDestinationsToShow,
  capitalizeAndReplaceDash,
  capitalizeEveryFirstLetter,
  firstKeyValue,
  createListingFilterApiParams,
  parseDestinationToShow,
  inflatePrice,
  compareArr
};
