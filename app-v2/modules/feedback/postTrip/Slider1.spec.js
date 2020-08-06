import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Form1 from './Slider1';
import { RightWhiteArrow, RightGreyArrow } from 'helpers/Icon/Icon';

configure({ adapter: new Adapter() });

const mocksetSliderMode = jest.fn();
const mockTrackSegment = jest.fn();

const DEFAULT_PROPS = {
  setSliderMode: mocksetSliderMode,
  invalid: false,
  submitting: false,
  pristine: false,
  trackSegment: mockTrackSegment
};

const shallowWrapperPostTrip = (props) => {
  return shallow(<Form1 {...props} />);
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

  it('button should not disabled when all invalid, submitting, pristine are false', () => {
    const wrapper = shallowWrapperPostTrip(props);
    expect(wrapper.find('.at_submit').prop('disabled')).toEqual(false);
  });

  it('button should be disabled when any of invalid, submitting, pristine is true', () => {
    props.invalid = true;
    const wrapper = shallowWrapperPostTrip(props);
    expect(wrapper.find('.at_submit').prop('disabled')).toEqual(true);
  });

  it('should render RightWhiteArrow when all invalid, submitting, pristine are false', () => {
    const wrapper = shallowWrapperPostTrip(props);
    expect(wrapper.find(RightWhiteArrow)).toHaveLength(1);
  });

  it('should render RightGreyArrow when any of invalid, submitting, pristine is true', () => {
    props.invalid = true;
    const wrapper = shallowWrapperPostTrip(props);
    expect(wrapper.find(RightGreyArrow)).toHaveLength(1);
  });

  it('should call setSliderMode on click on button', () => {
    const wrapper = shallowWrapperPostTrip(props);
    wrapper.find('.at_submit').simulate('click');
    expect(mocksetSliderMode).toHaveBeenCalledWith(2);
  });

});
