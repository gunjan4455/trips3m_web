import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount} from 'enzyme';

import HotelReview from './HotelReview';

configure({ adapter: new Adapter() });

describe('HotelReview Component', () => {
  it('should display heading title with for heading', () => {
    const props = {
      testimonials:{
        title:'title'
      },
      hotelDisplayName:'hotel name',
      testimonialChangeHandler: jest.fn()
    }
    const wrapper = mount(<HotelReview {...props} />);
    expect(wrapper.find('h2').text()).toEqual('title for hotel name');
  });

  it('should display heading title without for heading', () => {
    const props = {
      testimonials:{
        title:'title'
      },
      hotelDisplayName:'',
      testimonialChangeHandler: jest.fn()
    }
    const wrapper = mount(<HotelReview {...props} />);
    expect(wrapper.find('h2').text()).toEqual('title');
  });

});
