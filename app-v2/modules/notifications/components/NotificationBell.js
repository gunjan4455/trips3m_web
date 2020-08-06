import React from 'react';
import PropTypes from 'prop-types';

import {
  NotificationIconWhite,
} from 'helpers/Icon/Icon';
import {
  GNotificationBellIconDiv,
  GNotificationCount,
} from '../G';

const NotificationBell = ({
                            unreadNotificationCount,
                            markNotificationRead,
                            userId
                          }) => {
  const onBellClick = () => {
    if (unreadNotificationCount) {
      markNotificationRead(userId);
    }
  };

  return (
    <GNotificationBellIconDiv onClick={onBellClick}>
      <NotificationIconWhite className="absolute-center-v l0" />
      {
        (unreadNotificationCount)
          ? <GNotificationCount>
            {
              (unreadNotificationCount) > 99 ? '99+' : `${unreadNotificationCount}`
            }
          </GNotificationCount>
          : null
      }
    </GNotificationBellIconDiv>
  );
};

NotificationBell.propTypes = {
  userId: PropTypes.string.isRequired,
  unreadNotificationCount: PropTypes.number.isRequired,
  markNotificationRead: PropTypes.func.isRequired
};

export default NotificationBell;
