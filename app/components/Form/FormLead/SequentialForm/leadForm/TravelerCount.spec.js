import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TravelerCount from './TravelerCount';
import { SEQUENTIAL_FORM_FOUR, SEQUENTIAL_FORM_SIX,SEQUENTIAL_FORM_SEVEN   } from "../../../../../constants/Slider";

const mockCallNextSlide = jest.fn();
const mockDispatchRxFormAction = jest.fn();

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  callNextSlide: mockCallNextSlide,
  dispatchRxFormAction: mockDispatchRxFormAction,
  input: {
    name: 'traveler_count',
    value: '',
    onChange: () => {
    }
  },
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
    query: { variation: '3' }
  }

};
const shallowWrapperTravelerCount = (props) => {
  return shallow(<TravelerCount {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperTravelerCount(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateChildCountInRedux properly', () => {
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().updateChildCountInRedux();
    expect(mockDispatchRxFormAction).toHaveBeenCalled();
  });

  it('should call handleTravelerCount properly', () => {
    const expected_input = {
      option_id: '29',
      customization_id: '7',
      user_input: '5',
    };
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().handleTravelerCount(5, 'infant');
    expect(mockDispatchRxFormAction).toHaveBeenCalledWith(expected_input, 'child_age_answers_attributes[0]');
  });

  it('should call handleTravelerCount properly', () => {
    const expected_input = {
      option_id: '31',
      customization_id: '7',
      user_input: '5',
    };
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().handleTravelerCount(5, 'child');
    expect(mockDispatchRxFormAction).toHaveBeenCalledWith(expected_input, 'child_age_answers_attributes[2]');
  });

  it('should call handleTravelerCount properly', () => {
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().handleTravelerCount(5, 'name');
    expect(mockDispatchRxFormAction).toHaveBeenCalledWith(5, 'name');
  });

  it('should call goBack properly', () => {
    const expected_input = {
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_FOUR,
      isBackButton: true
    };
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().goBack();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });

  it('should call goForward properly', () => {
    mockCallNextSlide.mockClear();
    const expected_input = {
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_SIX,
    };
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().goForward();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });

  it('should call goForward properly when variation in query is 4', () => {
    mockCallNextSlide.mockClear();
    props.location.query.variation = '4';
    const expected_input = {
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_SEVEN,
    };
    const wrapper = shallowWrapperTravelerCount(props);
    wrapper.instance().goForward();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });


});
