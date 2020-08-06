import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SeePackages from './SeePackages';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  location: {
    query: {}
  },
  category: ''
};

const shallowWrapperSeePackages = (props) => {
  return shallow(<SeePackages {...props} />);
};

describe('see packages module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should create link tag with tour-package plp url if category is blank', () => {
    const wrapper = shallowWrapperSeePackages(props);
    expect(wrapper.find('.button-load-more-full').prop('to')).toEqual('/tour-packages');
  });

  it('should create link tag with family-package plp url if category is family', () => {
    props.category = 'Family';
    const wrapper = shallowWrapperSeePackages(props);
    expect(wrapper.find('.button-load-more-full').prop('to')).toEqual('/family-packages');
  });

  it('should create link tag with tour-package plp url with query param, if category is nature', () => {
    props.category = 'Nature';
    const wrapper = shallowWrapperSeePackages(props);
    expect(wrapper.find('.button-load-more-full').prop('to')).toEqual('/tour-packages?trip_types[]=Nature');
  });

  it('should create link tag with tour-package plp url with query param for All places international destinations', () => {
    props.category = 'All';
    props.location = {
      ...props.location,
      query: { ...props.location.query, is_international: 'true'  }};
    const wrapper = shallowWrapperSeePackages(props);
    expect(wrapper.find('.button-load-more-full').prop('to')).toEqual('/tour-packages?destination_type=international');
  });

  it('should create link tag with tour-package plp url with query param for All places indian destinations', () => {
    props.category = 'All';
    props.location = {
      ...props.location,
      query: { ...props.location.query, is_international: 'false'  }};
    const wrapper = shallowWrapperSeePackages(props);
    expect(wrapper.find('.button-load-more-full').prop('to')).toEqual('/tour-packages?destination_type=india');
  });

});
