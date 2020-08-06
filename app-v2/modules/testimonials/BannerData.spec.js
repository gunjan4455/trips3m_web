import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BannerData from './BannerData';
import { getReviewsPercentage } from './BannerData';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  totalReview: 5430,
  positiveReview: 5430,
};

const shallowWrapperBannerData = props => {
  return shallow(<BannerData {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperBannerData(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct postitive review percentage', () => {
    const wrapper = shallowWrapperBannerData(props);
    expect(wrapper.find('.at_positivePercentage').text()).toEqual('100.00% Positive Reviews');
  });

  it('should render positive Review percentage', () => {
    props.positiveReview = 2715;
    const wrapper = shallowWrapperBannerData(props);
    expect(wrapper.find('.at_positivePercentage').text()).toEqual('50.00% Positive Reviews');
  });

  it('should call getReviewsPercentage function', () => {
    expect(getReviewsPercentage(0, 30)).toEqual(0);
    expect(getReviewsPercentage(30, 30)).toEqual(100);
    expect(getReviewsPercentage(30, 0)).toEqual(Infinity);
  });
});
