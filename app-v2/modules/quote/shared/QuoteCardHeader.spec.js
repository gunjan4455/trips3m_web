import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteCardHeader from './QuoteCardHeader';

configure({ adapter: new Adapter() });

const shallowWrappperQuoteCardHeader = (props) => {
  return shallow(<QuoteCardHeader {...props} />);
};

const DEFAULT_PROPS = {
  heading: 'Test Heading',
  chatButtonName: 'Chat',
  handleChatClick: jest.fn
};

describe('QuoteCardHeader: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperQuoteCardHeader(props);
    expect(wrapper).toMatchSnapshot();
  });
});
