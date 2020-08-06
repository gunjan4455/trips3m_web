import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import HotelRating from "./HotelRating";

configure({ adapter: new Adapter() });

const mockDispatchRxFormAction = jest.fn();

const DEFAULT_PROPS = {
  input: {
    name: 'hotel_category_answers_attributes',
    value: [
      {
        option_id: '7',
        customization_id: '2'
      }
    ],
    onChange: () => {
    }
  },
  meta: {
    active: false,
    asyncValidating: false,
    autofilled: false,
    dirty: false,
    form: 'LeadForm',
    initial: [
      {
        option_id: '7',
        customization_id: '2'
      }
    ],
    invalid: false,
    pristine: true,
    submitting: false,
    submitFailed: false,
    touched: false,
    valid: true,
    visited: false
  },
  formValues: {
    email: null,
    dont_utilize_budget_new: true,
    budget_new: true,
    start_date_noidea: false,
    adult: '2',
    child: 0,
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
    start_date_flexible: 'Sep\'19 - Week 1',
    start_date: '191-09-08',
    trip_days: '3',
    hotel_needed_answer_attributes: {
      option_id: '95',
      customization_id: '22'
    },
    hotel_category_answers_attributes: [
      {
        option_id: '7',
        customization_id: '2'
      }
    ]
  },
  isHotelSelected: true,
  dispatchRxFormAction: mockDispatchRxFormAction
};

const shallowWrapperHotelRating = (props) => {
  return shallow(<HotelRating {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperHotelRating(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange properly', () => {
    const event = {
      target: {
        checked: true,
        name: 'noHotel'
      }
    };
    const expected_result = {
      noHotel: true,
      star2: false,
      star3: false,
      star4: false,
      star5: false,
    };

    const wrapper = shallowWrapperHotelRating(props);
    wrapper.instance().handleChange(event);
    expect(wrapper.state().hotels).toEqual(expected_result);
  });

  it('should call handleChange properly', () => {
    const event = {
      target: {
        checked: false,
        name: 'noHotel'
      }
    };
    const expected_result = {
      noHotel: false,
      star2: false,
      star3: false,
      star4: true,
      star5: false,
    };

    const wrapper = shallowWrapperHotelRating(props);
    wrapper.instance().handleChange(event);
    expect(wrapper.state().hotels).toEqual(expected_result);
  });

  it('should call handleChange properly', () => {
    const event = {
      target: {
        checked: false,
        name: 'Hotel'
      }
    };
    const expected_result = {
      noHotel: false,
      Hotel:false,
      star2: false,
      star3: false,
      star4: true,
      star5: false,
    };

    const wrapper = shallowWrapperHotelRating(props);
    wrapper.instance().handleChange(event);
    expect(wrapper.state().hotels).toEqual(expected_result);
  });

});
