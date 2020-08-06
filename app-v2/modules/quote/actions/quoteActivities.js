import {
  bookNowUrl,
  rejectQuoteUrl,
  reactivateQuoteUrl,
  downloadQuoteUrl,
  updateQuoteStatsUrl,
  requestMoreQuotesPath
} from 'helpers/urlHelpers';

export const SWITCH_QUOTE = 'quoteDetail/quoteInformation/SWITCH_QUOTE';
export const UPDATE_REQUESTED_TRIP = 'quoteDetail/quoteInformation/UPDATE_REQUESTED_TRIP';

export const REJECT_QUOTE_CONFIRM_LOAD = 'quoteDetail/quoteActivities/REJECT_QUOTE_CONFIRM_LOAD';
export const REJECT_QUOTE_CONFIRM_SUCCESS = 'quoteDetail/quoteActivities/REJECT_QUOTE_CONFIRM_SUCCESS';
export const REJECT_QUOTE_CONFIRM_FAIL = 'quoteDetail/quoteActivities/REJECT_QUOTE_CONFIRM_FAIL';

export const BOOK_NOW_LOAD = 'quoteDetail/quoteActivities/BOOK_NOW_LOAD';
export const BOOK_NOW_SUCCESS = 'quoteDetail/quoteActivities/BOOK_NOW_SUCCESS';
export const BOOK_NOW_FAIL = 'quoteDetail/quoteActivities/BOOK_NOW_FAIL';

export const REACTIVATE_QUOTE_LOAD = 'quoteDetail/quoteActivities/REACTIVATE_QUOTE_LOAD';
export const REACTIVATE_QUOTE_SUCCESS = 'quoteDetail/quoteActivities/REACTIVATE_QUOTE_SUCCESS';
export const REACTIVATE_QUOTE_FAIL = 'quoteDetail/quoteActivities/REACTIVATE_QUOTE_FAIL';

export const DOWNLOAD_QUOTE_LOAD = 'quoteDetail/quoteActivities/DOWNLOAD_QUOTE_LOAD';
export const DOWNLOAD_QUOTE_SUCCESS = 'quoteDetail/quoteActivities/DOWNLOAD_QUOTE_SUCCESS';
export const DOWNLOAD_QUOTE_FAIL = 'quoteDetail/quoteActivities/DOWNLOAD_QUOTE_FAIL';

export const UPDATE_QUOTE_STATS_LOAD = 'quoteDetail/quoteActivities/UPDATE_QUOTE_STATS_LOAD';
export const UPDATE_QUOTE_STATS_SUCCESS = 'quoteDetail/quoteActivities/UPDATE_QUOTE_STATS_SUCCESS';
export const UPDATE_QUOTE_STATS_FAIL = 'quoteDetail/quoteActivities/UPDATE_QUOTE_STATS_FAIL';

export const MORE_QUOTES_LOAD = 'RequestLanding/MORE_QUOTES_LOAD';
export const MORE_QUOTES_LOAD_SUCCESS = 'RequestLanding/MORE_QUOTES_LOAD_SUCCESS';
export const MORE_QUOTES_LOAD_FAIL = 'RequestLanding/MORE_QUOTES_LOAD_FAIL';

// action creators

export const bookNow = ({ tripId, quoteId }) => (dispatch) => {
  return dispatch({
    types: [BOOK_NOW_LOAD, BOOK_NOW_SUCCESS, BOOK_NOW_FAIL],
    promise: client => client.get(`${bookNowUrl(tripId, quoteId)}`)
  });
};

export const rejectQuote = ({ tripId, quoteId, reason = '', reasonText = '' }) => (dispatch) => {
  return dispatch({
    types: [REJECT_QUOTE_CONFIRM_LOAD, REJECT_QUOTE_CONFIRM_SUCCESS, REJECT_QUOTE_CONFIRM_FAIL],
    promise: client => client.post(`${rejectQuoteUrl(tripId, quoteId)}`, {
      params: {
        quote: {
          quote_decline_reason: reason,
          quote_other_decline_reason: reasonText
        }
      }
    })
  });
};

export const reactivateQuote = ({ tripId, quoteId }) => (dispatch) => {
  return dispatch({
    types: [REACTIVATE_QUOTE_LOAD, REACTIVATE_QUOTE_SUCCESS, REACTIVATE_QUOTE_FAIL],
    promise: client => client.post(`${reactivateQuoteUrl(tripId, quoteId)}`)
  });
};


export const downloadQuote = ({ quoteId }) => ({
  types: [DOWNLOAD_QUOTE_LOAD, DOWNLOAD_QUOTE_SUCCESS, DOWNLOAD_QUOTE_FAIL],
  promise: client => client.post(`${downloadQuoteUrl(quoteId)}`),
});

export const updateQuoteStats = ({ tripId, quoteId, source }) => {
  const queryParams = { source };

  return {
    types: [UPDATE_QUOTE_STATS_LOAD, UPDATE_QUOTE_STATS_SUCCESS, UPDATE_QUOTE_STATS_FAIL],
    promise: client => client.post(`${updateQuoteStatsUrl(tripId, quoteId, queryParams)}`),
  };
};

export const updateRequestedTripId = ({ tripId }) => {
  return {
    type: UPDATE_REQUESTED_TRIP,
    requestedTripId: tripId,
  };
};

export const switchQuote = ({ quoteId }) => ({
  type: SWITCH_QUOTE,
  quoteId,
});


export function requestMoreQuotes(rtripId, values, params, query = '') {
  const data = {
    _method: 'post',
    ...params
  };
  return {
    types: [MORE_QUOTES_LOAD, MORE_QUOTES_LOAD_SUCCESS, MORE_QUOTES_LOAD_FAIL],
    promise: client => client.post(requestMoreQuotesPath(
      rtripId,
      values.feedback,
      values.otherReason,
      query), { data }),
    withoutCamelCasing: true
  };
}
