import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TravelerInputField from './TravelerInputField';

const mockCallNextSlide = jest.fn();
const mockDispatchRxFormAction = jest.fn();
const mockHandleTravelerCount = jest.fn();
configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  callNextSlide: mockCallNextSlide,
  dispatchRxFormAction: mockDispatchRxFormAction,
  input: {
    name: 'TravelerInputField',
    value: '',
    onChange: () => {
    }
  },
  inputValue: 1,
  fieldName: "child",
  formValues: {
    email: null,
    dont_utilize_budget_new: true,
    budget_new: true,
    start_date_noidea: false,
    adult: '2',
    child: '0',
    isd_code: '+91',
    child_age_answers_attributes: [
      {
        user_input: '0',
        customization_id: '7',
        option_id: '29'
      },
      {
        user_input: '0',
        customization_id: '7',
        option_id: '30'
      },
      {
        user_input: '0',
        customization_id: '7',
        option_id: '31'
      }
    ],
    syncErrors: {
      email: 'Enter valid email id'
    },
    to_loc: 'Kerala',
    start_date: '2019-07-16',
    start_date_flexible: false,
    trip_days: '2',
    hotel_needed_answer_attributes: {
      option_id: '95',
      customization_id: '22'
    },
    hotel_category_answers_attributes: [
      {
        option_id: '6',
        customization_id: '2'
      }
    ],
    other_answers_attributes: [
      null,
      {
        option_id: '99',
        customization_id: '24'
      }
    ],
    budget: '8000..8400',
    infant: '0'
  },

  meta: {
    active: false,
    asyncValidating: false,
    autofilled: false,
    dirty: false,
    form: 'LeadForm',
    invalid: false,
    pristine: true,
    submitting: false,
    submitFailed: false,
    touched: false,
    valid: true,
    visited: false
  },

  location: {
    query: {}
  },
  handleTravelerCount: mockHandleTravelerCount

};
const shallowWrapperTravelerInputField = (props) => {
  return shallow(<TravelerInputField {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperTravelerInputField(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleBlur properly', () => {
    const e = {
      target: {
        value: ''
      }
    };
    const wrapper = shallowWrapperTravelerInputField(props);
    wrapper.instance().handleBlur(e);
    expect(wrapper.state().inputValue).toEqual(0)
  });

  it('should call onChange properly', () => {
    const e = {
      target: {
        value: 7
      }
    };
    const wrapper = shallowWrapperTravelerInputField(props);
    wrapper.instance().onChange(e);
    expect(wrapper.state().inputValue).toEqual(7);
  });

  it('should call onChange properly when fieldname in props is adult', () => {
    const e = {
      target: {
        value: 1
      }
    };
    props.fieldName = 'adult';
    const wrapper = shallowWrapperTravelerInputField(props);
    wrapper.instance().onChange(e);
    expect(wrapper.state().inputValue).toEqual(1);
  });

  it('should call updateDays properly when updateDays call with inc', () => {
    mockDispatchRxFormAction.mockClear();
    const wrapper = shallowWrapperTravelerInputField(props);
    wrapper.instance().updateDays('inc');
    expect(mockDispatchRxFormAction).toHaveBeenCalledWith('2','child');
  });

  it('should call updateDays properly when updateDays call with other than inc', () => {
    mockDispatchRxFormAction.mockClear();
    const wrapper = shallowWrapperTravelerInputField(props);
    wrapper.instance().updateDays('inc1');
    expect(mockDispatchRxFormAction).toHaveBeenCalledWith('0','child');
  });
  it('should call updateDays properly when updateDays call with inc and fieldname in props is adult', () => {
    mockDispatchRxFormAction.mockClear();
    props.fieldName = 'adult';
    const wrapper = shallowWrapperTravelerInputField(props);
    wrapper.instance().updateDays('inc');
    expect(mockDispatchRxFormAction).toHaveBeenCalledWith('2','adult');
  });

});
