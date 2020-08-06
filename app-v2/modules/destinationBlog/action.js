import config from 'appConfig';

export const DESTINATION_BLOGS_LOAD = 'DESTINATION_BLOGS_LOAD';
export const DESTINATION_BLOGS_LOAD_SUCCESS = 'DESTINATION_BLOGS_LOAD_SUCCESS';
export const DESTINATION_BLOGS_LOAD_FAIL = 'DESTINATION_BLOGS_LOAD_FAIL';

export function fetchDestinationBlogs({ destination = '', num_traveller = 2 }) {
  const blogUrl = `${config.apiEndpoints.destinationBlogs.url}?destination=${destination}&num_traveler=${num_traveller}`;
  return {
    types: [
      DESTINATION_BLOGS_LOAD,
      DESTINATION_BLOGS_LOAD_SUCCESS,
      DESTINATION_BLOGS_LOAD_FAIL
    ],
    promise: client => client.get(blogUrl,
      {
        headers: {
          'TT-APIKEY': 'REFGQUMwQTU1RjUwQTc1NTU4Qjc3ODAzNUUzQzlBOEJERjAzQUYxRTRDMjEyNEQyQ0Q1REQ0MjA5MkVGRDMyRQ=='
        },
        hostType: config.apiEndpoints.destinationBlogs.host
      }),
    withoutCamelCasing: true
  };
}
