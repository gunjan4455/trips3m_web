import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
  PUBNUB_KEYS_LOAD,
  PUBNUB_KEYS_LOAD_SUCCESS,
  PUBNUB_LOAD_FAIL,
  LOAD_MORE_MESSAGES,
  ADD_MESSAGE,
  NOTIFICATIONS_READ_LOAD,
  NOTIFICATIONS_READ_LOAD_SUCCESS,
  NOTIFICATIONS_READ_LOAD_FAIL,
  LOAD_MORE_MESSAGES_LOAD,
  LOAD_MORE_MESSAGES_SUCCESS,
  LOAD_MORE_MESSAGES_FAIL
} from './action';

const initialState = {
  notifications: [],
  offset: 0,
  remainingMessages: 0,
  chatKeys: {
    loaded: false,
    loading: false,
  }
};

function getUserName(notification) {
  let userName = '';

  if (notification.extraInfo && notification.extraInfo.userInfo) {
    userName = notification.extraInfo.userInfo.firstName ?
      notification.extraInfo.userInfo.firstName : notification.extraInfo.userInfo.emailId;
  }

  return userName;
}

export function parseNotifications(notifications = []) {
  return notifications.map(notification => ({
    id: notification.id,
    text: notification.message,
    url: notification.extraInfo && notification.extraInfo.url,
    imageUrl: notification.extraInfo && notification.extraInfo.userInfo
    && notification.extraInfo.userInfo.pic,
    time: notification.createdAt,
    name: getUserName(notification),
  }));
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_SUCCESS: {
      let notificationsData = [];
      if (action.result && action.result.data && action.result.data.notifications) {
        const notifications = action.result.data.notifications;

        notificationsData = parseNotifications(notifications);
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        notifications: notificationsData,
        displayMessages: notificationsData.splice(0, 4),
        unreadCount: action.result && action.result.data && action.result.data.unreadNotificationsCount,
        errors: null,
        remainingMessages: (action.result && action.result.data)
          ? action.result.data.totalNotificationsCount - 4
          : 0,
        lastIndex: 4,
        offset: 4,
      };
    }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.error && action.error.errors
      };
    case LOAD_MORE_MESSAGES_SUCCESS:
      let notificationsData = [];
      if (action.result && action.result.data && action.result.data.notifications) {
        const notifications = action.result.data.notifications;

        notificationsData = parseNotifications(notifications);
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        notifications: [...state.notifications, ...notificationsData],
        displayMessages: [...state.displayMessages, ...notificationsData],
        remainingMessages: state.remainingMessages - 4,
        errors: null,
        offset: state.offset + 4,
      };
    case LOAD_MORE_MESSAGES: {
      const indx = Math.min(state.notifications.length, state.lastIndex + 4);
      return {
        ...state,
        lastIndex: indx,
        displayMessages: state.notifications.splice(0, indx)
      };
    }
    case ADD_MESSAGE:
      if (!action.message) {
        return state;
      }
      console.log('Notification reducer', action.message);

      const msgObj = typeof action.message === 'string' ?
        JSON.parse(action.message) : action.message;
      const message = {
        id: msgObj.id,
        imageUrl: '',
        text: msgObj.message,
        time: msgObj.data && msgObj.data.time_of_view,
        url: msgObj.data && msgObj.data.url,
        name: msgObj.data && msgObj.data.user_info && msgObj.data.user_info.first_name,
      };
      return {
        ...state,
        notifications: [message, ...state.notifications],
        displayMessages: [message, ...state.displayMessages],
        lastIndex: state.lastIndex + 1,
        unreadCount: state.unreadCount + 1,
      };
    case PUBNUB_KEYS_LOAD_SUCCESS:
      return {
        ...state,
        chatKeys: {
          loaded: true,
          loading: false,
          keys: action.result.data.config,
        }
      };
    case NOTIFICATIONS_READ_LOAD_SUCCESS:
      return {
        ...state,
        unreadCount: 0,
      };
    default:
      return state;
  }
}

// Connect functions
export const getMessages = (state) => {
  return state.notifications.displayMessages || [];
};

export const getUnreadNotificationCount = (state) => {
  return state.notifications.unreadCount || 0;
};

export const getNotificationKeys = (state) => {
  try {
    return {
      channel: state.notifications.chatKeys.keys.channels.system,
      ...state.notifications.chatKeys.keys
    };
  } catch (e) {
    return {};
  }
};

export const getRemainingMessages = (state) => {
  return state.notifications.remainingMessages || 0;
};
