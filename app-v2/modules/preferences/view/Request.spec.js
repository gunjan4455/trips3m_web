import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Request from './Request';
import { preferences } from '../testData';
import { getRequestPreferences } from '../helpers';
import RequestEditForm from '../edit/Request';
import EditPreferencesPopup from '../components/EditPreferencesPopup';

configure({ adapter: new Adapter() });

const mockHandleSubmit = jest.fn();

const DEFAULT_PROPS = {
  isConvertedTrip: false,
  preferences: getRequestPreferences(preferences),
  handleSubmit: mockHandleSubmit,
  isCancelledTrip: false
};

const shallowWrapperView = (props) => {
  return shallow(<Request {...props} />);
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

  it('should render RequestEditForm when isConvertedTrip is false ', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(RequestEditForm).exists()).toBeTruthy();
  });

  it('should not render RequestEditForm  when isConvertedTrip is true and isCancelledTrip is false', () => {
    props.isConvertedTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(RequestEditForm).exists()).toBeFalsy();
  });

  it('should render RequestEditForm when isConvertedTrip is true and isCancelledTrip is true', () => {
    props.isConvertedTrip = true;
    props.isCancelledTrip = true;
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find(RequestEditForm).exists()).toBeTruthy();
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

  it('should render - when tripStage is blank', () => {
    props.preferences.tripStage = '';
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find('.at_tripStage').text()).toEqual('-');
  });

  it('should handleSubmit called', () => {
    const values = {
      destination: 'kerala',
      departureCity: 'delhi',
      departureDate: '',
      tripDays: 3,
      adults:2,
      children: 0
    };
    const wrapper = shallowWrapperView(props);
    wrapper.instance().updateRequestPreference(values);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('should render formatted departure date', () => {
    const wrapper = shallowWrapperView(props);
    expect(wrapper.find('.at_departureDate').text()).toEqual('19 Aug 2019');
  });
});
