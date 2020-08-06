/* eslint-disable */

import config from '../../config';
import { httpClient, setVisitedDestinationsCookie } from './utils';
import { setCookie } from './FormDataFormatter';

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

const formatURL = ({ path } = {}) => {
  if (path.startsWith('http')) {
    return path;
  }
  const env = __SERVER__ ? 'internal' : 'external';
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  const adjustedPort = config.api[env].port ? ':' + config.api[env].port : '';   // eslint-disable-line prefer-template
  const adjustedHost = cms ? config.cms[env].host : config.api[env].host;
  let protocol = cms ? config.cms_protocol : config.api_protocol;
  return `${protocol}://${adjustedHost}${adjustedPort}${adjustedPath}`;
};

// parsed category and destination from the url for listing page
const parsePackagesPath = ({ pathname: pathName }) => {
  const destination = ''; // pathName.split('/')[1] || '';
  const category = pathName.substring(1).split('-')[0];

  return `${config.apiEndpoints.listing.url}?result_type=package_catalog&trip_type=${category}&destination=${destination}`;
};

const currencyToSymbol = currency => (currencySymbols[currency] || `${currency} `);

const parsePrice = ({ price, currency = 'Rupee', roundNumber = true, appendOnly = true }) => `${currencyToSymbol(currency)} ${numberWithCommas(roundNumber ? Math.round(price) : price)}${appendOnly ? '/-' : ''}`;

const getPercentage = ({ price = 0, discount = 0 }) => Math.round((discount / price) * 100);

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const capitalizeEveryFirstLetter = string => {
  let separator = ' ';
  if (string.match('-')) {
    separator = '-';
  }
  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator);
};

const capitalizeAndReplaceDash = (params) => {
  if (params instanceof Array) {
    return params.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(', ');
  }

  let string = params.scheme || params.city || params.destination || params;
  let separator = ' ';
  if (string.match('-')) {
    separator = '-';
  }
  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator).replace(/-/g, ' ');
};

const deCapitalizeFirstLetter = string => string.charAt(0).toLowerCase() + string.slice(1);

const makeCapitalizedSentence = (string = '', separator = '-') =>
  string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');

const createListingParams = (filters, selectedFilters, sortBy, pageNumber = 1) => {
  let filter;
  let option;
  const params = [];
  // params for filter
  for (const filterId in selectedFilters) {
    filter = filters[filterId];
    for (const optionId in selectedFilters[filterId]) {
      option = filter.options.filter(elem => (elem.id === parseInt(optionId)))[0];
      if (option && selectedFilters[filterId][optionId]) {
        params.push(`${filter.paramsName}=${option.value}`);
      }
    }
  }
  // category=honeymoon" 1 : "category=family"
  // params for sort by
  params.push(`sort_by=${sortBy}`);
  params.push(`page_number=${pageNumber}`);
  if (params.includes('category=honeymoon') && params.includes('category=family')) {
    params.splice(params.indexOf('category=honeymoon'), 1);
    params.splice(params.indexOf('category=family'), 1);
    params.push('category=tour');
  }
  if (params.includes('destination_type=india') && params.includes('destination_type=international')) {
    params.splice(params.indexOf('destination_type=india'), 1);
    params.splice(params.indexOf('destination_type=international'), 1);
    params.push('destination_type=all');
  }
  return params.join('&');
};

const getCategory = (filters, selectedFilters) => {
  const categoryId = 36;
  const honeymoonId = 1;
  const familyId = 2;
  if (selectedFilters[categoryId]) {
    if (selectedFilters[categoryId][honeymoonId]) {
      return 'honeymoon';
    }
    if (selectedFilters[categoryId][familyId]) {
      return 'family';
    }
    if (selectedFilters[categoryId][honeymoonId] && selectedFilters[categoryId][familyId]) {
      return 'tour;';
    }
  }
  return 'tour';
};

const createListingUrl = (filters, selectedFilters, sortBy, pageNumber = 1, destination = '') => {
  const params = createListingParams(filters, selectedFilters, sortBy, pageNumber);
  const category = getCategory(filters, selectedFilters);
  return (`/${category}-packages/${(destination) ? destination : ''}?${params}`);
};

const createListingApiUrl = (filters, selectedFilters, sortBy, pageNumber = 1, destination = '') => {
  const params = createListingParams(filters, selectedFilters, sortBy, pageNumber);
  return `${config.apiEndpoints.listing.url}?result_type=package_catalog&trip_type=tour&${params}&destination=${destination}`;
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
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const getUserIdFromSearch = () => {
  //TODO: Brij remove
  // if (true) {
  //   return '1842840';
  // }
  if (typeof window !== 'undefined') {
    const match = window.location.search.match('[?&]user_id=([^&]+)');
    return match ? match[1] : '';
  }
  return '';
};

const appendPageNumberInUrl = (url, pageNumber) => {
  if (url.match(/page\/\d+/)) {
    return url.replace(/page\/\d+/, `page/${pageNumber}`);
  }
  return;
};

const parseDestinationToShow = (destination = '') => {
  if (destination) {
    return capitalizeEveryFirstLetter(destination).replace(/-/g, ' ');
  }

  return '';

  // if (destination)
  //   const matcher = destination.match(/(sri-lanka)/i);
  //   const matcherSriLanka = matcher && matcher[1];
  //   if (matcherSriLanka) {
  //     const removedHyphenFromSriLanka = destination.replace(matcherSriLanka, capitalizeEveryFirstLetter(matcherSriLanka).replace(/-/g, ' '));
  //     parsedDestination = capitalizeEveryFirstLetter(removedHyphenFromSriLanka);
  //   } else {
  //     parsedDestination = capitalizeEveryFirstLetter(destination);
  //   }
  // }

  // return parsedDestination;
};

const parseDestinationsToShow = (destinations = [], separater = '-') => destinations.join(separater);

const getDiscountedPrice = (actualPrice, discount = 0) => actualPrice - discount;

const getDestination = (destination) => {
  if (destination) {
    const data = {
      user_input: destination,
      parse_negation: false,
      parse_destination: true,
      can_filter: false,
      rbt_index_question_answer_map: {}
    };
    httpClient('POST', config.apiEndpoints.rbtParse.url, { data }).then((response) => {
      const result = response.body.data;
      if (result.matched_destinations) {
        setCookie('cb_dt', capitalizeAndReplaceDash(result.matched_destinations));
        setVisitedDestinationsCookie( capitalizeAndReplaceDash(result.matched_destinations));
      } else {
        setCookie('cb_dt', capitalizeAndReplaceDash(destination));
        setVisitedDestinationsCookie( capitalizeAndReplaceDash(destination));
      }
    });
  } else {
    setCookie('cb_dt', capitalizeAndReplaceDash(destination || ''));
    setVisitedDestinationsCookie(capitalizeAndReplaceDash(destination || ''));
  }
};

const replaceDashWithUnderscore = (text) => {
  if(!text) return '';
  if (typeof text !== 'string') return text;
  return text.replace(/-/g, '_');
};

export {
  formatURL,
  parsePackagesPath,
  currencyToSymbol,
  parsePrice,
  getPercentage,
  capitalizeFirstLetter,
  capitalizeEveryFirstLetter,
  deCapitalizeFirstLetter,
  makeCapitalizedSentence,
  createListingUrl,
  createListingApiUrl,
  generateUniqueHash,
  numberWithCommas,
  getUserIdFromSearch,
  appendPageNumberInUrl,
  capitalizeAndReplaceDash,
  parseDestinationToShow,
  parseDestinationsToShow,
  getDiscountedPrice,
  getDestination,
  replaceDashWithUnderscore
};
