import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import StartPlanning from './StartPlanning';
import { SEQUENTIAL_FORM_TWO } from "../../../../../constants/Slider";

configure({ adapter: new Adapter() });

const mockHandleBlur = jest.fn();
const mockChangeFormField = jest.fn();
const mockCallNextSlide = jest.fn();

const DEFAULT_PROPS = {
  formValues: {
    email : '',
    dont_utilize_budget_new : true,
    budget_new : true,
    start_date_noidea: false,
    adult : '2 ',
    child: 0,
    isd_code: ' + 91 ',
    child_age_answers_attributes: [
      {
        user_input: '0 ',
        customization_id: '7 ',
        option_id: '29 '
      },
      {
        user_input: '0 ',
        customization_id: '7 ',
        option_id: '30 '
      },
      {
        user_input: '0 ',
        customization_id: '7 ',
        option_id: '31 '
      }
    ],
    syncErrors: {},
    to_loc: ''
  },
  handleBlur: mockHandleBlur,
  changeFormField: mockChangeFormField,
  callNextSlide: mockCallNextSlide
};

const shallowWrapperStartPlanning = (props) => {
  return shallow(<StartPlanning {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperStartPlanning(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onToLocFocus properly', () => {
    const wrapper = shallowWrapperStartPlanning(props);
    wrapper.instance().onToLocFocus();
    expect(wrapper.state().showDestinations).toEqual(true);
    expect(wrapper.state().showIcon).toEqual(false);
  });

  it('should call handleBlur properly', () => {
    const wrapper = shallowWrapperStartPlanning(props);
    wrapper.instance().handleBlur();
    expect(wrapper.state().showDestinations).toEqual(false);
    expect(wrapper.state().showIcon).toEqual(false);
    expect(mockHandleBlur).toHaveBeenCalled();
  });

  it('should call handleChangeInput properly', () => {
    const wrapper = shallowWrapperStartPlanning(props);
    wrapper.instance().handleChangeInput('kerala', 1);
    expect(wrapper.state().showDestinations).toEqual(false);
    expect(wrapper.state().showIcon).toEqual(true);
    expect(mockChangeFormField).toHaveBeenCalledWith('LeadForm', 'to_loc', 'kerala');
  });

  it('should call goForward properly', () => {
    const expectedInput = {
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_TWO,
      selectedPillIndex: 0
    };
    const wrapper = shallowWrapperStartPlanning(props);
    wrapper.instance().goForward();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expectedInput);
  });

  it('should call goBack properly', () => {
    const wrapper = shallowWrapperStartPlanning(props);
    expect(wrapper.instance().goBack()).toEqual(false);
  });
});
