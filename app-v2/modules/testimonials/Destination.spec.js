import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Destination from './Destination';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials' },
  ]
};

const shallowWrapperDestination = props => {
  return shallow(<Destination {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperDestination(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render destinationDetail', () => {
    const wrapper = shallowWrapperDestination(props);
    expect(wrapper.find('.at_destinationDetail').exists()).toBeFalsy();
  });

  it('should render proper destinationDetail ', () => {
    props.breadcrumbs.push(
      { name: 'India', url: '' },
      { name: 'kerala', url: '/testimonials/kerala' },
    );
    const wrapper = shallowWrapperDestination(props);
    expect(wrapper.find('.at_destinationDetail').text()).toBe('India>kerala');
  });
});
