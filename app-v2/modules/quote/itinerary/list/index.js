import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { results } from '../helper';
import { showHidePdmView, setPdmCategory } from 'modules/pdm/action';
import { getTripId } from 'modules/quote/reducers/quoteActivities';
import { getCurrentQuote } from "modules/quote/reducers/quoteList";
import ItineraryList from './ItineraryList';

const container = withRouter(
  connect(
    state => {
      const currentQuote = getCurrentQuote(state);

      return {
        itineraryInfo: results(currentQuote),
        tripId: getTripId(state),
        quoteId: currentQuote.id
      };
    },
    {
      setPdmCategory,
      showHidePdmView
    }
  )(ItineraryList)
);

export default {
  container,
  webviewActions: [fetchQuotesData, loadConstants, fetchPreDefinedMessages,
    fetchDiscountOffers, switchQuote, updateRequestedTripId]
};
