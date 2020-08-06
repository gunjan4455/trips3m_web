import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Link } from 'react-router-dom';

import ReviewCard from './ReviewCard';
import TestimonialsUser from './TestimonialsUser';
import TestimonialsCard from './TestimonialsCard';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  testimonials: [
    {
      id: 544,
      title: 'Trip to Uttarakhand',
      destination: 'Uttarakhand',
      body: 'I went to Dubai with my family of 5 adult',
      rating: 4,
      lastUpdated: '2013-11-14T16:25:17+05:30',
      author: {
        authorName: 'Mitika25',
        authorPic: '',
        designation: 'Student',
        userLocation: 'Delhi',
      },
      agentComment: {},
    },
  ],
  params: {},
  location: {}
};

const shallowWrapperCard = props => {
  return shallow(<ReviewCard {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperCard(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have length 1', () => {
    const wrapper = shallowWrapperCard(props);
    expect(wrapper.find(TestimonialsUser)).toHaveLength(1);
  });

  it('should pass proper rating in testimonials card', () => {
    const wrapper = shallowWrapperCard(props);
    expect(wrapper.find(TestimonialsCard).prop('rating')).toBe(props.testimonials[0].rating);
  });

  it('should not render agent comment', () => {
    const wrapper = shallowWrapperCard(props);
    expect(wrapper.find('.at_agentComment').exists()).toBeFalsy();
  });

  it('should render agent comment', () => {
    props.testimonials[0].agentComment = {
      title: 'Trip to Himachal',
      body: "It's good",
      designation: 'Travel Agent',
    };
    const wrapper = shallowWrapperCard(props);
    expect(wrapper.find('.at_agentComment').text()).toEqual('Trip to Himachal');
  });

});
