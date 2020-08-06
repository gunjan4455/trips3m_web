import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Link } from 'react-router-dom';

import TravelerReview from './TravelerReview';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  testimonials: [{
    "id": 71334,
    "quote": {
      "id": 10367081,
      "cities": ["Kuta", "Bali"],
      "start_date": "2019-09-24",
      "adult": 2,
      "child": 0,
      "days": 6
    },
    "author": {
      "author_name": "Ashish Sharma",
      "author_pic": null,
      "designation": null,
      "message": null,
      "user_location": "Delhi, India"
    },
    "title": "Ashish's 6 days trip to Bali",
    "body": "1) 1st hotel was not having double bed...2 beds were joined to make it for us couple.\r\n2) 2nd hotel was told to us as villa, but as a surprise it was again hotel only.\r\n3) we were not told water sport activities will be self paid.\r\n4) A dinner was arranged at last day in package, disappointing us again as it was buffet.\r\n5) Driver only left us only at destination, didnt guide us anywhere.\n1) Self exploration of the places.\r\n2) self paid water sport.\r\n3) hotel pool and services were fantastic.",
    "rating": 3,
    "created_at": "2019-10-01T21:39:10+05:30",
    "last_updated": "2019-10-01T21:39:10+05:30"
  }],
  "pagination": {}
};

const shallowWrapperCard = props => {
  return shallow(<TravelerReview {...props} />);
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

  // it('should have length 1', () => {
  //   const wrapper = shallowWrapperCard(props);
  //   expect(wrapper.find(TestimonialsUser)).toHaveLength(1);
  // });
  //
  // it('should pass proper rating in testimonials card', () => {
  //   const wrapper = shallowWrapperCard(props);
  //   expect(wrapper.find(TestimonialsCard).prop('rating')).toBe(props.testimonials[0].rating);
  // });
  //
  // it('should not render agent comment', () => {
  //   const wrapper = shallowWrapperCard(props);
  //   expect(wrapper.find('.at_agentComment').exists()).toBeFalsy();
  // });
  //
  // it('should render agent comment', () => {
  //   props.testimonials[0].agentComment = {
  //     title: 'Trip to Himachal',
  //     body: "It's good",
  //     designation: 'Travel Agent',
  //   };
  //   const wrapper = shallowWrapperCard(props);
  //   expect(wrapper.find('.at_agentComment').text()).toEqual('Trip to Himachal');
  // });

});
