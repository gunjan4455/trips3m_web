import config from 'appConfig';

export const LETS_DISCOVER_LOAD = 'LETS_DISCOVER_LOAD';
export const LETS_DISCOVER_LOAD_SUCCESS = 'LETS_DISCOVER_LOAD_SUCCESS';
export const LETS_DISCOVER_LOAD_FAIL = 'LETS_DISCOVER_LOAD_FAIL';

const defaultParams = (destinations) => {
  const tags = [['bot']];
  tags.push(destinations);
  return {
    tags: {
      'tags_to_include': tags,
      'postCount': 10,
      'sort_order': 'Desc',
      'offset': 0
    }
  };
};

//queryParams
export function fetchLetsDiscover({ destination }) {
  const params = defaultParams(destination.split(','));
  return {
    types: [
      LETS_DISCOVER_LOAD,
      LETS_DISCOVER_LOAD_SUCCESS,
      LETS_DISCOVER_LOAD_FAIL
    ],
    promise: client => client.get(config.apiEndpoints.blogs.url,
      {
        params: {
          data: JSON.stringify({ ...params })
        },
        headers: {
          'TT-APIKEY': 'REFGQUMwQTU1RjUwQTc1NTU4Qjc3ODAzNUUzQzlBOEJERjAzQUYxRTRDMjEyNEQyQ0Q1REQ0MjA5MkVGRDMyRQ=='
        },
        hostType: config.apiEndpoints.blogs.host,
      }),
    //client.get(testimonialsPath(requestedTripId, query)),
    withoutCamelCasing: true
  };
}
