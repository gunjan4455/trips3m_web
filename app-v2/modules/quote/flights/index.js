import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { getCurrentQuote, getFlightsInfo } from '../reducers/quoteList';
import QuoteCard from '../shared/QuoteCard';

const container = withRouter(connect(
  state => {
    const quote = getCurrentQuote(state);
    return {
      heading: 'Flights',
      text: getFlightsInfo(quote),
      section: 'flights-sec'
    };
  })(QuoteCard));

export default {
  container,
  webviewActions: [fetchQuotesData, loadConstants, fetchPreDefinedMessages,
    fetchDiscountOffers, switchQuote, updateRequestedTripId]
};
