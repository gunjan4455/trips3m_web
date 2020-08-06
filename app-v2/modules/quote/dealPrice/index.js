import { connect } from 'react-redux';

import DealPrice from './dealPrice';
import { getAgentDetails, getCurrentQuote } from 'modules/quote/reducers/quoteList';
import { getTripId } from 'modules/quote/reducers/quoteActivities';
import { createComment, addMessage } from 'modules/chat/action';
import { getUserDetails } from 'app/reducers/auth';



const Container =  connect(state => ({
  agent: getAgentDetails(getCurrentQuote(state)),
  currentQuoteId: state.quote.actions.currentQuoteId,
  tripId: getTripId(state),
  userDetails: getUserDetails(state)
}),
  {
    createComment,
    addMessage
    // quoteCommentAdded
  }
)(DealPrice);

export default Container;
