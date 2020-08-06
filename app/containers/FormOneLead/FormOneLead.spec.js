import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { SliderLeadForm } from './FormOneLead';

configure({ adapter: new Adapter() });

const createStubStore = () => ({
  getState: jest.fn(() => {
  })
});

const  props = {
  submitSliderTwo: jest.fn(),
  updateFields: jest.fn(),
  commonProperties: {},
  destinations: [],
  location: {
    query: {
      variation : 3
    }
  },
  formValues: {},
  syncErrors: {},
  additionalInfo: '',
  pushState: jest.fn(),
  getBudgetOptions: {},
  getSelectedBudget: '',
  isFlightSelected: false,
  days: 0,
  trackFormOneInteracted: jest.fn(),
  trackTripAdded: jest.fn(),
  trackFormOneSubmitted: jest.fn(),
  trackFormStepSubmitted: jest.fn(),
  loadUserDetails: jest.fn(),
  isOpenedByClick: false,
  formOneClickDetail: {},
  retainRecentUpdate: false,
  analyticsInfo: {},
  aliasPayload: jest.fn(),
  identifyPayload: jest.fn(),
  messageOnTop: '',
  openFormState: jest.fn(),
  change: jest.fn(),
  formType: '',
  formClass: '',
  trackFormFunnelStep: jest.fn(),
  rtData: {},
  requestLoad: jest.fn(),
  goBack: jest.fn(),
  trackFormOneViewed: jest.fn(),
  updateFromOneProps: jest.fn(),
  trackTripUpdated: jest.fn(),
  createTripOnRedis: jest.fn(),
  getFunnelUuid:''
};
const wrapper = shallow(<SliderLeadForm {...props} store={createStubStore()}/>,
  { disableLifecycleMethods: true });

describe('SliderLeadForm component', () => {

  it('should render SliderLeadForm', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call _handleThankYou in SliderLeadForm when form is submit', () => {
    wrapper.instance()._handleThankYou(true);
  });

  it('should call handleBlur in SliderLeadForm', () => {
    wrapper.setState({ retainRecentUpdate: false});
    wrapper.instance().handleBlur();
    expect(wrapper.state('retainRecentUpdate')).toBe(true);
  });

  it('should call handleEmailChange in SliderLeadForm', () => {
    wrapper.setState({ retainEmail: false});
    wrapper.instance().handleEmailChange();
    expect(wrapper.state('retainEmail')).toBe(true);
  });

  it('should call getTripDays in SliderLeadForm', () => {
    const location = {
      query : {
        variation : 3
      }
    };
    wrapper.setProps({ location: location });
    wrapper.instance().getTripDays();
  });

  it('should call getLocValue in SliderLeadForm when rtData is present', () => {
    const rtData= { to_loc: 'Kerala' };
    wrapper.setProps({ rtData: rtData });
    const destination = wrapper.instance().getLocValue();
    expect(destination).toEqual('Kerala');
  });

  it('should call getLocValue in SliderLeadForm when formValues are present', () => {
    wrapper.setProps({ formValues: { to_loc: 'Kerala' }, rtData: {} });
    wrapper.setState({ retainRecentUpdate: true });
    wrapper.instance().getLocValue();
    expect(wrapper.state('retainRecentUpdate')).toBe(true);
  });

});
