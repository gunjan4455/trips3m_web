import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Chat from './Chat';
import { mountComponent } from 'helpers/jest';

configure({ adapter: new Adapter() });
let component;
const DEFAULT_PROPS = {
  chatKeys: {},
  messages: [],
  remainingMessages: 0,
  userDetails: {
    id: 2544153
  },
  pdmsInformation: {},
  currentTripId: 0,
  currentQuoteId: 0,
  agentId: 0,
  agentName: '',
  currentQuote: {
    destinationsList: []
  },
  fetchChatKeys: jest.fn,
  addMessage: jest.fn,
  clearMessages: jest.fn,
  createComment: jest.fn,
  fetchHistory: jest.fn,
  loadMoreMessages: jest.fn,
  showHidePdmView: jest.fn,
  location: { query: {} },
};

const createChatComponent = () => {
  return (<Chat {...DEFAULT_PROPS} />);
};

describe('Chat: Render Correctly ', () => {

  beforeAll(() => {
    const ChatComponent = createChatComponent();
    component = shallow(ChatComponent);
  });

  it('should match with the previous snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
