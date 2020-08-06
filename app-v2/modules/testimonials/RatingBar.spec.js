import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import RatingBar from './RatingBar';
import { getWidth } from './RatingBar';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  totalReviews: 5430,
  reviewNumbers: {
    bad: 73,
    poor: 866,
    good: 809,
    veryGood: 2170,
    excellent: 2193,
  },
};

const shallowWrapperRight = props => {
  return shallow(<RatingBar {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperRight(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getWidth function properly', () => {
    expect(getWidth({ excellent: 0, bad: 0 }, 'bad', 89)).toEqual(0);
  });
});
