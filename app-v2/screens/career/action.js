import config from 'appConfig';

export const LOAD = 'career/apply/LOAD';
export const LOAD_SUCCESS = 'career/apply/LOAD_SUCCESS';
export const LOAD_FAIL = 'career/apply/LOAD_FAIL';

export const load = ({ data }) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.post(config.apiEndpoints.career.apply.url, {
    data,
    hostType: config.apiEndpoints.career.apply.host
  })
});

