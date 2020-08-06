import { testimonialsInfo } from 'helpers/urlHelpers';
import { parseDestinationId } from './reducer';
import config from 'appConfig';

export const TESTIMONIALS_LOAD = 'TESTIMONIALS_LOAD';
export const TESTIMONIALS_LOAD_SUCCESS = 'TESTIMONIALS_LOAD_SUCCESS';
export const TESTIMONIALS_LOAD_FAILURE = 'TESTIMONIALS_LOAD_FAILURE';
export const TESTIMONIALS_LOAD_MORE_CARDS = 'TESTIMONIALS_LOAD_MORE_CARDS';

const getQueryParams = (destination, query, pageNumber) => {
  const id = parseDestinationId(destination);
  let queryParams = {};
  if (isNaN(id)) {
    queryParams = {
      destination: destination,
      accountable_type: 'TestimonialsPage',
      p_search: JSON.stringify(query),
      limit: 25,
      offset: Math.max(25 * ((pageNumber || 1) - 1)),
      breadcrumbs: true
    };
  } else {
    queryParams = {
      id: id,
      accountable_type: 'TestimonialsPage',
      p_search: JSON.stringify(query),
      limit: 25,
      offset: Math.max(25 * ((pageNumber || 1) - 1)),
      breadcrumbs: true
    };
  }
  return queryParams;
};

export const fetchTestimonialsInfo = (destination, query, pageNumber) => {
  return {
    types: [
      TESTIMONIALS_LOAD,
      TESTIMONIALS_LOAD_SUCCESS,
      TESTIMONIALS_LOAD_FAILURE,
    ],
    promise: client =>
      client.get(testimonialsInfo(getQueryParams(destination, query, pageNumber)), {
        hostType: config.apiEndpoints.testimonials.host
      }),
    withoutCamelCasing:false
  };
};

export const loadCards = (destination, query, pageNumber) => {
  return {
    types: [
      TESTIMONIALS_LOAD,
      TESTIMONIALS_LOAD_MORE_CARDS,
      TESTIMONIALS_LOAD_FAILURE,
    ],
    promise: client =>
      client.get(testimonialsInfo(getQueryParams(destination, query, pageNumber)), {
        hostType: config.apiEndpoints.testimonials.host
      }),
    withoutCamelCasing:false

  };
};

