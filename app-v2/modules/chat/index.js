import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { user } from "app/reducers/auth";
import { getAgentDetails, getCurrentQuote } from "modules/quote/reducers/quoteList";
import { getChatkeys, getMessages, getRemainingMessages } from "./reducer";
import { fetchChatKeys, addMessage, clearMessages, createComment, fetchHistory, loadMoreMessages } from "./action";
import { setPdmCategory, showHidePdmView } from "modules/pdm/action";
import Chat from './Chat';

const container =  withRouter(connect(
  state => {
    const currentQuote = getCurrentQuote(state);
    const agent = getAgentDetails(currentQuote);

    return {
      chatKeys: getChatkeys(state),
      messages: getMessages(state),
      remainingMessages: getRemainingMessages(state),
      userDetails: user(state),
      pdmsInformation: state.quote.pdms,
      tripId: state.quote.actions.requestedTripId,
      quoteId: state.quote.actions.currentQuoteId,
      agentId: agent.id,
      agentName: agent.name,
      currentQuote: currentQuote
    };
  },
  {
    fetchChatKeys,
    addMessage,
    clearMessages,
    createComment,
    fetchHistory,
    loadMoreMessages,
    setPdmCategory,
    showHidePdmView
  }
)(Chat));

export default {
  container,
  webviewActions: [fetchQuotesData, loadConstants, fetchPreDefinedMessages,
    fetchDiscountOffers, switchQuote, updateRequestedTripId]
};
