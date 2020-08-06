import {
  FILTER_COUNTS_LOAD, FILTER_COUNTS_LOAD_FAIL, FILTER_COUNTS_LOAD_SUCCESS,
} from '../../actionConstants';


const initialState = {
  loaded: false,
  filterValueSeparator: '___',
  filterCounts: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FILTER_COUNTS_LOAD:
      return {
        ...state,
        loading: true,
      };
    case FILTER_COUNTS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        filterValueSeparator: action.result.data.filter_value_separator,
        filterCounts: action.result.data.filters_counts,
      };
    case FILTER_COUNTS_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
