import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { getExclusion, getCurrentQuote } from 'modules/quote/reducers/quoteList';
import InclusionExclusion from '../InclusionExclusion';

const container = withRouter(connect(
  state => ({
    title: "Exclusions",
    item: getExclusion(getCurrentQuote(state)),
    sectionName: 'exclusions-sec'
  }))(InclusionExclusion));

export default {
  container,
  webviewActions: [fetchQuotesData, loadConstants, fetchPreDefinedMessages,
    fetchDiscountOffers, switchQuote, updateRequestedTripId]
};
