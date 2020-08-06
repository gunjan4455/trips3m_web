import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CabforSightseeing from './CabforSightseeing';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  input: {
    name: 'other_answers_attributes[1]',
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
  question: {
    customizationId: 24,
    customizationTags: 'cab',
    description: '',
    hasOthers: false,
    id: 136,
    identifier: 'cust_24',
    jsonValueType: 'hash',
    options: [
      {
        id: '99',
        misc: '',
        name: 'Yes',
        tags: '',
        url: ''
      },
      {
        id: '100',
        misc: '',
        name: 'No',
        tags: '',
        url: ''
      }
    ],
    questionSequence: 1,
    railsFormName: 'other_answers_attributes',
    templateId: '1',
    templateType: 'radio_button',
    title: 'Cab for local sightseeing?',
    useInputForOptions: false,
    valueType: 'single_value'
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
}

const shallowWrapperCabforSightseeing = (props) => {
  return shallow(<CabforSightseeing {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperCabforSightseeing(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange properly', () => {
    const wrapper = shallowWrapperCabforSightseeing(props);
    wrapper.instance().handleChange({});
    expect(wrapper.state().isChecked).toEqual(true);
  });

  it('should isChecked in state true when other_answers_attributes are available', () => {
    props.formValues.other_answers_attributes = [
      {
        option_id: '7',
        customization_id: '2'
      },
      {
        option_id: '99',
        customization_id: '2'
      }
    ];
    const wrapper = shallowWrapperCabforSightseeing(props);
    expect(wrapper.state().isChecked).toEqual(true);
  });

});
