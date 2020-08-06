import { entryFeesTimingsTips } from 'helpers/urlHelpers';

export const TIPS_LOAD = 'TIPS_LOAD';
export const TIPS_LOAD_SUCCESS = 'TIPS_LOAD_SUCCESS';
export const TIPS_LOAD_FAIL = 'TIPS_LOAD_FAIL';

export function fetchTips({destination, queryParams}) {
  return {
    types: [
      TIPS_LOAD,
      TIPS_LOAD_SUCCESS,
      TIPS_LOAD_FAIL
    ],
    promise: client => client.get(entryFeesTimingsTips(destination, queryParams)),
    withoutCamelCasing: false
  };
}
