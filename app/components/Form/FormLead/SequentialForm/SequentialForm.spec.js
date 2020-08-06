import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { data } from './testData';
import SequentialForm from './index';
import {
  SEQUENTIAL_FORM_FIVE,
  SEQUENTIAL_FORM_FOUR,
  SEQUENTIAL_FORM_ONE, SEQUENTIAL_FORM_SEVEN,
  SEQUENTIAL_FORM_SIX,
  SEQUENTIAL_FORM_THREE,
  SEQUENTIAL_FORM_TWO
} from "../../../../constants/Slider";
import { mockCheckErrors } from "../../../../containers/FormOneLead/testData";
import StartPlanning from "./leadForm/StartPlanning";
import Inclusions from "./leadForm/Inclusions";
import ContactDetails from "./leadForm/ContactDetails";
import AdditionalDetails from "./leadForm/AdditionalDetails";
import TravelerCount from './leadForm/TravelerCount';
import DepartureDateFormOne from "./leadForm/DepartureDateFormOne";
import BudgetWithAirfair from "./leadForm/BudgetSlider";

configure({ adapter: new Adapter() });

const shallowWrapperSequentialForm = (props) => {
  return shallow(<SequentialForm {...props} />);
};

describe('lead form SequentialForm module', () => {

  let props = { ...data };

  afterEach(() => {
    props = { ...data };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperSequentialForm(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have heading Start Planning', () => {
    props.sliderDisplayMode = SEQUENTIAL_FORM_ONE;
    const wrapper = shallowWrapperSequentialForm(props);
    expect(wrapper.find(StartPlanning)).toHaveLength(1);
  });

  // it('should render DateRange', () => {
  //   props.sliderDisplayMode = SEQUENTIAL_FORM_TWO;
  //   const wrapper = shallowWrapperSequentialForm(props);
  //   expect(wrapper.find(DateRange)).toHaveLength(1);
  // });

  it('should render Inclusions', () => {
    props.sliderDisplayMode = SEQUENTIAL_FORM_THREE;
    const wrapper = shallowWrapperSequentialForm(props);
    expect(wrapper.find(Inclusions)).toHaveLength(1);
  });

  // it('should render BudgetWithAirfair', () => {
  //   props.sliderDisplayMode = SEQUENTIAL_FORM_FOUR;
  //   const wrapper = shallowWrapperSequentialForm(props);
  //   expect(wrapper.find(BudgetWithAirfair)).toHaveLength(1);
  // });
  //
  // it('should render TravelerCount', () => {
  //   props.sliderDisplayMode = SEQUENTIAL_FORM_FIVE;
  //   const wrapper = shallowWrapperSequentialForm(props);
  //   expect(wrapper.find(TravelerCount)).toHaveLength(1);
  // });

  it('should render ContactDetails', () => {
    props.sliderDisplayMode = SEQUENTIAL_FORM_SIX;
    const wrapper = shallowWrapperSequentialForm(props);
    expect(wrapper.find(ContactDetails)).toHaveLength(1);
  });

  it('should render AdditionalDetails', () => {
    props.sliderDisplayMode = SEQUENTIAL_FORM_SEVEN;
    const wrapper = shallowWrapperSequentialForm(props);
    expect(wrapper.find(AdditionalDetails)).toHaveLength(1);
  });


});
