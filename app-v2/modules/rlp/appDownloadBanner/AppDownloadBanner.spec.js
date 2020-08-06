import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import AppDownloadBanner from './index';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  trackSegment: jest.fn()
};

const shallowWrapperAppDownloadBanner = (props) => {
  return shallow(<AppDownloadBanner {...props} />);
};

describe('AppDownloadBanner module', () => {

  it('should render correctly', () => {
    const wrapper = shallowWrapperAppDownloadBanner(DEFAULT_PROPS);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call required functions on click of banner', () => {
    const wrapper = shallowWrapperAppDownloadBanner(DEFAULT_PROPS);
    window.open = () => {};
    wrapper.find('.promoBanner').simulate('click');
    expect(DEFAULT_PROPS.trackSegment).toHaveBeenCalled();
  });

  it('should not render anything on click of close', () => {
    const wrapper = shallowWrapperAppDownloadBanner(DEFAULT_PROPS);
    wrapper.find('.bannerDismiss').simulate('click', { stopPropagation: jest.fn() });
    expect(wrapper.find('.promoBanner')).toHaveLength(0);
  });

});
