import { faqs } from 'helpers/urlHelpers';
import config from 'appConfig';

export const FAQ_LOAD = 'FAQ_LOAD';
export const FAQ_LOAD_SUCCESS = 'FAQ_LOAD_SUCCESS';
export const FAQ_LOAD_FAIL = 'FAQ_LOAD_FAIL';

export function fetchFaqsData({ destination, queryParams }) {
  return {
    types: [
      FAQ_LOAD,
      FAQ_LOAD_SUCCESS,
      FAQ_LOAD_FAIL
    ],
    promise: client => client.get(faqs(destination, queryParams), {
      hostType: config.apiEndpoints.faqs.host
    }),
    withoutCamelCasing: false
  };
}
