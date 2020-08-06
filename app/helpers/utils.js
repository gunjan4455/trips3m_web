import md5 from 'md5';
import appConfig from 'appConfig';
import superagent from 'superagent';
import superagentLogger from 'superagent-logger';

import {
  formatURL,
  parseDestinationToShow,
  parseDestinationsToShow
} from 'utils/parsers';
import { getCookie, setCookie } from './FormDataFormatter';

export const extractIconPath = (assets) => {
  const svgAsset = Object.keys(assets || {}).filter(i => i.startsWith(appConfig.assets.svgPrefix));
  return (svgAsset.length) ?
    (assets[svgAsset[0]] &&
      assets[svgAsset[0]].svg && assets[svgAsset[0]].svg.replace(appConfig.assets.cdn, '')) :
    false;
};

export const getFlexObject = (variant, order, spacingCss = {}) => {
  return {
    // flex: getFlexSize(variant),
    flex: '',
    order: order,
    marginBottom: '',
    ...spacingCss
  };
};
export const pushBrowserInfoToNewRelic = () => {
  if (typeof window !== 'undefined' && typeof window.newrelic !== 'undefined') {
    const connectionDetails = getConnectionDetails();
    if (connectionDetails) {
      newrelic.setCustomAttribute('UserConnectionType', connectionDetails.effectiveType);
      newrelic.setCustomAttribute('UserDownlink', connectionDetails.downlink);
    }

    const pagePerformance = getPagePerformanceDetails();
    newrelic.setCustomAttribute('PageTTFB', pagePerformance.ttfb);
    newrelic.setCustomAttribute('PageResponseTime', pagePerformance.responseTime);
    newrelic.setCustomAttribute('PageProcessingTime', pagePerformance.totalProcessingTime);
    newrelic.setCustomAttribute('PageLoadingTime', pagePerformance.docLoadingTime);
    newrelic.setCustomAttribute('PageJsExecutionTime', pagePerformance.jsExecutionTime);
    newrelic.setCustomAttribute('PageParsingTime', pagePerformance.parsingTime);
  }
};

export const getConnectionDetails = () => {
  // This will work only on Chrome right now.
  if (typeof window !== 'undefined' && typeof window.navigator.connection !== 'undefined') {
    return {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink
    };
  }
  return null;
};

/**
 * Page Navigation document: https://www.w3.org/TR/navigation-timing
 *
 * Please refer following documentation for page processing and execution time:
 * https://www.w3.org/TR/html5/syntax.html#the-end
 * @returns {*}
 */
export const getPagePerformanceDetails = () => {
  // This will work only on Chrome right now.
  if (typeof window !== 'undefined' && typeof window.performance.timing !== 'undefined') {
    const timing = window.performance.timing;
    return {
      ttfb: timing.responseStart - timing.requestStart,
      responseTime: timing.responseEnd - timing.responseStart,
      totalProcessingTime: timing.domLoading - timing.domComplete,
      docLoadingTime: timing.loadEventEnd - timing.loadEventStart,
      parsingTime: timing.domInteractive - timing.domLoading,
      jsExecutionTime: timing.domContentLoadedEventEnd - timing.domInteractive
    };
  }
  return {};
};

/**
 * Method to redirect to error page on client side.
 */
export const redirectToErrorPage = () => {
  window.location = `${appConfig.api_protocol}://${appConfig.server.public.host}${appConfig.errorPage}`;
};

/**
 * Generic httpClient method to make ajax call using super agent.
 * Note: X-CLIENT-API-TOKEN is been already set.
 *
 * @param method - HTTP Method ( GET,POST,PUT etc.)
 * @param path - URL path to make request
 * @param params - query params
 * @param data - POST params
 * @param headers - Headers to be passed
 * @returns {*}
 */

export const httpClient = (method, path, { params, data, headers } = {}) => {
  const request = superagent(method, formatURL({ path }));
  request.set('X-CLIENT-API-TOKEN', appConfig.api.key);
  request.set('Accept', 'application/json').use(superagentLogger(
    { outgoing: true }
  ));

  if (params) {
    request.query(params);
  }

  if (data) {
    request.send(data);
  }

  if (headers) {
    request.set(headers);
  }
  if (appConfig.withCredentials) {
    return request.withCredentials();
  }

  return request;
};

export const capitalizeAndReplaceDash = (params) => {
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

export const capitalizeEveryFirstLetter = (string = '') => {
  let separator = ' ';
  if (string.match('-')) {
    separator = '-';
  }
  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator);
};

