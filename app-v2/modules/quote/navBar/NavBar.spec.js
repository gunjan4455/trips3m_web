import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NavBar from './NavBar';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  // TODO: Rahul- Add options here
  options: [],
};

const shallowWrappperNavBar = (props) => {
  return shallow(<NavBar {...props} />);
};

describe('NavBar: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperNavBar(props);
    expect(wrapper).toMatchSnapshot();
  });

});
