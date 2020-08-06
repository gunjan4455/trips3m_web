import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ChatHeader from './ChatHeader';

configure({ adapter: new Adapter() });

const sendMessageMock = jest.fn();

const DEFAULT_PROPS = {
  chatKeys: {
    loaded: true,
    channel: 'Chat',
    publishKey: '12121',
    subscribeKey: '121212'
  },
  agentId: 1111111,
  agentName: 'Test',
  userDetails: {
    userId: 111111
  }
};

const shallowWrappperChatHeader = (props) => {
  return shallow(<ChatHeader {...props} />);
};

describe('ChatHeader: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperChatHeader(props);
    expect(wrapper).toMatchSnapshot();
  });

});
