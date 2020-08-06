import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import QuotePrice from './QuotePrice';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  price: 121212,
  currency: 'Rupee',
  perPerson: 'per person',
  discount: 0,
  hasDiscountApplied: false
};

const mountWrappperQuotePrice = (props) => {
  return mount(<QuotePrice {...props} />);
};

describe('Quote Price: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = mountWrappperQuotePrice(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should covert to correct price', () => {
    const wrapper = mountWrappperQuotePrice(props);
    expect(wrapper.text()).toEqual("₹121,212 /person");
  });

  it('should show total quote price', () => {
    props.perPerson = 'total';

    const wrapper = mountWrappperQuotePrice(props);
    expect(wrapper.text()).toEqual("₹121,212 total");
  });

  it('should show discounted price', () => {
    props.discount = 1212;
    props.hasDiscountApplied = true;
    props.perPerson = null;

    const wrapper = mountWrappperQuotePrice(props);
    expect(wrapper.text()).toEqual("₹121,212₹120,000 total");
  });

});
