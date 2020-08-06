import { normalize } from 'helpers/blog';
import config from 'appConfig';

const BLOG_LOAD = 'blog/load';
const BLOG_LOAD_SUCCESS = 'blog/load_success';
const BLOG_LOAD_FAIL = 'blog/load_fail';

const initialState = {
  loading: false,
  blogPosts: [],
  loaded: false,
  total: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case BLOG_LOAD:
      return {
        ...state,
        loading: true,
      };
    case BLOG_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        blogPosts: normalize(action.result)
      };
    case BLOG_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}

export const loadBlogs = params => ({
  types: [BLOG_LOAD, BLOG_LOAD_SUCCESS, BLOG_LOAD_FAIL],
  promise: client => client.get(config.apiEndpoints.blogs.url,
    { params: { data: JSON.stringify({ ...params }) },
      headers:
      { 'TT-APIKEY': 'REFGQUMwQTU1RjUwQTc1NTU4Qjc3ODAzNUUzQzlBOEJERjAzQUYxRTRDMjEyNEQyQ0Q1REQ0MjA5MkVGRDMyRQ==' },
      hostType: config.apiEndpoints.blogs.host
    }
    )
});

