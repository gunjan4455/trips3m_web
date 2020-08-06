import React from 'react';
import PropTypes from 'prop-types';

import { ChatIconWhite } from 'helpers/Icon/Icon';
import Modal from 'modules/shared/GenericModal';
import Chat from 'modules/chat';
import styled from '@emotion/styled';

const GChatSpan = styled.span({
  width: '56px',
  height: '56px',
  bottom: '70px'
});

class ChatIcon extends React.Component {
  static propTypes = {
    handleChatClick: PropTypes.func,
  };

  static defaultProps = {
    handleChatClick: () => {},
  };

  constructor(props) {
    super(props);
  }

  render() {
    const ChatContainer = Chat.container;

    return (
      <Modal
        trigger={
          <GChatSpan className="fixed-menu-button-icon-container radius100 relative z15 fixed pbc1 r15 at_chatTrigger">
            <ChatIconWhite />
          </GChatSpan>
        }
        fullView={true}
        hasCustomClose={true}
        isWhiteIcon={true}
        customClass="chatBotModal"
      >
        <ChatContainer />
      </Modal>
    );
  }
}

export default ChatIcon;

