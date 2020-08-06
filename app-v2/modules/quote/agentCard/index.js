import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { getAgentDetails, getCurrentQuote, getQuotesBasicInfo } from 'modules/quote/reducers/quoteList';
import AgentCard from './AgentCard';
import { getTripId } from "modules/quote/reducers/quoteActivities";
import { getUserDetails } from 'reducers/auth';
import { downloadQuote } from 'modules/quote/actions/quoteActivities';
import { showRoster } from "modules/roster/action";

const container = withRouter(connect(
  state => ({
    agent: getAgentDetails(getCurrentQuote(state)),
    tripId: getTripId(state),
    userDetails: getUserDetails(state),
    ...getQuotesBasicInfo(getCurrentQuote(state)),
  }), {
    downloadQuote,
    showRoster
  }
)(AgentCard));

export default {
  container,
  webviewActions: [fetchQuotesData, loadConstants, fetchPreDefinedMessages,
    fetchDiscountOffers, switchQuote, updateRequestedTripId]
};
