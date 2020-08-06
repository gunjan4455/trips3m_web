import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { careerData } from '../career/test/careerData';
import JobForm from './JobForm';

configure({ adapter: new Adapter() });

const careerApplyMock = jest.fn();

const DEFAULT_PROPS = {
  jobDescription : {
    careers: careerData
  },
  careerApply:careerApplyMock
};

const shallowWrapperJobForm = (props) => {
  return shallow(<JobForm {...props} />);
};

describe('career module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperJobForm(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call by first name input', () => {
    const event = Object.assign(jest.fn(), {target:'fie'} );
    const wrapper = shallowWrapperJobForm(props);
    expect(wrapper.find('.at_firstName').simulate('change',event))
  });

  it('should call by pdf', () => {
    const event = Object.assign(jest.fn(), {target:{files:[]}} );
    const wrapper = shallowWrapperJobForm(props);
    expect(wrapper.find('.at_pdfChange').simulate('change',event))
  });

  it('should call on form submit', () => {
    const event = Object.assign(jest.fn(), {preventDefault: () => {}});
    const wrapper = shallowWrapperJobForm(props);
    expect(wrapper.find('.at_formSubmit').simulate('submit',event))
  });

});
