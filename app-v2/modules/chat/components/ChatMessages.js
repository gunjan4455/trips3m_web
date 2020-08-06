import React from 'react';
import PropTypes from 'prop-types';

import { GLoadMoreBtn, GNoChat } from '../G';
import 'theme/Common/ChatBox.scss';

import { toTimeStamp } from 'helpers/DateTime';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';

class ChatMessages extends React.Component {
  static propTypes = {
    tripId: PropTypes.number.isRequired,
    quoteId: PropTypes.number.isRequired,
    messages: PropTypes.array,
    userId: PropTypes.number.isRequired,
    fetchHistory: PropTypes.func.isRequired,
    remainingMessages: PropTypes.number.isRequired,
    pdmsInformation: PropTypes.object.isRequired
  };

  static defaultProps = {
    messages: [],
  };

  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidUpdate() {
    const chatMessageContainer = document.getElementsByClassName('chatmessage_Container');
    const chatContainer = chatMessageContainer && chatMessageContainer[0].lastChild;
    if (chatContainer !== null) {
      chatContainer.scrollIntoView({ block: 'end' });
    }
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.messages !== nextProps.messages);
  }

  loadMore() {
    this.props.fetchHistory(this.props.tripId, this.props.quoteId);
  }

  getUsernameFromMessage = (message) => {
    if (message.userName){
      return message.userName;
    }

    if(message.email){
      const emailName = message.email.split("@")[0];
      return emailName.replace(/[0-9]*/,'').replace(/[_.]/, ' ').replace(/[^ 0-9A-Za-z]/, '');
    }

    return '';
  };

  render() {
    const { userId, messages, remainingMessages } = this.props;
    const boxCss = 'chat-box-data';

    return (
      <div className={`chatmessage_Container row row- ${boxCss} p8 at_chatmessage`}>
        {
          (remainingMessages > 0)
            ? <GLoadMoreBtn
              className="pbc1 sfcw p4 f12 radius20 text-center mb8 at_loadmore"
              onClick={this.loadMore}
            >
              Load More
            </GLoadMoreBtn>
            : null
        }
        {
          (!messages.length) ?
            <GNoChat className="absolute"><p>Chat with our agent to <span className="block">customize your quote</span>
            </p></GNoChat> : null
        }
        {
          messages.map((message, messageIndex) => (
            (parseInt(message.userId, 10) !== parseInt(userId, 10))
              ? (<IncomingMessage
                key={messageIndex || message.uId}
                messageContent={message.comment}
                userImg={message.userImg}
                userName={message.userName}
                deliveryTime={toTimeStamp(message.createdAt)}
                attachments={message.attachmentList}
                messageId={message.id || message.uId}
              />)
              : (<OutgoingMessage
                key={messageIndex || message.uId}
                messageContent={message.comment}
                userImg={message.userImg}
                userName={this.getUsernameFromMessage(message)}
                deliveryTime={toTimeStamp(message.createdAt)}
                attachments={message.attachmentList}
                messageId={message.id || message.uId}
              />)
          ))
        }
      </div>
    );
  }
}

export default ChatMessages;

