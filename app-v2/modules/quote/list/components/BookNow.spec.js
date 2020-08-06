import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BookNow from './BookNow';

configure({ adapter: new Adapter() });

const MockcloseModal = jest.fn();
const MockbookNow = jest.fn();

const DEFAULT_PROPS = {
  closeModal: MockcloseModal,
  bookNow: MockbookNow,
  agent: {
    name: 'xyz'
  },
  priceInfo: {
    price: 31500
  },
};

const shallowWrapperQuotesBox = (props) => {
  return shallow(<BookNow {...props} />);
};

describe('Quote module', () => {
  let props = DEFAULT_PROPS;

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should closemodal function call ', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.find('.at_closeModal').simulate('click');
    expect(MockcloseModal).toHaveBeenCalled();
  });

  it('should bookNow function call ', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    wrapper.find('.at_continue').simulate('click');
    expect(MockbookNow).toHaveBeenCalled();
  });

  it('should at_agentInfo class text correct', () => {
    const wrapper = shallowWrapperQuotesBox(props);
    expect(wrapper.find('.at_agentInfo').text())
    .toBe('You are booking quote by Agent xyz priced at 31500 ( total).')
  });

  it('should at_agentInfo class text correct when per person is defined in priceInfo', () => {
    props.priceInfo.perPerson = 'per person';
    const wrapper = shallowWrapperQuotesBox(props);
    expect(wrapper.find('.at_agentInfo').text())
    .toBe('You are booking quote by Agent xyz priced at 31500 (per person).')
  });

});
