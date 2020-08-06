import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import JobDescription, { JobDescribe } from './JobDescription';

configure({ adapter: new Adapter() });

const careerApplyMock = jest.fn();

const DEFAULT_PROPS = {
  selectedJd: {},
  jobDescription: {},
  careerApply: careerApplyMock
};

const shallowWrapperJobDescription = (props) => {
  return shallow(<JobDescription {...props} />);
};

describe('career module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperJobDescription(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render jobdescribe component', () => {
    const wrapper = shallowWrapperJobDescription(props);
    expect(wrapper.find(JobDescribe).exists()).toBeFalsy();
  });

  it('should not render jobdescribe component', () => {
    props.selectedJd = { goodToHave: "Experience in sales, operations and vendor management." };
    const wrapper = shallowWrapperJobDescription(props);
    expect(wrapper.find(JobDescribe).exists()).toBeTruthy();
  });

  it('should call function at apply now button', () => {
    const e = {preventDefault:()=>{}};
    const wrapper = shallowWrapperJobDescription(props);
    expect(wrapper.find('.at_formfunction').simulate('click',e));
  })

});
