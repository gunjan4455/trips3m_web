import {
  DESTINATION_BLOGS_LOAD,
  DESTINATION_BLOGS_LOAD_SUCCESS,
  DESTINATION_BLOGS_LOAD_FAIL
} from './action';

const initialState = {
  blogs: [],
  loaded: false,
  loading: false,
};

export default function destinationBlogs(state = initialState, action = {}) {

  switch (action.type) {
    case DESTINATION_BLOGS_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case DESTINATION_BLOGS_LOAD_SUCCESS: {
      return {
        ...state,
        blogs: JSON.parse(action.result), //normalize(data)
        loaded: true,
        loading: false,
        errors: null
      };
    }
    case DESTINATION_BLOGS_LOAD_FAIL
    : {
      return {
        ...state,
        loaded: false,
        loading: false,
        errors: action.error && action.error.errors
      };
    }
    default:
      return state;
  }
}
