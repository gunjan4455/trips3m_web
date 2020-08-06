import React from 'react';
import PropTypes from 'prop-types';

import AgentOnlineIndicator from 'modules/shared/agentProfile/AgentOnlineIndicator';
import { formatChatKeys } from 'helpers/rtms';
import RequestCallback from 'modules/requestCallback/index';

import styled from '@emotion/styled';

const GChatHeadDiv = styled.div({
  maxWidth: 'calc(100% - 42px)',
});

class ChatHeader extends React.Component {
  static propTypes = {
    chatKeys: PropTypes.object.isRequired,
    agentId: PropTypes.number.isRequired,
    agentName: PropTypes.string.isRequired,
    userDetails: PropTypes.object.isRequired,
  };

  render() {
    const { agentId, agentName, chatKeys, userDetails } = this.props;

    return (
      <div className={`row row- chat-header relative at_chatheader flex`}>
        <GChatHeadDiv className="flexFull p0 mr8">
          <p className="m0 pb4 sfcw f16 ellipsis">{agentName}</p>
          <div className="clearfix relative">
            <AgentOnlineIndicator
              showPresenceMessage={true}
              userId={agentId}
              pubnubConfig={formatChatKeys(chatKeys)}
              userDetails={userDetails}
              isChatIndicator={true}
            />
          </div>
        </GChatHeadDiv>
        <RequestCallback isIcononly={true} isWhiteIcon={true} />
      </div>
    );
  }
}

export default ChatHeader;
