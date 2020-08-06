import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BudgetBanner from './BudgetBanner';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "destination": "Kerala",
  "priceMax": 142767,
  "priceMin": 55152,
  "savePreferencesAndRedirect": () => {
  }
}

const shallowWrapper = (props) => {
  return shallow(<BudgetBanner {...props} />);
}

describe('BudgetBanner Module', () => {
  let props = { ...DEFAULT_PROPS };

  it('should render correctly', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct destination', () => {
    const wrapper = shallowWrapper(props);
    expect(wrapper.find('.at_nurturingDiv').text()).toMatch(/Kerala/);
  });
});