/**
 * Calculates percentage if given discounted prices and the total price.
 * E.g., totalPrice = 14130 and discountedPrice = 13000, then the
 * calculated discount is 8%.
 * @param discountedPrice Discounted prices. It's not the discount. It's the price that
 * is offered after the discount.
 * @param totalPrice Total price of the commodity.
 * @returns {number} Calculated discount.
 */
export const getDiscount = (discountedPrice, totalPrice) =>
  Math.round(100 - ((discountedPrice / totalPrice) * 100));

export const getInitialsFromName = name => (
  name.split(' ').map(w => w[0]).splice(0, 2).join('')
);

export const generateUniqueId = (id, date, message) => (
  `${id}${date}${md5(message)}`
);

export function getFullName(firstName = '', lastName = '') {
  return (firstName || lastName) ? `${firstName.trim()} ${lastName.trim()}` : '';
}

const stagesBeforeConvert = {
  'active': 'active',
  'dormant': 'dormant',
  'in progress': 'in progress',
  'hot': 'hot',
  'admin hot': 'admin hot',
  'payment pending': 'payment pending',
  'cold': 'cold',
  'cancelled': 'cancelled'
};

export const isTripConverted = (tripStatus) => {
  return !stagesBeforeConvert[tripStatus.toLowerCase()];
};

const stagesAfterInvoiced = [
  'payment pending',
  'converted'
];

export const checkIsTripStatusBeforeInvoiced = tripStatus => {
  const stageIndex = stagesAfterInvoiced.indexOf(tripStatus.toLowerCase());
  return !(stageIndex > -1);
};

/**
 * This function will split the string based on where the image is located.
 * Either at 50 words if no image found or less than 50 words if any image is found.
 *
 * @param text {string} Content to be split
 * @returns {{more: string, less: string}}
 */
export const parseFooterContent = (text) => {
  const imageTagIndex = text.indexOf('<img');
  const wordsLengthBeforeImageTag = text.substring(0, imageTagIndex).split(' ').length;

  const wordsCount = 50;
  if (wordsLengthBeforeImageTag < wordsCount) {
    return {
      less: text.substring(0, imageTagIndex),
      more: text.substring(imageTagIndex)
    };
  }

  return {
    less: text.split(' ').slice(0, wordsCount).join(' '),
    more: text.split(' ').slice(wordsCount).join(' ')
  };
};

export const setVisitedDestinationsCookie = (destination) => {
  if (!destination) {
    return;
  }

  const destinationsVisited = getCookie('visited_destinations');
  let destinations = destinationsVisited ? JSON.parse(destinationsVisited) : [];

  const lowerCasedDestination = destination.toLowerCase();
  const existingDestinationIndex = destinations.findIndex(d => d[lowerCasedDestination]);

  if (existingDestinationIndex !== -1) {
    const existingDestination = destinations[existingDestinationIndex];

    destinations = [
      { [lowerCasedDestination]: existingDestination[lowerCasedDestination] + 1 },
      ...destinations.slice(0, existingDestinationIndex),
      ...destinations.slice(existingDestinationIndex + 1)
    ];
  } else {
    destinations = [{ [lowerCasedDestination]: 1 }, ...destinations];
  }

  // Only keep 10 most recent destinations
  setCookie('visited_destinations', JSON.stringify(destinations.slice(0, 10)), 30);
};

export const rescue = (fn) => {
  try {
    fn();
  } catch (e) {
    console.log(e.message);
  }
};

export const groupBy = (array, key) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const getListingItemsHeading = (
  title,
  destination,
  isMultiDestination = false,
  destinations = []
) => {
  if (destination === 'tt_seasonal') {
    return title;
  }

  return `${title} ${
    destination
      ? `for ${
        isMultiDestination
          ? parseDestinationsToShow(destinations)
          : parseDestinationToShow(destination)
      }`
      : ''
  }`;
};

export function getTravelerReviewTravCount(travCount) {
  if (travCount && travCount > 1) {
    return ' with ' + ((travCount - 1) > 1 ? ((travCount - 1) + ' others') : ((travCount - 1) + ' other'));
  }
  return '';
};

export function getTravelerReviewDate(date) {
  if (!date) {
    return '';
  }
  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date(date);
  return ' on ' + currentDate.getDate() + ' ' + monthsArr[currentDate.getMonth()] + ', ' + currentDate.getFullYear();
};

export function getTravelerReviewDuration(days) {
  if (days) {
    return ' for ' + (days > 1 ? (days + ' days') : (days + ' day'));
  }
};

export function getTravelerReviewCities(cityArr) {
  if (cityArr && cityArr.length) {
    return 'to ' + (cityArr.length > 1 ? cityArr.join(', ') : cityArr[0]);
  }
  return '';
};


