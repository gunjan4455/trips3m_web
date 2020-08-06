import { connect } from 'react-redux';
import { withRouter } from "react-router";

import {
  loadNotifications,
  loadMoreNotifications,
  addMessage,
  fetchPubnubKeys,
  markNotificationRead
} from './action';
import {
  getMessages,
  getUnreadNotificationCount,
  getNotificationKeys,
  getRemainingMessages,
} from './reducer';
import { getUserDetails } from "app/reducers/auth";
import Notifications from './Notifications';

function mapStateToProps(state) {
  return {
    messages: getMessages(state),
    unreadNotificationCount: getUnreadNotificationCount(state),
    pubnubKeys: getNotificationKeys(state),
    remainingMessages: getRemainingMessages(state),
    userId: getUserDetails(state).id //'2544153'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotifications: userId => dispatch(loadNotifications(userId)),
    loadMoreNotifications: userId => dispatch(loadMoreNotifications(userId)),
    addMessage: message => dispatch(addMessage(message)),
    fetchPubnubKeys: userId => dispatch(fetchPubnubKeys(userId)),
    markNotificationRead: userId => dispatch(markNotificationRead(userId)),
  };
}

const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Notifications));

export default {
  container
};
