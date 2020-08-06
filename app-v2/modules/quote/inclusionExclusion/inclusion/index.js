import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { getInclusion, getCurrentQuote } from 'modules/quote/reducers/quoteList';
import { setPdmCategory, showHidePdmView } from 'modules/pdm/action';
import InclusionExclusion from '../InclusionExclusion';

const container = withRouter(connect(
  state => ({
    title: "Inclusions",
    item: getInclusion(getCurrentQuote(state)),
    sectionName: 'inclusions-sec'
  }), {
    setPdmCategory,
    showHidePdmView
  })(InclusionExclusion));

export default {
  container,
  webviewActions: [fetchQuotesData, loadConstants, fetchPreDefinedMessages,
    fetchDiscountOffers, switchQuote, updateRequestedTripId]
};
