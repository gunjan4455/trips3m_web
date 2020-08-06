import { entryFeesTimingsTips } from 'helpers/urlHelpers';
import config from 'appConfig';

export const ENTRY_FEES_LOAD = 'ENTRY_FEES_LOAD';
export const ENTRY_FEES_LOAD_SUCCESS = 'ENTRY_FEES_LOAD_SUCCESS';
export const ENTRY_FEES_LOAD_FAIL = 'ENTRY_FEES_LOAD_FAIL';

export function fetchEntryFees({destination, queryParams}) {
  return {
    types: [
      ENTRY_FEES_LOAD,
      ENTRY_FEES_LOAD_SUCCESS,
      ENTRY_FEES_LOAD_FAIL
    ],
    promise: client => client.get(entryFeesTimingsTips(destination, queryParams), {
      hostType: config.apiEndpoints.entryFeesTimingsTips.host
    }),
    withoutCamelCasing: false
  };
}
