import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Index from './index';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  richText: 'Honeymoon in Kerala',
  rating: 4,
  reviews: 3245,
  startingPrice: 9600,
  heading: ''
};

const shallowWrapper = (props) => {
  return shallow(<Index {...props} />);
};

describe('PackageHeading', () => {
  let props = { ...DEFAULT_PROPS };
  let wrapper = shallowWrapper(props);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render text correctly', () => {
    expect(wrapper.text()).toEqual('Honeymoon in Kerala: rated 4/5 (based on 3245 reviews) | Packages starting from ₹9,600/-');
  });

  it('should render text correctly when there is no starting price', () => {
    props = {
      heading: '',
      richText: '',
      rating: 4,
      reviews: 3245,
      startingPrice: null
    };
    wrapper = shallowWrapper(props);
    expect(wrapper.text()).toEqual('Rated 4/5 (based on 3245 reviews)');
  });

});
