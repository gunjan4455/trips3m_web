import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Tnc from './index';

configure({ adapter: new Adapter() });

const shallowWrapperTnC = () => {
  return shallow(<Tnc />);
};

describe('TnC module', () => {
  it('should render correctly', () => {
    const wrapper = shallowWrapperTnC();
    expect(wrapper).toMatchSnapshot();
  });
});
