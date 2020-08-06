import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

import DiningCuisine from './DiningCuisine';

configure({ adapter: new Adapter() });

describe('DiningCuisine Component', () => {
  it('should display heading title with at heading', () => {
    const props = {
      cuisine:{

      },
      hotelDisplayName:'hotel name'
    }
    const wrapper = shallow(<DiningCuisine {...props} />);
    expect(wrapper.find('h2').text()).toEqual('Dining & Cuisine at hotel name');
  });

  it('should display heading title without hotel name', () => {
    const props = {
      cuisine:{

      }
    }
    const wrapper = shallow(<DiningCuisine {...props} />);
    expect(wrapper.find('h2').text()).toEqual('Dining & Cuisine');
  });

});
