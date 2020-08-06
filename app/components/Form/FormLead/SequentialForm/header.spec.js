import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Header from './header';

configure({ adapter: new Adapter() });

const shallowWrapperHeader = (props) => {
  return shallow(<Header {...props} />);
};
const DEFAULT_PROPS = {};

describe('lead form Header module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperHeader(props);
    expect(wrapper).toMatchSnapshot();
  });
});
