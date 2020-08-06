import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Privacy from './index';

configure({ adapter: new Adapter() });

const shallowWrapperPrivacy = () => {
  return shallow(<Privacy />);
};

describe('privacy module', () => {
  it('should render correctly', () => {
    const wrapper = shallowWrapperPrivacy();
    expect(wrapper).toMatchSnapshot();
  });
});
