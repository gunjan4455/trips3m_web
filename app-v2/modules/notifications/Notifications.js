import React from 'react';
import PropTypes from 'prop-types';

import { GNotificationBell } from './G';
import config from 'appConfig';
import { getRtmsConnection, MessageType, RtmsChannels } from 'helpers/rtms';
import Modal from 'modules/shared/GenericModal';
import ModalHeaderCustom from 'modules/shared/headers/ModalHeaderCustom';
import NotificationBell from './components/NotificationBell';
import NotificationList from './components/NotificationList';

class Notifications extends React.Component {
  static propTypes = {
    userId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string])
      .isRequired,
    unreadNotificationCount: PropTypes.number,
    messages: PropTypes.array,
    remainingMessages: PropTypes.number.isRequired,

    loadMoreNotifications: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    markNotificationRead: PropTypes.func.isRequired,
  };

  static defaultProps = {
    messages: [],
    unreadNotificationCount: undefined
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    try {
      // load notifications
      this.props.fetchNotifications(this.props.userId);
      this.subscribeToNotification();
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    try {
      if (config.useRtms) {
        this.disposeExistingRtms();
      } else {
        this.unSubscribeNotification();
      }
    } catch (e) {
      console.log(e);
    }
  }

  unsubscribeRtms() {
    if (this.rtms_) {
      this.rtms_.close();
    }
  }

  async subscribeToRtms() {
    const { userId } = this.props;
    const channel = RtmsChannels.SYSTEM;
    this.rtms_ = await getRtmsConnection({ userId, channel });

    // Notification message has come
    this.rtms_.on(MessageType.NOTIFICATION, message => {
      const { payload: [{ content }] } = JSON.parse(message);
      this.props.addMessage(content);
    });
  }

  unSubscribeNotification() {
    this.unsubscribeRtms();
  }

  subscribeToNotification() {
    this.subscribeToRtms();
  }

  disposeExistingRtms = () => {
    // close web socket connection and remove all listners
    if (this.rtms_) {
      this.rtms_.close();
    }
  };

  handleLoadMore() {
    this.props.loadMoreNotifications();
  }

  trackSegmentEvent = (event) => {
    /*trackSegment({
      event: event,
      category: 'The concerned page',
      section: 'Global Menu',
      object: '',
      cta: 'Notification bell',
    });*/
  };

  render() {
    const notificationsPresent = (this.props.remainingMessages > 0);
    const {
      unreadNotificationCount, markNotificationRead, loadMoreNotifications,
      userId, messages, remainingMessages
    } = this.props;

    return (
      <GNotificationBell className="flex alignCenter justifyCenter at_nofification">
        <div className="notification-hover-box relative">
          <Modal
            trigger={<NotificationBell markNotificationRead={markNotificationRead}
                                       unreadNotificationCount={unreadNotificationCount}
                                       userId={userId} />}
            fullView={true}
            hasCustomClose={true}
          >
            <div className="notifications-head absolute wfull hfull flex flexDColumn pb48">
              <ModalHeaderCustom heading='Notifications' />
              <NotificationList
                userId={userId}
                messages={messages}
                notificationsPresent={notificationsPresent}
                loadMoreNotifications={loadMoreNotifications}
                remainingMessages={remainingMessages}
              />
            </div>
          </Modal>
        </div>
      </GNotificationBell>
    );
  }
}

export default Notifications;
