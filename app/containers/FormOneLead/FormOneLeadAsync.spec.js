import React from 'react';
import Adapter from 'enzyme-adapter-react-16/build';
import { configure, shallow } from 'enzyme';

import { FormOneLeadAsync, getReferer } from './FormOneLeadAsync';
import { DEFAULT_PROPS, mockDispatch, mockRequestLoad, mockCheckErrors, expected_output } from './testData';
import LeadFormTwo from 'components/Form/FormLead/LeadFormTwo';
import LeadFormThree from 'components/Form/FormLead/LeadFormThree';
import FormVariation from 'components/Form/FormLead/FormOneVariation';
import {
  SLIDER_1,
  SLIDER_2,
  SLIDER_3,
  SEQUENTIAL_FORM_ONE,
  SEQUENTIAL_FORM_TWO,
  SEQUENTIAL_FORM_THREE,
  SEQUENTIAL_FORM_FOUR,
  SEQUENTIAL_FORM_FIVE,
  SEQUENTIAL_FORM_SIX,
  SEQUENTIAL_FORM_SEVEN,
  SEQUENTIAL_FORM_END, DEALS
} from 'constants/Slider';
import * as dependency  from 'actions/segmentEvents';

configure({ adapter: new Adapter() });

const shallowWrapperFormOneLead = (props) => {
  return shallow(<FormOneLeadAsync  {...props} />, {disableLifecycleMethods: true});
};

describe('FormOneLeadAsync component', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render FormOneLeadAsync', () => {
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render SLIDER-1 form', () => {
    props.commonProperties.sliderDisplayMode = SLIDER_1;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find(FormVariation)).toHaveLength(1);
    wrapper.instance().asynValidate(props.formValues, true, SLIDER_1, true, false, SEQUENTIAL_FORM_FOUR );
  });

  it('should render SLIDER-2 form', () => {
    props.commonProperties.sliderDisplayMode = SLIDER_2;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find(LeadFormTwo)).toHaveLength(1);
    wrapper.instance().asynValidate(props.formValues, true, SLIDER_2, true, false, SEQUENTIAL_FORM_FOUR );
  });

  it('should render SLIDER-3 form', () => {
    props.commonProperties.sliderDisplayMode = SLIDER_3;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find(LeadFormThree)).toHaveLength(1);
    wrapper.instance().asynValidate(props.formValues, true, SLIDER_3, true, false, SEQUENTIAL_FORM_FOUR );
  });

  it('should render Default form', () => {
    props.commonProperties.sliderDisplayMode = 10;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find(FormVariation)).toHaveLength(1);
  });

  it('should have heading Start Planning', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_ONE;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Start Planning');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_ONE );
  });

  it('should have heading Select Departure Date', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_TWO;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Select Departure Date');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_TWO );
  });

  it('should have heading Select Inclusions', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_THREE;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Select Inclusions');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_THREE );
  });

  it('should have heading Start Planning', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_FOUR;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Set Budget(without airfare)');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_FOUR );
  });

  it('should have heading Add Travelers', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_FIVE;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Add Travelers');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_FIVE );
  });

  it('should have heading Share Contact Details', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_SIX;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Share Contact Details');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_SIX );
  });

  it('should have heading Additional Details', () => {
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_SEVEN;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Additional Details');
    wrapper.instance().checkErrors = mockCheckErrors;
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_ONE, true, true, SEQUENTIAL_FORM_TWO );
  });

  it('should have called SEQUENTIAL_FORM_END', () => {
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().checkErrors = mockCheckErrors;
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_ONE, true, true, SEQUENTIAL_FORM_END );
  });

  it('should have handled deals case', () => {
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().checkErrors = mockCheckErrors;
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_ONE, true, true, DEALS );
  });

  it('should have variation in query', () => {
    props.location.query = {
      variation : '3'
    };
    props.commonProperties.sliderDisplayMode = SEQUENTIAL_FORM_SEVEN;
    const wrapper = shallowWrapperFormOneLead(props);
    expect(wrapper.find('.at_sequential_title').text()).toEqual('Additional Details');
    wrapper.instance().asynValidate(props.formValues, true, SEQUENTIAL_FORM_SIX, true, true, SEQUENTIAL_FORM_SEVEN );
  });

  it('should render SLIDER-1', () => {
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().asynValidate(props.formValues, true, SLIDER_1, true, false, SEQUENTIAL_FORM_SEVEN );
  });

  it('should call dispatchRxFormAction in FormOneLeadAsync', () => {
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().dispatchRxFormAction('abcd@gmail.com', 'email');
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call submitForm for middle forms in FormOneLeadAsync when form is submitted', () => {
    dependency.trackSegment = jest.fn();
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().submitForm(props.formValues, false, SEQUENTIAL_FORM_SEVEN);
    expect(mockRequestLoad).toHaveBeenCalled();
  });

  it('should call submitForm for last form in FormOneLeadAsync when form is submitted', () => {
    dependency.trackSegment = jest.fn();
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().submitForm(props.formValues, true, SLIDER_3);
    expect(mockRequestLoad).toHaveBeenCalled();
  });

  it('should call submitForm for last form in FormOneLeadAsync when rediskey is null', () => {
    dependency.trackSegment = jest.fn();
    props.commonProperties.redisKey = null;
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().submitForm(props.formValues, true, SLIDER_3);
    expect(mockRequestLoad).toHaveBeenCalled();
  });

  it('should call setClientSideRenderingFlag', () => {
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().setClientSideRenderingFlag();
    expect(wrapper.state('clientSideRenderingFlag')).toEqual(true);
  });

  it('should call correctStartDateValues', () => {
    props.formValues.start_date_noidea = true;
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().correctStartDateValues();
  });

  it('should call checkErrors', () => {
    props.formValues.start_date_noidea = true;
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().checkErrors();
    expect(mockCheckErrors).toHaveBeenCalled();
  });

  it('should call submit form when enabledForSubmit is true and next slide is SEQUENTIAL_FORM_END', () => {
    dependency.trackSegment = jest.fn();
    props.commonProperties.redisKey = 123;
    const wrapper = shallowWrapperFormOneLead(props);
    wrapper.instance().submitForm(props.formValues, true, SEQUENTIAL_FORM_END);
    expect(mockRequestLoad).toHaveBeenCalled();
    expect(dependency.trackSegment).toHaveBeenCalledWith(expected_output);
  });

  it('should correct return from getreferer function when tag is luxury in location', () => {
    const location = {
      query: {
        deals: true,
        tag: 'luxury'
      }
    };
    const packageId = '1087'
    expect(getReferer(location,packageId)).toEqual('direct::LUXURY::packageId=1087');
  });

  it('should correct return from getreferer function when tag is deals in location', () => {
    const location = {
      query: {
        deals: true,
        tag: 'deals'
      }
    };
    const packageId = '1087'
    expect(getReferer(location,packageId)).toEqual('direct::DEALS::packageId=1087');
  });

  it('should correct return from getreferer function when there is no tag', () => {
    const location = {
      query: {}
    };
    const packageId = '1087'
    expect(getReferer(location,packageId)).toEqual('direct');
  });

});
