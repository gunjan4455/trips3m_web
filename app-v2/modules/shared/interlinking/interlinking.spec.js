import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Interlinking from './index.js';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  footerLinks: []
};

const shallowWrapperInterlinking = (props) => {
  return shallow(<Interlinking {...props} />);
};

describe('Interlinking', () => {

  let props = { ...DEFAULT_PROPS };

  it('should render correctly', () => {
    const wrapper = shallowWrapperInterlinking(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when footerLinks has data', () => {
    props = {
      footerLinks: [
        { name: 'Property Types in Bali',
          footerLinks: [
            {name: 'Hotels in Bali', url: ''},
            { name: 'Guest Houses in Bali',  url: ''}
          ]
        }
      ]
    };
    const wrapper = shallowWrapperInterlinking(props);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h3').text()).toEqual('Property Types in Bali');
    expect(wrapper.contains('.overflowXscroll'));
  });

});