import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ContactDetails from './ContactDetails';
import {
  SEQUENTIAL_FORM_SEVEN,
  SEQUENTIAL_FORM_THREE,
  SEQUENTIAL_FORM_FIVE,
  SEQUENTIAL_FORM_TWO
} from "../../../../../constants/Slider";

const mockCallNextSlide = jest.fn();
const mockDispatchRxFormAction = jest.fn();

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  email: null,
  callNextSlide: mockCallNextSlide,
  dispatchRxFormAction: mockDispatchRxFormAction,
  location: {
    query: {
      variation: '3'
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
      email: 'Enter valid email id',
      phone_no: 'Phone number is required'
    },
    to_loc: 'Kerala',
    start_date: '2019-07-25',
    start_date_flexible: false,
    trip_days: '2',
    hotel_needed_answer_attributes: {
      option_id: '95',
      customization_id: '22'
    },
    hotel_category_answers_attributes: [
      {
        option_id: '7',
        customization_id: '2'
      }
    ],
    budget: '5500..6000',
    infant: '0'
  }

};
const shallowWrapperContactDetails = (props) => {
  return shallow(<ContactDetails {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS, location: { ...DEFAULT_PROPS.location, query: { ...DEFAULT_PROPS.location.query } } };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperContactDetails(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call goForward properly', () => {
    mockCallNextSlide.mockClear();
    const expected_input = {
      submitVariation: true,
      variation: true,
      variationStep: SEQUENTIAL_FORM_SEVEN
    };
    const wrapper = shallowWrapperContactDetails(props);
    wrapper.instance().goForward();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });

  it('should call goForward properly when variation in query is 4', () => {
    props.location.query.variation = '4';
    mockCallNextSlide.mockClear();
    const expected_input = {
      submitVariation: true,
      variation: true,
      variationStep: SEQUENTIAL_FORM_SEVEN
    };
    const wrapper = shallowWrapperContactDetails(props);
    wrapper.instance().goForward();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });

  it('should call goBack properly when variation step is sequential form five', () => {
    mockCallNextSlide.mockClear();
    const expected_input = {
      submitVariation: '',
      variation: true,
      isBackButton: true,
      variationStep: SEQUENTIAL_FORM_FIVE
    };
    const wrapper = shallowWrapperContactDetails(props);
    wrapper.instance().goBack();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });


  it('should call goBack properly', () => {
    props.location.query.variation = '4';
    mockCallNextSlide.mockClear();
    const expected_input = {
      submitVariation: '',
      variation: true,
      isBackButton: true,
      variationStep: SEQUENTIAL_FORM_FIVE
    };
    const wrapper = shallowWrapperContactDetails(props);
    wrapper.instance().goBack();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });
});
