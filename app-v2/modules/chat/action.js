import { chatKeysUrl, commentsHistoryUrl, commentCreateUrl } from 'helpers/urlHelpers';
import config from 'appConfig';

export const FETCH_CHAT_KEYS_LOAD = 'chat/fetch_chat_keys_load';
export const FETCH_CHAT_KEYS_SUCCESS = 'chat/fetch_chat_keys_success';
export const FETCH_CHAT_KEYS_FAIL = 'chat/fetch_chat_keys_fail';

export const FETCH_HISTORY_LOAD = 'chat/fetch_HISTORY_load';
export const FETCH_HISTORY_SUCCESS = 'chat/fetch_HISTORY_success';
export const FETCH_HISTORY_FAIL = 'chat/fetch_HISTORY_fail';

export const LOAD_MORE_MESSAGES = 'chat/load_more_messages_load';
export const LOAD_MORE_MESSAGES_SUCCESS = 'chat/load_more_messages_success';
export const LOAD_MORE_MESSAGES_FAIL = 'chat/load_more_messages_fail';

export const CREATE_COMMENT_LOAD = 'chat/CREATE_COMMENT_load';
export const CREATE_COMMENT_SUCCESS = 'chat/CREATE_COMMENT_success';
export const CREATE_COMMENT_FAIL = 'chat/CREATE_COMMENT_fail';

export const ADD_MESSAGE = 'chat/add_message';
export const CLEAR_CHAT_MESSAGES = 'chat/clear_chat_messages';

export const fetchChatKeys = (userId, quoteId) => {
  if (userId) {
    return {
      types: [FETCH_CHAT_KEYS_LOAD, FETCH_CHAT_KEYS_SUCCESS, FETCH_CHAT_KEYS_FAIL],
      promise: client => client.get(chatKeysUrl(userId), {
        params: { quoteId },
        hostType: config.apiEndpoints.chatKeys.host
      }),
      withoutCamelCasing: false
    };
  }
  return {
    type: FETCH_CHAT_KEYS_FAIL
  };
};

export const fetchHistory = (tripId, quoteId) => (dispatch) => {
  dispatch({
    types: [FETCH_HISTORY_LOAD, FETCH_HISTORY_SUCCESS, FETCH_HISTORY_FAIL],
    promise: client => client.get(`${commentsHistoryUrl(tripId, quoteId)}`, {
      params: {
        limit: 10,
        offset: 0,
      },
      hostType: config.apiEndpoints.commentsHistory.host
    }),
    withoutCamelCasing: false
  });
};

export const loadMoreMessages = (tripId, quoteId) => (dispatch, getState) => {
  const state = getState();
  const remainingMessages = (state.chat && state.chat.remainingMessages) || 0;
  const offset = state.chat && state.chat.offset;
  let limit = 0;
  if (remainingMessages) {
    limit = 10;
  }

  dispatch({
    types: [LOAD_MORE_MESSAGES, LOAD_MORE_MESSAGES_SUCCESS, LOAD_MORE_MESSAGES_FAIL],
    promise: client => client.get(`${commentsHistoryUrl(tripId, quoteId)}`, {
      params: {
        offset,
        limit
      },
      hostType: config.apiEndpoints.commentsHistory.host
    }),
    withoutCamelCasing: false
  });
};

export const addMessage = (message, quoteId) => (dispatch) => {
  message = (typeof message === 'string') ? JSON.parse(message) : message;

  if (message.commentable_id === quoteId
    && message.commentable_type === 'Quote') {
    dispatch({
      type: ADD_MESSAGE,
      message
    });
  }
};

export const createComment = (tripId, quoteId, messageObj) => (dispatch, getState) => {
  dispatch({
    types: [CREATE_COMMENT_LOAD, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAIL],
    promise: client => client.post(`${commentCreateUrl(tripId, quoteId)}`, {
      params: {
        user_platform: 'Not_mobile',
        comment: {
          title: 'h',
          comment: messageObj.comment,
        }

      },
      hostType: config.apiEndpoints.commentCreate.host
    }),
    withoutCamelCasing: false
  });
};

export const clearMessages = () => ({
  type: CLEAR_CHAT_MESSAGES,
});
