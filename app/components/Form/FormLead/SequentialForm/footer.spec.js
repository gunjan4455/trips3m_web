import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Footer from './footer';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "goBackDisabled": true,
  "goNextDisabled": true,
  "isLastSlide": false,
  "goBack": jest.fn,
  "goForward" : jest.fn
};

const shallowWrapperFooter = (props) => {
  return shallow(<Footer {...props} />);
};

describe('lead form footer module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperFooter(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('When goBackDisabled is false', () => {
    props.goBackDisabled = false;
    const wrapper = shallowWrapperFooter(props);
  });

  it('When goNextDisabled is false', () => {
    props.goNextDisabled = false;
    const wrapper = shallowWrapperFooter(props);
  });
});
