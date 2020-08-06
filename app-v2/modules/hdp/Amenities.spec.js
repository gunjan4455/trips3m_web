import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

import Amenities from './Amenities';

configure({ adapter: new Adapter() });

describe('Amenities Component', () => {
  it('should display heading title with at hotel name', () => {
    const props = {
      amenitiesData:{
        tags:[{text:'tags',id:1}],
        title:'sample title'
      },
      hotelDisplayName:'hotel name'
    }
    const wrapper = mount(<Amenities {...props} />);
    expect(wrapper.find('h2').text()).toEqual('sample title at hotel name');
  });

  it('should display heading title without at hotel name', () => {
    const props = {
      amenitiesData:{
        tags:[{text:'tags',id:1}],
        title:'sample title'
      }
    }
    const wrapper = mount(<Amenities {...props} />);
    expect(wrapper.find('h2').text()).toEqual('sample title');
  });

});
