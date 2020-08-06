import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import PackageDaysDiscountExperiment from './PackageDaysDiscountExperiment';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  days: 6,
  nights: 5,
};

const shallowWrapperPackageDaysDiscountExperiment = (props) => {
  return shallow(<PackageDaysDiscountExperiment {...props} />);
};


describe('Package card module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperPackageDaysDiscountExperiment(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render at_package when isPackageRevamp is undefined', () => {
    const wrapper = shallowWrapperPackageDaysDiscountExperiment(props);
    expect(wrapper.find('.at_package')).toHaveLength(0);
  });

  it('should render at_package when isPackageRevamp is true', () => {
    props.isPackageRevamp = true;
    const wrapper = shallowWrapperPackageDaysDiscountExperiment(props);
    expect(wrapper.find('.at_package')).toHaveLength(1);
  })

});
