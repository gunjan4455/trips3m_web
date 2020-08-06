import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ContactUs from './ContactUs';

configure({ adapter: new Adapter() });

const shallowWrapperContactUS = () => {
  return shallow(<ContactUs />);
};

describe('ContactUs module', () => {
  it('should render correctly', () => {
    const wrapper = shallowWrapperContactUS();
    expect(wrapper).toMatchSnapshot();
  });
});
