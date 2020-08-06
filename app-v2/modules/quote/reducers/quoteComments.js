import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../actions/quoteComments';

const initialState = {
  loaded: false,
  loading: false,
  data: {}
};

export default function quoteCommentsReducer(state = initialState, action = {}) {

  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case LOAD_SUCCESS: {
      const quoteComments = {};
      action.result.data.results.forEach((comment) => {
        quoteComments[comment.quoteId] = comment;
      });

      return {
        ...state,
        loaded: true,
        loading: false,
        data: quoteComments
      };
    }
    case LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
      return state;
  }
}
