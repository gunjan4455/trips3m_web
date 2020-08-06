import {
  REQUEST_CALLBACK_LOAD, REQUEST_CALLBACK_SUCCESS, REQUEST_CALLBACK_FAIL
} from './action';

const initialState = {
  loaded: false,
  loading: false,
  data: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_CALLBACK_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
        data: {}
      };
    case REQUEST_CALLBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result && action.result.data,
      };
    case REQUEST_CALLBACK_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: {},
        errors: action.error && action.error.errors
      };
    default:
      return state;
  }
}


export const getRequestCallbackSuccess = state => (
  state.requestCallback.data.message || ''
);
