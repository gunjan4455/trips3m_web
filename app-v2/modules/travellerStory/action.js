import config from 'appConfig';

export const TRAVELLER_STORY_LOAD = 'TRAVELLER_STORY_LOAD';
export const TRAVELLER_STORY_LOAD_SUCCESS = 'TRAVELLER_STORY_LOAD_SUCCESS';
export const TRAVELLER_STORY_LOAD_FAIL = 'TRAVELLER_STORY_LOAD_FAIL';

const defaultParams = (destinations, tags) => {
  const tagsToInclude = tags ? tags : [['travelogue']];
  tagsToInclude.push(destinations);
  return {
    tags: {
      'tags_to_include': tagsToInclude,
      'postCount': 10,
      'sort_order': 'Desc',
      'offset': 0
    }
  };
};

export function fetchTravellerStories({ destination = '', tags }) {
  const params = defaultParams(destination.split(','), tags);
  return {
    types: [
      TRAVELLER_STORY_LOAD,
      TRAVELLER_STORY_LOAD_SUCCESS,
      TRAVELLER_STORY_LOAD_FAIL
    ],
    promise: client => client.get(config.apiEndpoints.blogs.url,
      {
        params: {
          data: JSON.stringify({ ...params })
        },
        headers: {
          'TT-APIKEY': 'REFGQUMwQTU1RjUwQTc1NTU4Qjc3ODAzNUUzQzlBOEJERjAzQUYxRTRDMjEyNEQyQ0Q1REQ0MjA5MkVGRDMyRQ=='
        },
        hostType: config.apiEndpoints.blogs.host
      }),
    withoutCamelCasing: true
  };
}
