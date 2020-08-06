import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteListModal from './QuoteListModal';

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
  location: {
    search: {}
  }
};

const shallowWrapperQuoteListModal = (props) => {
  return shallow(<QuoteListModal {...props} />);
};

describe('QuoteListModal: Render Correctly ', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrapperQuoteListModal(props);

    expect(wrapper).toMatchSnapshot();
  });
});
