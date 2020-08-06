import { HOME_UPDATE_SEARCH } from '../actionConstants';

const initialState = {
  searchTerm: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HOME_UPDATE_SEARCH:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
