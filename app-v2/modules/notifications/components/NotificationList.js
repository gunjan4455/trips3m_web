import React from 'react';
import PropTypes from 'prop-types';

import {
  GNotificationListDiv
} from '../G';
import NotificationCard from './NotificationCard';

const NotificationList = ({
                            messages,
                            notificationsPresent,
                            loadMoreNotifications,
                            userId,
                          }) => {
  if (!messages.length) {
    return (
      <GNotificationListDiv className="clearfix relative sbc5 pb48">
        <p className="pfc4 f16 m0 f12 p15">All caught up! You have no notifications.</p>
      </GNotificationListDiv>
    );
  }
  return (
    <GNotificationListDiv className="clearfix relative sbc5">
      {
        messages.filter(message => (message.text && message.text.trim().length !== 0)).map(message => (
          <NotificationCard key={message.id} message={message} />
        ))
      }
      {
        (notificationsPresent)
          ? <div className="fixed b0 l0 r0 z2 bs6 sbcw">
            <button className="wfull sfc1 fw7 p15 cursorP" onClick={() => loadMoreNotifications(userId)}>
              <span className="wave" />
              Load More Notification
            </button>
          </div>
          : null
      }
    </GNotificationListDiv>
  );
};

NotificationList.propTypes = {
  messages: PropTypes.array,
  notificationsPresent: PropTypes.bool,
  loadMoreNotifications: PropTypes.func.isRequired,
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]).isRequired,
};

NotificationList.defaultProps = {
  messages: [],
  notificationsPresent: false,
};

export default NotificationList;
