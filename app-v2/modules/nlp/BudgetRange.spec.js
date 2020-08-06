import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BudgetRange from './BudgetRange';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "priceMax": 142767,
  "priceMin": 55152,
}

const shallowWrapper = (props) => {
  return shallow(<BudgetRange {...props} />);
}

describe('BudgetRange Module', () => {
  let props = { ...DEFAULT_PROPS };

  it('should render correctly', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct range', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper.find('.at_nurthringRange').text()).toEqual("₹55,152 - ₹142,767");
  });
});
