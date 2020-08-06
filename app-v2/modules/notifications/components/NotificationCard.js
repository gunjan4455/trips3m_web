import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  GNotification,
  GNotificationData
} from '../G';
import { timeFromNow } from 'helpers/DateTime';
import Avatar from 'modules/shared/Avatar';

const NotificationCard = ({ message }) => (
  <Link to={message.url}>
    <GNotification>{/* (message.read) ? isViewed : '' */}
      <GNotificationData className="bt">
        <div className="absolute l15">
          <Avatar imagePath={message.imageUrl} name={message.name || ''} />
        </div>
        <p className="pfc3 f14p m0 at_notificationTxt">{message.text}</p>
        <p className="pfc4 f12 m0 mt4 at_notificationTime">{timeFromNow(message.time)}</p>
      </GNotificationData>
    </GNotification>
  </Link>
);

NotificationCard.propTypes = {
  message: PropTypes.object.isRequired,
};

export default NotificationCard;
