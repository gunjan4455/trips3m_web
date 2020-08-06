import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PriceSuffix from './PriceSuffix';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  suffix: 'per person',
};

const shallowWrappperPriceSuffix = (props) => {
  return shallow(<PriceSuffix {...props} />);
};

describe('Price Suffix: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperPriceSuffix(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ` /person` for suffix `per person`', () => {
    const wrapper = shallowWrappperPriceSuffix(props);
    expect(wrapper.text()).toEqual(' /person');
  });

  it('should render ` total` for suffix `total or blank`', () => {
    props.suffix = '';
    const wrapper = shallowWrappperPriceSuffix(props);
    expect(wrapper.text()).toEqual(' total');
  });
});
