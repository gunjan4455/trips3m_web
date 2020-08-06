import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CareerAsync from './CareerAsync';
import HeaderCommon from 'modules/header/HeaderCommon';
import JobDescription from 'modules/shared/trialist/jobDescription/JobDescription';
import { careerData } from 'modules/shared/trialist/career/test/careerData';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  params: {},
  loaded: true,
  jobDescription: {
    careers: careerData
  },
  location: {},
  jobApply: jest.fn,
};

const shallowWrapperCareer = (props) => {
  return shallow(<CareerAsync {...props} />);
};

describe('career module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperCareer(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('component render', () => {
    props.loaded = false;
    const wrapper = shallowWrapperCareer(props);
    expect(wrapper.find(HeaderCommon)).toHaveLength(0);
  });

  it('JobDescription render', () => {
    props.params.id = 25;
    const wrapper = shallowWrapperCareer(props);
    expect(wrapper.find(JobDescription)).toHaveLength(1);
  });

});
