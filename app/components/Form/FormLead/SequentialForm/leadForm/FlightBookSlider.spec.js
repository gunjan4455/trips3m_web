import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import FlightBookSlider from './FlightBookSlider';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  input: {
    name: '"flight_answer_attributes"',
    value: '',
    onChange: () => {
    }
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
    start_date: '2019-07-17',
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
    ]
  }
};

const shallowWrapperFlightBookSlider = (props) => {
  return shallow(<FlightBookSlider {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperFlightBookSlider(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange properly',() => {
    const wrapper = shallowWrapperFlightBookSlider(props);
    wrapper.instance().handleChange({});
    expect(wrapper.state().selected).toEqual('97');
  });

  it('should call handleChange properly',() => {
    props.formValues.flight_answer_attributes = {
      customization_id: "23",
      option_id: "97"
    };
    const wrapper = shallowWrapperFlightBookSlider(props);
    wrapper.instance().handleChange({});
    expect(wrapper.state().selected).toEqual('98');
  });

});
