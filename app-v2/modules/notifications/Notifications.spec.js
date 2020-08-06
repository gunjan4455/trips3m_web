import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Notifications from './Notifications';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  userId: '',
  unreadNotificationCount: 0,
  messages: [],
  remainingMessages: 0,

  loadMoreNotifications: jest.fn,
  addMessage: jest.fn,
  fetchNotifications: jest.fn,
  markNotificationRead: jest.fn,
};

const shallowWrappperNotifications = (props) => {
  return shallow(<Notifications {...props} />);
};

describe('Notifications: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
    jest.clearAllMocks();
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperNotifications(props);
    expect(wrapper).toMatchSnapshot();
  });

});
