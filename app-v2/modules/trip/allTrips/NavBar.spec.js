import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NavBar from './NavBar';

configure({ adapter: new Adapter() });

const mockGoBack = jest.fn();
const DEFAULT_PROPS = {
  goBack: mockGoBack
};

const shallowWrapperNavBar = (props) => {
  return shallow(<NavBar {...props} />);
};

describe('All Trips NavBar component', () => {
  let props = {
    ...DEFAULT_PROPS,
  };
  afterEach(() => {
    props = {
      ...DEFAULT_PROPS,
    };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperNavBar(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call goBack when back button is clicked', () => {
    const wrapper = shallowWrapperNavBar(props);
    wrapper.find('.at_goback').simulate('click');
    expect(mockGoBack).toHaveBeenCalled();
  });
});
