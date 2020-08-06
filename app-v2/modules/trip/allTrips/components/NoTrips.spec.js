import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NoTrips from './NoTrips';

configure({ adapter: new Adapter() });

const shallowWrapperNoTrips = () => {
  return shallow(<NoTrips />);
};

describe('All Trips NavBar component', () => {

  it('should render correctly', () => {
    const wrapper = shallowWrapperNoTrips();
    expect(wrapper).toMatchSnapshot();
  });

});
