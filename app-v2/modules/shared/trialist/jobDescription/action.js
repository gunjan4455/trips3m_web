import config from 'appConfig';

export const LOAD = 'career/JobDescription/LOAD';
export const LOAD_SUCCESS = 'career/JobDescription/LOAD_SUCCESS';
export const LOAD_FAIL = 'career/JobDescription/LOAD_FAIL';

export const load = () => {
  return ({
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(config.apiEndpoints.career.details.url, {
      hostType: config.apiEndpoints.career.details.host
    }),
    withoutCamelCasing: false
  });
};
