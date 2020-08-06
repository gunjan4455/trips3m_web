import config from 'appConfig';
import { hlpCommon } from 'helpers/urlHelpers';
import { HLP_LOAD, HLP_LOAD_FAIL, HLP_LOAD_SUCCESS } from 'screens/hlp/action';

export const load = ({ query = {}, params = {}, sortBy = '', pageNumber = 1 }) => ({
  types: [HLP_LOAD, HLP_LOAD_SUCCESS, HLP_LOAD_FAIL],
  promise: client => client.get(hlpCommon(), {
    params: {
      ...params,
      limit: 10,
      offset: Math.max(10 * ((pageNumber || 1) - 1)),
      sort_by: sortBy || 'recommended',
      p_search: JSON.stringify(query)
    },
    hostType: config.apiEndpoints.hlpCommon.host
  }),
  withoutCamelCasing: false
});
