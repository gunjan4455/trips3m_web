import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import EditPreferencesPopup from './EditPreferencesPopup';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  opDetails: {}
};

const editPreferenceMsg = 'To edit your preferences, kindly connect with your trip guide';

const shallowWrapperEditPreferencesPopup = (props) => {
  return shallow(<EditPreferencesPopup {...props} />);
};

describe('EditPreferencesPopup module', () => {
  let props = DEFAULT_PROPS;

  afterEach(() => {
    props = { ...DEFAULT_PROPS, opDetails: { ...DEFAULT_PROPS.opDetails } };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperEditPreferencesPopup(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct message at at_msg class', () => {
    const wrapper = shallowWrapperEditPreferencesPopup(props);
    expect(wrapper.find('.at_msg').text()).toBe(editPreferenceMsg);
  });

  it('should render correct message at at_msg class', () => {
    props.opDetails.phoneNo = '123';
    props.opDetails.name = 'abc';
    const wrapper = shallowWrapperEditPreferencesPopup(props);
    expect(wrapper.find('.at_msg').text()).toBe(`${editPreferenceMsg}- abc (123)`);
  });

  it('should render correct message at at_msg class', () => {
    props.opDetails.name = 'abc';
    const wrapper = shallowWrapperEditPreferencesPopup(props);
    expect(wrapper.find('.at_msg').text()).toBe(`${editPreferenceMsg}- abc`);
  });

  it('should render cancel button when phoneNo in opdetails', () => {
    const wrapper = shallowWrapperEditPreferencesPopup(props);
    expect(wrapper.find('button').exists()).toBeFalsy();
  });

  it('should render cancel button when phoneNo in opdetails', () => {
    props.opDetails.phoneNo = '123';
    props.opDetails.name = 'abc';
    const wrapper = shallowWrapperEditPreferencesPopup(props);
    expect(wrapper.find('button').exists()).toBeTruthy();
  });

});
