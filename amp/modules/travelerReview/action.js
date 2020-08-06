import { pdpTestimonials } from 'amp/helpers/urlHelpers';
import config from 'appConfig';

export const TESTIMONIALS_LOAD = 'TESTIMONIALS_LOAD';
export const TESTIMONIALS_LOAD_SUCCESS = 'TESTIMONIALS_LOAD_SUCCESS';
export const TESTIMONIALS_LOAD_FAIL = 'TESTIMONIALS_LOAD_FAIL';

export function fetchPdpTestimonials({ id, queryParams }) {
  return {
    types: [
      TESTIMONIALS_LOAD,
      TESTIMONIALS_LOAD_SUCCESS,
      TESTIMONIALS_LOAD_FAIL
    ],
    promise: client => client.get(pdpTestimonials(id, queryParams), {
      hostType: config.apiEndpoints.pdpTestimonials.host
    }),
    withoutCamelCasing: true
  };
}

