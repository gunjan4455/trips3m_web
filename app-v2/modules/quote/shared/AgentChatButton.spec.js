import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import AgentChatButton from './AgentChatButton';
import { DefaultIcon } from 'helpers/Icon/Icon';

configure({ adapter: new Adapter() });

const shallowWrappperAgentChatButton = (props) => {
  return shallow(<AgentChatButton {...props} />);
};

const DEFAULT_PROPS = {
  name: 'Chat',
  showIcon: false,
  handleChatClick: jest.fn,
  textClassName: 'sfc1'
};

describe('AgentChatButton: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperAgentChatButton(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show default icon when showIcon props is given', () => {
    props.showIcon = true;
    const wrapper = shallowWrappperAgentChatButton(props);
    expect(wrapper).toMatchSnapshot();
  });

});
