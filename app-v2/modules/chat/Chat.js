import React from 'react';
import PropTypes from 'prop-types';

import config from 'appConfig';
import { timeBefore, currentDate, toTimeStamp } from 'helpers/DateTime';
import { generateUniqueId } from 'helpers/utils';
import { getRtmsConnection, MessageType, RtmsChannels } from 'helpers/rtms';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import ChatHeader from './components/ChatHeader';
import { PDM_CATEGORY_HOTEL, PDM_CATEGORY_ITINERARY, PDM_CATEGORY_INCLUSION } from "helpers/pdmHelpers";

import { GChatMessagesDiv } from './G';
import { useQuery } from 'containers/Listing/parseFilters';

class Chat extends React.Component {
  static propTypes = {
    tripId: PropTypes.number.isRequired,
    quoteId: PropTypes.number.isRequired,
    chatKeys: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    remainingMessages: PropTypes.number,
    userDetails: PropTypes.object.isRequired,
    pdmsInformation: PropTypes.object.isRequired,
    agentName: PropTypes.string.isRequired,
    agentId: PropTypes.number.isRequired,
    currentQuote: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,

    fetchChatKeys: PropTypes.func.isRequired,
    fetchHistory: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    clearMessages: PropTypes.func.isRequired,
    loadMoreMessages: PropTypes.func.isRequired,
    setPdmCategory: PropTypes.func.isRequired,
    showHidePdmView: PropTypes.func.isRequired,
    explainTheQuote: PropTypes.bool
  };

  static defaultProps = {
    remainingMessages: 0,
    explainTheQuote: false
  };

  constructor(props) {
    super(props);
    this.state = {
      history: [],
      agentOnline: false,
      lastSubscribedChannel: '',
      subscribed: false
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.initializeChat = this.initializeChat.bind(this);
  }

  componentDidMount() {
    const { agentId, tripId, quoteId, location } = this.props;
    if (agentId) {
      this.props.fetchChatKeys(agentId, quoteId);
      this.props.fetchHistory(tripId, quoteId, timeBefore(1, 'day'));

      this.initializeChat(this.props);
    }

    const query = useQuery(location.search);
    const pdmCategory = query.pdmcategory;

    if (pdmCategory === PDM_CATEGORY_HOTEL || pdmCategory === PDM_CATEGORY_INCLUSION
      || pdmCategory === PDM_CATEGORY_ITINERARY) {
      this.props.setPdmCategory(pdmCategory);
      this.props.showHidePdmView(true);
    }
  }

  componentDidUpdate(prevProps) {
    const { agentId, tripId, quoteId } = this.props;
    if (prevProps.quoteId !== quoteId) {
      this.props.fetchChatKeys(agentId, quoteId);
      this.props.fetchHistory(tripId, quoteId, timeBefore(1, 'day'));

      this.initializeChat(this.props);
    }
  }

  async initializeChatUsingRtms(props) {

    if (config.useRtms) {
      this.disposeExistingRtms();
    }

    const userId = props.userDetails.id;
    const channelId = props.agentId;

    if (channelId && userId) {
      this.rtms_ = await getRtmsConnection({ userId, channel: RtmsChannels.CHAT });
      this.currentSubscription_ = this.rtms_.subscribeToChannel({ channelId });
      this.currentSubscription_.on(MessageType.MESSAGE, function (message) {
        if (message.commentable_id === props.quoteId) {
          props.addMessage(message, props.quoteId);
        }
      }.bind(this));

      this.currentSubscription_.on(MessageType.MY_MESSAGE, function (message) {
        if (message.commentable_id === props.quoteId) {
          props.addMessage(message, props.quoteId);
        }
      }.bind(this));
      if(this.props.explainTheQuote){
        this.sendMessage( 'I need an explanation for this quote. Please call me back');
      }
    }
  }

  clearMessages() {
    this.props.clearMessages();
  }

  initializeChat(props) {
    this.clearMessages();
    this.initializeChatUsingRtms(props);
  }

  sendMessage(message) {
    // get this information from API
    const { tripId, quoteId } = this.props;
    const { id, name, email, avatar } = this.props.userDetails;
    const messageObj = {
      title: '#chat',
      comment: message,
      commentBy: 'TRAVELLER',
      commentable_id: this.props.quoteId,
      commentable_type: 'Quote',
      role: 'traveller',
      userId: id,
      user_id: id,
      userName: name,
      email,
      userPic: avatar,
      createdAt: currentDate(),
      created_at: new Date().toISOString().split('.')[0] + "+00:00",
      uId: generateUniqueId(id, toTimeStamp(new Date()), message),
      notification_sub_category: 'comment_added',
      trip_id: parseInt(this.props.tripId.toString().replace(/[^0-9\.]/g, ''), 10),
      isPending: 0,
    };

    this.currentSubscription_.sendMessage({ content: messageObj });
    this.props.createComment(tripId, quoteId, messageObj);
    // segment- this.props.quoteCommentAdded(this.props.quoteId);

  }

  componentWillUnMount() {
    this.disposeExistingRtms();
  }

  disposeExistingRtms = () => {
    // close web socket connection and remove all listners
    if (this.rtms_) {
      this.rtms_.close();
    }
  };

  render() {
    const {
      tripId, quoteId, currentQuote,
      agentId, agentName, pdmsInformation, showHidePdmView,
      chatKeys, messages, remainingMessages, loadMoreMessages, userDetails
    } = this.props;

    const segmentData = {
      trip_id: tripId,
      quote_id: quoteId,
      destination_id: currentQuote && currentQuote.destinationsList.length ? currentQuote.destinationsList[0].id : 0,
      status: currentQuote && currentQuote.tripStatus || '',
      quote_status: currentQuote && currentQuote.status || ''
    };

    return (
      <div className={`chatShadow flex flexDColumn hfull wfull sbcw fixed pbc1 t0 l0 wfull hfull`}>
        <div className="relative chatBox__header">
          <ChatHeader
            agentName={agentName}
            chatKeys={chatKeys}
            pdmsInformation={pdmsInformation}
            requestCallbackSegmentData={segmentData}
            agentId={agentId}
            userDetails={userDetails}
          />
        </div>
        <GChatMessagesDiv className="absolute wfull chatBox__messages flexFull">
          <ChatMessages
            messages={messages}
            userId={userDetails.id}
            remainingMessages={remainingMessages}
            fetchHistory={loadMoreMessages}
            pdmsInformation={pdmsInformation}
            tripId={tripId}
            quoteId={quoteId}
          />
        </GChatMessagesDiv>
        <div id="chatBoxSend" className="chatBox__send fixed b0 l0 r0 wfull">
          <ChatInput
            sendMessage={this.sendMessage}
            pdmsInformation={pdmsInformation}
            showHidePdmView={showHidePdmView}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
