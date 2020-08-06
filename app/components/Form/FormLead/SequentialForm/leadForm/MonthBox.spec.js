import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import MonthBox from './MonthBox';

const mockOnClick = jest.fn();

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  onClick: mockOnClick
};
const shallowWrapperMonthBox = (props) => {
  return shallow(<MonthBox {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperMonthBox(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call _handleClick properly', () => {
    const wrapper = shallowWrapperMonthBox(props);
    wrapper.instance()._handleClick({});
    expect(mockOnClick).toHaveBeenCalledWith({});
  })
});
