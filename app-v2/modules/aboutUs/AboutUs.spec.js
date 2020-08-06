import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import AboutUs from './AboutUs';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  location: {
    pathname: '/team'
  }
};

const shallowWrapperAboutUS = (props) => {
  return shallow(<AboutUs {...props} />);
};

describe('about Us module', () => {

  it('should render correctly', () => {
    const wrapper = shallowWrapperAboutUS(DEFAULT_PROPS);
    expect(wrapper).toMatchSnapshot();
  });
});
