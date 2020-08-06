import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import LeadSubmittedStage from './LeadSubmittedStage';
import RequestProcessingCard from './components/RequestProcessingCard';
import { tripsData } from '../../trip/testData';

configure({ adapter: new Adapter() });

const mockSendActivationMail = jest.fn();
const mockReactivateBooking = jest.fn();

const DEFAULT_PROPS = {
  trips: tripsData,
  currentTripId: 4982978,
  sendActivationMail: mockSendActivationMail,
  reactivateBooking: mockReactivateBooking
};

const ShallowWrapperLeadSubmittedStage = props => {
  return shallow(<LeadSubmittedStage {...props} />);
};

describe('RLP page', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = ShallowWrapperLeadSubmittedStage(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call closePopup properly', () => {
    const wrapper = ShallowWrapperLeadSubmittedStage(props);
    wrapper.instance().closePopup();
    expect(wrapper.state().closeModal).toEqual(true);
  });

  it('should call callbackHandler properly for reactivate booking', () => {
    const wrapper = ShallowWrapperLeadSubmittedStage(props);
    wrapper.instance().callbackHandler('Reactivate_Booking');
    expect(mockReactivateBooking).toHaveBeenCalledWith({ tripId: props.currentTripId });
  });

  it('should call callbackHandler properly for resend confirmation', () => {
    const wrapper = ShallowWrapperLeadSubmittedStage(props);
    wrapper.instance().callbackHandler('Resend_Confirmation');
    expect(mockSendActivationMail).toHaveBeenCalledWith(props.currentTripId);
  });

  it('should pass proper props in RequestProcessingCard', () => {
    const expected_result = {
      header: '',
      message: 'Please wait while we are working on your request.',
      icon: 'DEFAULT',
      ctas: []
    };
    const wrapper = ShallowWrapperLeadSubmittedStage(props);
    expect(wrapper.find(RequestProcessingCard).prop('message')).toEqual(expected_result);
  });

  it('should call getMessageObject properly', () => {
    const noQuotesMsg = {
      header: 'Request in Progress!',
      message: 'Sit back and relax while our agents handcraft quotes to best fit your requirements.',
      icon: 'DEFAULT',
      links: []
    };

    const expected_result = {
      header: noQuotesMsg.header,
      message: noQuotesMsg.message,
      icon: noQuotesMsg.icon,
      ctas: []
    };

    const wrapper = ShallowWrapperLeadSubmittedStage(props);
    expect(wrapper.instance().getMessageObject(noQuotesMsg)).toEqual(expected_result);
  });

});
