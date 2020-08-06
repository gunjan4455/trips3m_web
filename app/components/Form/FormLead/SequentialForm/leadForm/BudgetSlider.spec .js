import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BudgetSlider, { BudgetOptions, DefaultBudgetOptions } from './BudgetSlider';
import { SEQUENTIAL_FORM_FIVE, SEQUENTIAL_FORM_THREE } from "../../../../../constants/Slider";

configure({ adapter: new Adapter() });

const mockCallNextSlide = jest.fn();

const DEFAULT_PROPS = {
  budgetOptions: {
    budget: 5500,
    deluxe: 6500,
    min: 5000,
    standard: 6000
  },
  getSelectedBudget: '',
  input: {
    name: 'budet',
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
    ],
    other_answers_attributes: [
      null,
      {
        option_id: '100',
        customization_id: '24'
      }
    ],
    flight_answer_attributes: {
      option_id: '98',
      customization_id: '23'
    }
  },
  callNextSlide: mockCallNextSlide

}
const shallowWrapperBudgetSlider = (props) => {
  return shallow(<BudgetSlider {...props} />);
};

describe('lead form module', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperBudgetSlider(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render budgetOptions', () => {
    const wrapper = shallowWrapperBudgetSlider(props);
    expect(wrapper.find(BudgetOptions)).toHaveLength(1);
    expect(wrapper.find(DefaultBudgetOptions)).toHaveLength(0);
  });

  it('should render defaultBudgetOptions', () => {
    props.budgetOptions = {};
    const wrapper = shallowWrapperBudgetSlider(props);
    expect(wrapper.find(DefaultBudgetOptions)).toHaveLength(1);
    expect(wrapper.find(BudgetOptions)).toHaveLength(0);
  });

  it('should call goBack properly', () => {
    const expected_input = {
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_THREE,
      isBackButton: true
    };
    const wrapper = shallowWrapperBudgetSlider(props);
    wrapper.instance().goBack();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });

  it('should call goBack properly', () => {
    const expected_input = {
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_FIVE,
    };
    const wrapper = shallowWrapperBudgetSlider(props);
    wrapper.instance().goForward();
    expect(mockCallNextSlide).toHaveBeenCalledWith(expected_input);
  });

});
