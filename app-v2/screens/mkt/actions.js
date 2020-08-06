import config from 'appConfig';

export const MKT_LOAD = 'MKT_LOAD';
export const MKT_LOAD_SUCCESS = 'MKT_LOAD_SUCCESS';
export const MKT_LOAD_FAILURE = 'MKT_LOAD_FAILURE';

export const load = (page, redirectUrl) => {
  return {
    types: [MKT_LOAD, MKT_LOAD_SUCCESS, MKT_LOAD_FAILURE],
    promise: client => client.get(config.apiEndpoints.mkt.url, {
      params: {
        slug: page,
        main_api: true,
        redirectUrl
      },
      hostType: config.apiEndpoints.mkt.host
    }),
  };
};
