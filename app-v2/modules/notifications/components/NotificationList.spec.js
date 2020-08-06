import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import NotificationList from './NotificationList';

configure({ adapter: new Adapter() });

const mockLoadMoreNotifications = jest.fn();
const DEFAULT_PROPS = {
  messages: [],
  notificationsPresent: false,
  loadMoreNotifications: mockLoadMoreNotifications,
  userId: 0
};

const MESSAGES_ARRAY = [
  {
    id: 76892310,
    text: 'Agent Wander Globe Inc has sent an invoice of ₹ 76929.0 due on 2019-02-06 16:52:58 +0530. Please verify the payment schedule & contact your agent in case of queries.',
    url: 'http://bookings-qa1.ttdev.in/requested_trips/3918699',
    imageUrl: 'https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_630/https://dknfdeb8v69ms.cloudfront.net/attachments/users/166138/original/shibani.jpg',
    time: '2019-02-06T16:53:01+05:30',
    name: 'Wander Globe Inc'
  },
  {
    id: 76878268,
    text: 'Thank you for your payment of ₹ 8310.0 for your trip to Kerala!',
    url: 'http://payments-bookings-qa1.ttdev.in/requested_trips/3918943',
    imageUrl: '/pics/large/missing.png',
    time: '2019-01-23T17:05:52+05:30',
    name: ''
  },
  {
    id: 76878265,
    text: 'You have received new messages from Damini Oberoi. Reply now and book your next awesome holiday today!',
    url: 'http://payments-bookings-qa1.ttdev.in/requested_trips/3918943',
    imageUrl: '/pics/large/missing.png',
    time: '2019-01-23T17:05:49+05:30',
    name: 'Damini'
  },
  {
    id: 76878264,
    text: 'Check out what the app has in store for you during your trip.',
    url: 'http://payments-bookings-qa1.ttdev.in/requested_trips/3918943',
    imageUrl: '/pics/large/missing.png',
    time: '2019-01-23T17:05:47+05:30',
    name: null
  },
  {
    id: 76878203,
    text: 'Agent Nirvaana Holidays has sent an invoice of ₹ 23310.0 due on 2019-01-23 16:36:40 +0530. Please verify the payment schedule & contact your agent in case of queries.',
    url: 'http://bookings-qa2.ttdev.in/requested_trips/3918943',
    imageUrl: '/pics/large/missing.png',
    time: '2019-01-23T16:36:44+05:30',
    name: 'Nirvaana Holidays'
  }
];

const mountWrappperNotificationList = (props) => {
  return mount(<NotificationList {...props} />);
};

describe('NotificationList: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = mountWrappperNotificationList(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show Load More Notifications', () => {
    props.messages = MESSAGES_ARRAY;
    props.notificationsPresent = true;

    const wrapper = mountWrappperNotificationList(props);
    expect(wrapper.find('.cursorP').text()).toEqual("Load More Notification");
  });

  it('should show message when notfications is not there', () => {
    props.messages = [];

    const wrapper = mountWrappperNotificationList(props);
    expect(wrapper.text()).toEqual("All caught up! You have no notifications.");
  });

  it('should show discounted price', () => {
    props.messages = MESSAGES_ARRAY;
    props.notificationsPresent = true;

    const wrapper = mountWrappperNotificationList(props);
    wrapper.find('.cursorP').simulate('click');
    expect(mockLoadMoreNotifications).toHaveBeenCalledTimes(1);
  });

});
