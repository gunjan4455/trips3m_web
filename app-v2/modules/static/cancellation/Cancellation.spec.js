import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Cancellation from './index';

configure({ adapter: new Adapter() });

const shallowWrapperCancellation = () => {
  return shallow(<Cancellation />);
};

describe('Cancellation module', () => {
  it('should render correctly', () => {
    const wrapper = shallowWrapperCancellation();
    expect(wrapper).toMatchSnapshot();
  });
});
