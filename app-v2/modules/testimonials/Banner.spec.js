import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Banner from './Banner';
import BannerData from './BannerData';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  bannerPath: '',
  bannerAlt: 'Happy Travelers',
  totalRating: 5430,
  positiveRating: 5172,
};

const shallowWrapperBanner = props => {
  return shallow(<Banner {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperBanner(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass proper positive rating in bannerData', () => {
    const wrapper = shallowWrapperBanner(DEFAULT_PROPS);
    expect(wrapper.find(BannerData).prop('positiveReview')).toBe(DEFAULT_PROPS.positiveRating);
  });
});
