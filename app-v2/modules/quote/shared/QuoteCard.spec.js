import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteCard from './QuoteCard';
import { DefaultIcon } from 'helpers/Icon/Icon';
import ShowMore from 'modules/shared/ShowMore';

configure({ adapter: new Adapter() });

const shallowWrappperQuoteCard = (props) => {
  return shallow(<QuoteCard {...props} />);
};

const DEFAULT_PROPS = {
  heading: 'This is test heading',
  text: `This is test data`,
  section: 'test-section',
  trackSegment: jest.fn
};

describe('QuoteCard: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperQuoteCard(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render ShowMore when text is less than 200', () => {
    props.showIcon = true;
    const wrapper = shallowWrappperQuoteCard(props);
    expect(wrapper.find(ShowMore)).toHaveLength(0);
  });

  it('should render ShowMore when text is greater than 200', () => {
    props.text = `This is test data. This is test data. This is test data. This is test data.
  This is test data. This is test data. This is test data. This is test data.
  This is test data. This is test data. This is test data.`;

    const wrapper = shallowWrappperQuoteCard(props);
    expect(wrapper.find(ShowMore)).toHaveLength(1);
  });
});
