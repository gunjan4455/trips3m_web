import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Preferences from './Preferences';
import Request from './view/Request';
import TripPreferences from './view/TripPreferences';
import ContactDetails from './view/ContactDetails';
import { preferences } from './testData';
import { getContactPreferences, getRequestPreferences } from './helpers';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  currentTripId: 4982978,
  preferences: preferences,

};

const shallowWrapperPreferences = (props) => {
  return shallow(<Preferences {...props} />);
};

describe('Preferences module', () => {

  it('should render correctly', () => {
    const wrapper = shallowWrapperPreferences(DEFAULT_PROPS);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass proper value in props', () => {
    const wrapper = shallowWrapperPreferences(DEFAULT_PROPS);
    expect(wrapper.find(TripPreferences).prop('preferences')).toEqual(preferences);
  });

  it('should pass proper value in props', () => {
    const wrapper = shallowWrapperPreferences(DEFAULT_PROPS);
    expect(wrapper.find(Request).prop('preferences')).toEqual(getRequestPreferences(preferences));
  });

  it('should pass proper value in props', () => {
    const wrapper = shallowWrapperPreferences(DEFAULT_PROPS);
    expect(wrapper.find(ContactDetails).prop('preferences')).toEqual(getContactPreferences(preferences));
  });

});
