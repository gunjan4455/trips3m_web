import { parse as parseURL } from 'query-string';

import { parseDestinationsToShow, parseDestinationToShow } from 'amp/utils/parsers';

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
  if(travCount && travCount > 1) {
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
  if(days) {
    return ' for ' + (days > 1 ? (days + ' days') : (days + ' day'));
  }
};

export function getTravelerReviewCities(cityArr) {
  if (cityArr && cityArr.length) {
    return 'to ' + (cityArr.length > 1 ? cityArr.join(', ') : cityArr[0]);
  }
  return '';
};

export const useQuery = (query) => {
  return query ? parseURL(query) : {};
};
