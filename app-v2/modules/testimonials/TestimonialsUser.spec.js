import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TestimonialsUser from './TestimonialsUser';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  author: {},
  lastUpdated: '',
  params: { },
};

const shallowWrapperTestimonialsUser = props => {
  return shallow(<TestimonialsUser {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperTestimonialsUser(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render proper name', () => {
    const wrapper = shallowWrapperTestimonialsUser(props);
    expect(wrapper.find('._name').text()).toEqual('Anonymous');
  });

  it('should render proper name when name passed in props', () => {
    props.author.authorName = 'prashant';
    const wrapper = shallowWrapperTestimonialsUser(props);
    expect(wrapper.find('._name').text()).toEqual('prashant');
  });

  it('should render proper info when last updated not passed in  props', () => {
    const wrapper = shallowWrapperTestimonialsUser(props);
    expect(wrapper.find('._userInfo').text()).toEqual('');
  });
});
