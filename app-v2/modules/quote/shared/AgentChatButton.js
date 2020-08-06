import React from 'react';
import PropTypes from 'prop-types';

import { DefaultIcon } from 'helpers/Icon/Icon';
import Modal from 'modules/shared/GenericModal';
import Chat from 'modules/chat';

class AgentChatButton extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    showIcon: PropTypes.bool,
    handleChatClick: PropTypes.func,
    textClassName: PropTypes.string,
    customButton: PropTypes.bool
  };

  static defaultProps = {
    name: 'Chat',
    showIcon: false,
    handleChatClick: () => {},
    textClassName: 'f14 fw7 sfc1',
    customButton: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { textClassName } = this.props;
    const ChatContainer = Chat.container;

    return (
      <div>
        {
          this.props.showIcon
            ? <span className="input-24 mr8"><DefaultIcon /></span>
            : null
        }
        <Modal
          trigger={
            <button className={`${textClassName} at_agent_chat_button`} onClick={this.props.handleChatClick}>{this.props.name}</button>
          }
          fullView={true}
          hasCustomClose={true}
          isWhiteIcon={true}
        >
          <ChatContainer />
        </Modal>
      </div>
    );
  }
}

export default AgentChatButton;

