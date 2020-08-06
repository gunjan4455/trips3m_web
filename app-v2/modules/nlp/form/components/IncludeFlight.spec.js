import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import IncludeFlight from './IncludeFlight';

configure({ adapter: new Adapter() });

const createShallowWrapper = (props) => {
  return shallow(<IncludeFlight {...props} />);
};

describe('Render Include Flight Component ', () => {

  it('should match with the previous snapshot', () => {
    const wrapper = createShallowWrapper();
    expect(FlightComponent).toMatchSnapshot();
  });

  it('should toggle state when input is changed ', () => {
    const wrapper = createShallowWrapper();
    const inputElement = wrapper.find('input');
    const prevValue = wrapper.state().value;
    inputElement.simulate('change');
    expect(wrapper.state().value).toEqual(!prevValue);
  });

});
