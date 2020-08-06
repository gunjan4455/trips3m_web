import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PostBookingFormContainer from './FormContainer';
import RatingApp from '../components/RatingApp';

configure({ adapter: new Adapter() });

const createPostBookingFeedback = jest.fn();
const mockPushState = jest.fn();

const DEFAULT_PROPS = {
  submitted: false,
  formValues: {},
  location: {
    query: {}
  },
  params: {
    requestedTripId: 4876448
  },
  createPostBookingFeedback: createPostBookingFeedback,
  pushState: mockPushState
};

const shallowWrapperPostBooking = (props) => {
  return shallow(<PostBookingFormContainer {...props} />);
};

describe('Post trip module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperPostBooking(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit properly', () => {
    const wrapper = shallowWrapperPostBooking(props);
    wrapper.instance().handleSubmit({});
    expect(createPostBookingFeedback).toHaveBeenCalled();
  });

  it('should call setTimeout in componentwillreceiveprops function', () => {
    const wrapper = shallowWrapperPostBooking(props);
    jest.useFakeTimers();
    wrapper.setProps({ ...DEFAULT_PROPS, submitted: true });
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });

  it('should show RatingApp popup when NPS rating is more than 7', () => {
    const wrapper = shallowWrapperPostBooking(props);
    wrapper.instance().setState({ npsScore: 8 });
    wrapper.setProps({ ...DEFAULT_PROPS, submitted: true });
    expect(wrapper.find(RatingApp)).toHaveLength(1);
  });
});
