import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserDetails } from 'reducers/auth';
import { load as fetchQuotes } from '../actions/quoteList';
import { load as fetchQuotesConstants } from '../actions/constants';
import { load as fetchQuotesComments } from '../actions/quoteComments';
import { bookNow, rejectQuote, reactivateQuote, requestMoreQuotes } from '../actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import QuotesSection from './QuotesReceived';
import { getQuoteRejectionReasons } from 'modules/quote/reducers/constants';
import { showRoster } from 'modules/roster/action';

const stateFunc = (state) => ({
  currentTripId: state.trip.currentTrip.data.id,
  quotes: state.quote.list.data.quotes,
  sortOrder: state.quote.list.data.sortOrder,
  quotesComments: state.quote.comments.data,
  userDetails: getUserDetails(state),
  layout: state.layout.data.data,
  constants: state.trip.constants.constants,
  quoteRejectionReasons: getQuoteRejectionReasons(state),
  moreQuotesRequested: state.quote.actions.moreQuotesRequested
});

const container = withRouter(connect(
  stateFunc,
  {
    fetchQuotes,
    fetchQuotesConstants,
    fetchQuotesComments,
    bookNow,
    rejectQuote,
    reactivateQuote,
    fetchDiscountOffers,
    requestMoreQuotes,
    showRoster
  }
)(QuotesSection));

export default {
  container,
  actions: {
    fetchQuotes
  },
  defaultAction: fetchQuotes
};
