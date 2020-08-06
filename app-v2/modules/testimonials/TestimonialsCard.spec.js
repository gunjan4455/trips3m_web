import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TestimonialsCard from './TestimonialsCard';
import ShowMore from 'modules/shared/ShowMore';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  testimonialBody: '',
  title: '',
  rating: 3,
  id: 2766,
  location: {
    query: {}
  },
  destination: '',
  params: {},
};

const shallowWrapperTestimonial = props => {
  return shallow(<TestimonialsCard {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperTestimonial(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render proper title when title not passed', () => {
    const wrapper = shallowWrapperTestimonial(props);
    expect(wrapper.find('._title').text()).toEqual('');
  });

  it('should render proper title when title passed', () => {
    props.title = 'Trip to Kerala';
    const wrapper = shallowWrapperTestimonial(props);
    expect(wrapper.find('._title').text()).toEqual('Trip to Kerala');
  });

});
