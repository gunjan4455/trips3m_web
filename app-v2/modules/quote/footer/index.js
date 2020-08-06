import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setPdmCategory, showHidePdmView } from 'modules/pdm/action';

import {
  getCurrentQuoteStatuses,
  getCurrentQuote,
  getConvertedQuote,
  quoteCtasStatus
} from 'modules/quote/reducers/quoteList';
import { getTripId } from 'modules/quote/reducers/quoteActivities';
import { getQuoteRejectionReasons } from 'modules/quote/reducers/constants';
import { getUserDetails } from 'reducers/auth';
import {
  bookNow,
  rejectQuote,
  reactivateQuote,
} from 'modules/quote/actions/quoteActivities';
import {
  reactivateBooking,
  cancelBooking
} from 'modules/trip/actions/tripActivities';
import { showRoster } from 'modules/roster/action';
import QuoteStickyFooter from './QuoteStickyFooter';

const container = withRouter(connect(
  state => {
    const currentQuote = getCurrentQuote(state);
    return {
      tripId: getTripId(state),
      quoteId: currentQuote.id,
      currentQuote: currentQuote,
      convertedQuote: getConvertedQuote(state),
      quoteStatus: getCurrentQuoteStatuses(currentQuote),
      quoteRejectionReasons: getQuoteRejectionReasons(state),
      userDetails: getUserDetails(state),
      ...quoteCtasStatus(state)
    };
  }, {
    bookNow,
    rejectQuote,
    reactivateQuote,
    reactivateBooking,
    cancelBooking,
    showRoster,
    setPdmCategory,
    showHidePdmView
  })(QuoteStickyFooter));

export default {
  container
};
