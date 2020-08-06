import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteDetailHeader from './QuoteDetailHeader';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  quotesList: [{
    id: 4918699,
    agent: {
      name: 'test'
    }
  }],
  currentQuoteId: 4918699,
  tripId: 3918699,
};

const shallowWrapperQuoteDetailHeader = (props) => {
  return shallow(<QuoteDetailHeader {...props} />);
};

describe('QuoteDetailHeader: Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrapperQuoteDetailHeader(props);

    expect(wrapper).toMatchSnapshot();
  });
});
