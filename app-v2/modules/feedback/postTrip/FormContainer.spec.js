import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PostTripFormContainer from './FormContainer';
import RatingApp from "../components/RatingApp";

configure({ adapter: new Adapter() });

const mockcreatePostTripFeedback = jest.fn();
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
  createPostTripFeedback: mockcreatePostTripFeedback,
  pushState: mockPushState
};

const shallowWrapperPostTrip = (props) => {
  return shallow(<PostTripFormContainer {...props} />);
};

describe('Post trip module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperPostTrip(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit properly', () => {
    const wrapper = shallowWrapperPostTrip(props);
    wrapper.instance().handleSubmit({});
    expect(mockcreatePostTripFeedback).toHaveBeenCalled();
  });

  it('should call setTimeout in componentwillreceiveprops function', () => {
    const wrapper = shallowWrapperPostTrip(props);
    jest.useFakeTimers();
    wrapper.setProps({ ...DEFAULT_PROPS, submitted: true });
    expect(wrapper.state().submitted).toBe(true);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });

  it('should show RatingApp popup when NPS rating is more than 7', () => {
    const wrapper = shallowWrapperPostTrip(props);
    wrapper.instance().setState({ npsScore: 8 });
    wrapper.setProps({ ...DEFAULT_PROPS, submitted: true });
    expect(wrapper.find(RatingApp)).toHaveLength(1);
  });
});
