import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QcpAsync from './QcpAsync';
import CompareQuotes from 'modules/quote/compare/quotes';
import QuoteList from 'modules/quote/compare/list';

configure({ adapter: new Adapter() });

const shallowWrappperQcp = (props) => {
  return shallow(<QcpAsync {...props} />);
};

const DEFAULT_PROPS = {
  location: {
    query: {}
  },
  params: {}
};

describe('QCp page', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS, location: DEFAULT_PROPS.location, query: DEFAULT_PROPS.location.query };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperQcp(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render quoteList when quoteids length in location is not equals to 2', () => {
    const wrapper = shallowWrappperQcp(props);
    expect(wrapper.find(QuoteList)).toHaveLength(1);
  });

  it('should render quoteList when quoteids length in location is not equals to 2', () => {
    props.location.query.quoteIds = ['3098'];
    const wrapper = shallowWrappperQcp(props);
    expect(wrapper.find(QuoteList)).toHaveLength(1);
  });

  it('should not render quoteList when quoteids length in location is equals to 2', () => {
    props.location.query.quoteIds = ['3098', '34566'];
    const wrapper = shallowWrappperQcp(props);
    expect(wrapper.find(QuoteList)).toHaveLength(0);
    expect(wrapper.find(CompareQuotes)).toHaveLength(1);
  });

});
