import {
  FETCH_CHAT_KEYS_LOAD,
  FETCH_CHAT_KEYS_SUCCESS,
  FETCH_CHAT_KEYS_FAIL,
  FETCH_HISTORY_LOAD,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAIL,
  LOAD_MORE_MESSAGES,
  LOAD_MORE_MESSAGES_SUCCESS,
  LOAD_MORE_MESSAGES_FAIL,
  CREATE_COMMENT_LOAD,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  ADD_MESSAGE,
  CLEAR_CHAT_MESSAGES
} from './action';

const initialState = {
  chatKeys: {
    loaded: false,
    loading: false,
    keys: {},
  },
  messages: [],
  remainingMessages: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHAT_KEYS_SUCCESS:
      return {
        ...state,
        chatKeys: {
          loaded: true,
          loading: false,
          keys: action.result.data.config,
        }
      };
    case ADD_MESSAGE:
      let msgObj = action.message;
      if (typeof msgObj === 'string') {
        try {
          msgObj = JSON.parse(action.message);
        }
        catch (e) {
          console.log(e);
        }
      }
      return {
        ...state,
        messages: [...state.messages, msgObj],
      };
    case FETCH_HISTORY_SUCCESS:
      const comments = [...action.result.data.comments];
      return {
        ...state,
        messages: [...comments.reverse(), ...state.messages],
        remainingMessages: action.result.data.totalComments - 10,
        offset: 10,
      };
    case LOAD_MORE_MESSAGES_SUCCESS:
      const new_comments = [...action.result.data.comments];
      return {
        ...state,
        messages: [...new_comments.reverse(), ...state.messages],
        remainingMessages: state.remainingMessages - 10,
        offset: state.offset + 10,
      };
    case CLEAR_CHAT_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
}

// Helper functions
export const getChatkeys = (state) => {
  if (state.chat.chatKeys.loaded) {
    return {
      publishKey: state.chat.chatKeys.keys.publishKey,
      subscribeKey: state.chat.chatKeys.keys.subscribeKey,
      channel: state.chat.chatKeys.keys.channels.chat,
      loaded: true,
    };
  }
  return {
    loaded: false
  };
};

export const getMessages = state => (
  state.chat.messages
);

export const getRemainingMessages = state => (
  state.chat && state.chat.remainingMessages
);
