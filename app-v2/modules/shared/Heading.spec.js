import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

import Heading from './Heading';

configure({ adapter: new Adapter() });

describe('Heading Component', () => {
  it('should displays heading title with for hotel name', () => {
    const props = {
      data:{
        title: 'sample title',
        forHeading: 'hotel name'
      }
    }
    const wrapper = shallow(<Heading {...props} />);
    expect(wrapper.find('h2').text()).toEqual('sample title for hotel name');
  });

  it('should displays heading title without for hotel name', () => {
    const props = {
      data:{
        title: 'sample title'
      }
    }
    const wrapper = shallow(<Heading {...props} />);
    expect(wrapper.find('h2').text()).toEqual('sample title');
  });

});
