import notifications, { parseNotifications } from './reducer';

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

describe('comparePackages reducer', () => {
  const initialState = {
    notifications: [],
    offset: 0,
    remainingMessages: 0,
    chatKeys: {
      loaded: false,
      loading: false,
    }
  };

  it('initializes with default state', () => {
    expect(notifications(initialState, {})).toEqual(initialState);
  });

  it('checks if `notifications load success` is working as expected', () => {

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
        unreadNotificationsCount: 0,
        totalNotificationsCount: 1,
        notifications: [
          {
            id: 76892310,
            createdAt: '2019-02-06T16:53:01+05:30',
            message: 'Agent Wander Globe Inc has sent an invoice of ₹ 76929.0 due on 2019-02-06 16:52:58 +0530. Please verify the payment schedule & contact your agent in case of queries.',
            notificationCategory: 'Hot Follow Up',
            notificationSubCategory: 'invoice_added',
            extraInfo: {
              userInfo: {
                userId: 166138,
                firstName: 'Wander Globe Inc',
                lastName: '',
                emailId: 'wanderglobedelhi@gmail.com',
                phoneNo: '9890676656',
                role: null,
                pic: 'https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_630/https://dknfdeb8v69ms.cloudfront.net/attachments/users/166138/original/shibani.jpg',
                chatChannel: 'notification_166138'
              },
              actionableData: {
                invoiceId: 188395
              },
              url: 'http://bookings-qa1.ttdev.in/requested_trips/3918699',
              deepLink: 'https://bookings-qa1.ttdev.in/handle_link_authentication?new_page=https%3A%2F%2Fbookings-qa1.ttdev.in%2Finvoice%2Fdownload%2F188395&token=tJYWTm43KcQcDBhCYD2HbUrGyInBAHIKufilVtQ%2FrAA%3D&cta_role=traveller&utm_nooverride=1&tt_mailer=3',
              tripId: 3918699,
              tripStatus: 'In Progress',
              tripRatingColor: 'blue-text',
              quoteId: 7124252,
              quoteUrl: 'http://bookings-qa1.ttdev.in/Goa/package/7124252?new_layout_version=true&trip_id=3918699',
              travellerInfo: {
                callingName: 'Palvi'
              },
              notificationTitle: 'Invoice uploaded for Goa!'
            },
            read: null
          }
        ]
      },
      code: 200,
      errorDetails: [],
      errors: []
    };
    const notificationsData = parseNotifications(serverResponse.data.notifications);

    const expectedData = {
      chatKeys: {
        loaded: false,
        loading: false,
      },
      loading: false,
      loaded: true,
      notifications: notificationsData,
      displayMessages: notificationsData.splice(0, 4),
      unreadCount: serverResponse.data.unreadNotificationsCount,
      errors: null,
      remainingMessages: -3,
      lastIndex: 4,
      offset: 4,
    };

    expect(notifications(initialState, { type: LOAD_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });
});
