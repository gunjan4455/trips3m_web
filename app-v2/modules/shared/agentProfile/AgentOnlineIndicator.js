import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {
  isRtmsUserOnline,
  getRtmsConnection,
  RtmsChannels
} from 'helpers/rtms';

const GAgentLiveStatusDiv = styled.div({
  color: '#3e3e3e',
  '& .indicator-dot': {
    background: '#999999',
    height: '9px',
    width: '9px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  '&.online .indicator-dot': {
    background: '#4caf50'
  },
  '& p': {
    display: 'inline-block'
  }
});

class AgentOnlineIndicator extends React.Component {
  static propTypes = {
    showPresenceMessage: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
    userDetails: PropTypes.object.isRequired,
    isChatIndicator: PropTypes.bool
  };

  static defaultProps = {
    isChatIndicator: false
  };

  constructor(props) {
    super(props);

    this.state = {
      isOnline: false
    };
    this.updateRtmsOnlineStatus = this.updateRtmsOnlineStatus.bind(this);
    this.initializeChatUsingRtms = this.initializeChatUsingRtms.bind(this);

    this.indicatorClass = this.indicatorClass.bind(this);
    this.showPresenceMessage = this.showPresenceMessage.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props;
    if (userId) {
      this.disposeExistingRtms();
      this.initializeChatUsingRtms({ userId });
    }
  }

  componentDidUpdate({ userId }) {
    if (userId !== this.props.userId) {
      this.disposeExistingRtms();
      this.initializeChatUsingRtms({ userId });
    }
  }

  disposeExistingRtms = () => {
    // close web socket connection and remove all listners
    if (this.rtms_) {
      this.rtms_.close();
    }
  };

  async initializeChatUsingRtms({ userId: channelId }) {
    const currentUserId = this.props.userDetails.id;

    if (channelId && currentUserId) {

      this.rtms_ = await getRtmsConnection({ userId: currentUserId, channel: RtmsChannels.CHAT });

      const subscription = this.rtms_.subscribeToChannel({
        channelId
      });
      subscription.on(
        "status",
        function (status) {
          this.updateRtmsOnlineStatus({ status });
        }.bind(this)
      );
    }
  }

  updateRtmsOnlineStatus({ status }) {
    const isOnline = isRtmsUserOnline({ status });
    this.setState({ isOnline });
  }

  componentWillUnmount() {
    this.disposeExistingRtms();
  }

  indicatorClass() {
    return this.state.isOnline
      ? 'online-ofline-indicator online'
      : 'online-ofline-indicator';
  }

  showPresenceMessage() {
    if (this.props.showPresenceMessage) {
      return this.state.isOnline ? 'Online' : 'Offline';
    }
    return null;
  }

  render() {
    const { isChatIndicator } = this.props;
    return (
      <GAgentLiveStatusDiv className={this.indicatorClass()}>
        <span className="indicator-dot mr4" />
        <p className={`at_userOnlineStatus ${isChatIndicator ? 'sfcw ' : ' '} m0 f12`}>{this.showPresenceMessage()}</p>
      </GAgentLiveStatusDiv>
    );
  }
}

export default AgentOnlineIndicator;
