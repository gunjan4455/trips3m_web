import {
  MORE_QUOTES_LOAD,
  MORE_QUOTES_LOAD_SUCCESS,
  SWITCH_QUOTE,
  UPDATE_REQUESTED_TRIP,
} from '../actions/quoteActivities';

const initialState = {
  currentQuoteId: undefined,
  requestedTripId: undefined,
  moreQuotesRequested: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_QUOTE:
      return {
        ...state,
        currentQuoteId: action.quoteId,
      };
    case UPDATE_REQUESTED_TRIP:
      return {
        ...state,
        requestedTripId: action.requestedTripId
      };
    case MORE_QUOTES_LOAD: {
      return {
        ...state,
        moreQuotesRequested: false
      };
    }
    case MORE_QUOTES_LOAD_SUCCESS: {
      return {
        ...state,
        moreQuotesRequested: true
      };
    }
    default:
      return state;
  }
}

export const getTripId = (state) => (
  state.quote.actions.requestedTripId
);

export const getCurrentQuoteId = (state) => (
  state.quote.actions.currentQuoteId
);
