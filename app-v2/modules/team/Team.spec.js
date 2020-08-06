import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Team from './Team';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  location:{
    pathname: "/team"
  }
}

const shallowWrapperTeam = (props) => {
  return shallow(<Team {...props} />);
};

describe('team module', () => {

  it('should render correctly', () => {
    const wrapper = shallowWrapperTeam(DEFAULT_PROPS);
    expect(wrapper).toMatchSnapshot();
  });
});
