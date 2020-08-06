import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ContactDetails from './ContactDetails';
import { preferences } from '../testData';
import { getContactPreferences } from '../helpers';
import EditPreferencesPopup from "../components/EditPreferencesPopup";
import ContactDetailsEditForm from '../edit/ContactDetails';

configure({ adapter: new Adapter() });

const mockHandleSubmit = jest.fn();

const DEFAULT_PROPS = {
  isConvertedTrip: false,
  preferences: getContactPreferences(preferences),
  handleSubmit: mockHandleSubmit,
  isCancelledTrip: false
};

const shallowWrapperView = (props) => {
  return shallow(<ContactDetails {...props} />);
};

describe('View module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ContactDetailsEditForm when isConvertedTrip is false ', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(ContactDetailsEditForm).exists()).toBeTruthy();
  });

  it('should not render ContactDetailsEditForm  when isConvertedTrip is true and isCancelledTrip is false', () => {
    props.isConvertedTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(ContactDetailsEditForm).exists()).toBeFalsy();
  });

  it('should render ContactDetailsEditForm when isConvertedTrip is true and isCancelledTrip is true', () => {
    props.isConvertedTrip = true;
    props.isCancelledTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(ContactDetailsEditForm).exists()).toBeTruthy();
  });

  it('should not render EditPreferencesPopup when isConvertedTrip is false isCancelledTrip is false', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(EditPreferencesPopup).exists()).toBeFalsy();
  });

  it('should render EditPreferencesPopup  when isConvertedTrip is true and isCancelledTrip is false', () => {
    props.isConvertedTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(EditPreferencesPopup).exists()).toBeTruthy();
  });

  it('should not render EditPreferencesPopup when isConvertedTrip is true and isCancelledTrip is true', () => {
    props.isConvertedTrip = true;
    props.isCancelledTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(EditPreferencesPopup).exists()).toBeFalsy();
  });

  it('should handleSubmit called', () => {
    const values = {
      email: 'email',
      isdCode: +91,
      phoneNo: 878
    };
    const wrapper = shallowWrapperView(props);
    wrapper.instance().updateContactInfo(values);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

});
