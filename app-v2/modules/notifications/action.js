import { notificationKeysUrl, notificationsPath, notificationsReadPath } from 'helpers/urlHelpers';
import config from 'appConfig';

// Action constants
export const LOAD = 'notifications/LOAD';
export const LOAD_SUCCESS = 'notifications/LOAD_SUCCESS';
export const LOAD_FAIL = 'notifications/LOAD_FAIL';

export const PUBNUB_KEYS_LOAD = 'notifications/pubnubKeys/LOAD';
export const PUBNUB_KEYS_LOAD_SUCCESS = 'notifications/pubnumKeys/LOAD_SUCCESS';
export const PUBNUB_LOAD_FAIL = 'notifications/pubnubKeys/LOAD_FAIL';

export const LOAD_MORE_MESSAGES = 'notifications/LOAD_MORE_MESSAGES';
export const ADD_MESSAGE = 'notifications/ADD_MESSAGE';

export const NOTIFICATIONS_READ_LOAD = 'notifications/NOTIFICATIONS_READ_LOAD';
export const NOTIFICATIONS_READ_LOAD_SUCCESS = 'notifications/notification_read_load_success';
export const NOTIFICATIONS_READ_LOAD_FAIL = 'notifications/notificatioins_read';

export const LOAD_MORE_MESSAGES_LOAD = 'notification/load_more_notifications_load';
export const LOAD_MORE_MESSAGES_SUCCESS = 'notification/load_more_notification_success';
export const LOAD_MORE_MESSAGES_FAIL = 'notification/load_more_notification_fail';

// Action creators

export const fetchPubnubKeys = userId => ({
  types: [PUBNUB_KEYS_LOAD, PUBNUB_KEYS_LOAD_SUCCESS, PUBNUB_LOAD_FAIL],
  promise: client => client.get(notificationKeysUrl(userId), {
    params: { userId },
    hostType: config.apiEndpoints.notificationKeys.host
  }),
  withoutCamelCasing: false
});

export const loadNotifications = userId => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get(notificationsPath(userId), {
    hostType: config.apiEndpoints.notifications.host
  }),
  withoutCamelCasing: false
});

export const loadMoreNotifications = (userId) => (dispatch, getState) => {
  const state = getState();
  const offset = state.notifications.offset;
  dispatch({
    types: [LOAD_MORE_MESSAGES_LOAD, LOAD_MORE_MESSAGES_SUCCESS, LOAD_MORE_MESSAGES_FAIL],
    promise: client => client.get(notificationsPath(userId), {
      params: {
        limit: 4,
        offset
      },
      hostType: config.apiEndpoints.notifications.host
    }),
    withoutCamelCasing: false
  });
};

export const addMessage = message => ({
  type: ADD_MESSAGE,
  message
});

export const markNotificationRead = userId => ({
  types: [NOTIFICATIONS_READ_LOAD, NOTIFICATIONS_READ_LOAD_SUCCESS, NOTIFICATIONS_READ_LOAD_FAIL],
  promise: client => client.post(notificationsReadPath(userId), {
    hostType: config.apiEndpoints.notificationsRead.host
  })
});
