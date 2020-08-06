import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Filters from './Filters';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  initialFilters: [],
};

const shallowWrapperFilter = props => {
  return shallow(<Filters {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperFilter(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render proper filter length', () => {
    const wrapper = shallowWrapperFilter(props);
    expect(wrapper.find('.at_filterlength').text()).toEqual('0 selected');
  });

  it('should render proper filter length', () => {
    props.initialFilters.push(4);
    const wrapper = shallowWrapperFilter(props);
    expect(wrapper.find('.at_filterlength').text()).toEqual('1 selected');
  });
});
