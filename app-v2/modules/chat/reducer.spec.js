import chat from './reducer';

import {
  FETCH_CHAT_KEYS_SUCCESS,
  ADD_MESSAGE,
  CLEAR_CHAT_MESSAGES
} from './action';

describe('comparePackages reducer', () => {
  const initialState = {
    chatKeys: {
      loaded: false,
      loading: false,
      keys: {}
    },
    messages: [],
    remainingMessages: 0,
  };

  const message = {
    comment: 'Hi',
    commentBy: 'TRAVELLER',
    commentable_id: 7124217,
    commentable_type: 'Quote',
    createdAt: '2019-02-14T11:31:28.539Z',
    created_at: '2019-02-14T11:31:28+00:00',
    isPending: 0,
    notification_sub_category: 'comment_added',
    role: 'traveller',
    title: '#chat',
    trip_id: 3918699,
    uId: '25441531550143888541c1a5298f939e87e8f962a5edfc206918',
    userId: '2544153',
    user_id: '2544153'
  };

  it('initializes with default state', () => {
    expect(chat(initialState, {})).toEqual(initialState);
  });

  it('checks if `FETCH_CHAT_KEYS_SUCCESS` is working as expected', () => {

    const serverResponse = {
      status: {
        overrides: {
          forceLogout: false,
          forceUpdate: false,
          forcePasswordChange: false
        }
      },
      metaData: {
        offset: null,
        limit: null,
        sortBy: null,
        sortOrder: null,
        view: null
      },
      debugData: {},
      data: {
        config: {
          heartbeat: 20,
          heartbeatIntervals: 15,
          authKey: '75c8c3e8f48b11e88d3e0e3708a055f2',
          channels: {
            chat: 'notification_166138'
          }
        }
      },
      code: 200,
      errorDetails: [],
      errors: []
    };

    const expectedData = {
      chatKeys: {
        loaded: true,
        loading: false,
        keys: serverResponse.data.config,
      },
      messages: [],
      remainingMessages: 0
    };

    expect(chat(initialState, { type: FETCH_CHAT_KEYS_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });

  it('checks if `ADD_MESSAGE` is working as expected', () => {

    const expectedData = {
      messages: [message],
      chatKeys: {
        loaded: false,
        loading: false,
        keys: {}
      },
      remainingMessages: 0
    };

    expect(chat(initialState, { type: ADD_MESSAGE, message: message }))
      .toEqual(expectedData);
  });

  it('checks if `CLEAR_CHAT_MESSAGES` is working as expected', () => {

    const initialData = {
      messages: [message],
      chatKeys: {
        loaded: false,
        loading: false,
        keys: {}
      },
      remainingMessages: 0
    };

    const expectedData = {
      messages: [],
      chatKeys: {
        loaded: false,
        loading: false,
        keys: {}
      },
      remainingMessages: 0
    };

    expect(chat(initialData, { type: CLEAR_CHAT_MESSAGES, message: message }))
      .toEqual(expectedData);
  });
});
