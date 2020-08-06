import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';

import CallTripAdvisor from './CallTripAdvisor';

configure({ adapter: new Adapter() });
let component;

const DEFAULT_PROPS = {
  phoneNumber: '7777777777',
};

const shallowWrappperCallTripAdvisorComponent = (props) => {
  return shallow(<CallTripAdvisor {...props} />);
};

describe('Inclusions: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperCallTripAdvisorComponent(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have tel: in anchor', () => {
    const wrapper = shallowWrappperCallTripAdvisorComponent(props);
    expect(wrapper.find({ href: `tel:${props.phoneNumber}` })).toBeTruthy();
  });
});
