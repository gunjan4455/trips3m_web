import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HotelRating from "./HotelRating";
import { requiredWithmessage } from "../../../../../utils/formValidators";
import { Field } from "redux-form";
import FlightBooking from './FlightBookSlider';
import {
  SEQUENTIAL_FORM_TWO,
  SEQUENTIAL_FORM_FOUR,
  SEQUENTIAL_FORM_SIX
} from "../../../../../constants/Slider";
import Footer from "../footer";
import CabforSightseeing from './CabforSightseeing';

const question = {
  customizationId: 24,
  customizationTags: "cab",
  description: "",
  hasOthers: false,
  id: 136,
  identifier: "cust_24",
  jsonValueType: "hash",
  options: [
    {
      id: '99',
      misc: "",
      name: "Yes",
      tags: "",
      url: ""
    },
    {
      id: '100',
      misc: "",
      name: "No",
      tags: "",
      url: ""
    }],
  questionSequence: 1,
  railsFormName: "other_answers_attributes",
  templateId: "1",
  templateType: "radio_button",
  title: "Cab for local sightseeing?",
  useInputForOptions: false,
  valueType: "single_value"
};


class Inclusions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHotelSelected: this.selectHotel(props)
    };
  }

  goBack = () => {
    const { location : { query } } = this.props;

    let step = SEQUENTIAL_FORM_TWO;
    if(query.variation === '3') {
      step = SEQUENTIAL_FORM_TWO;
    }else if(query.variation === '4') {
      step = SEQUENTIAL_FORM_SIX;
    }
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: step,
      isBackButton: true
    });
  };

  goForward = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_FOUR
    });
  };

  handleHotelChange = () => {
    this.setState({ isHotelSelected: !this.state.isHotelSelected }, () => {
      const hotel = document.getElementById('No-hotel');
      hotel.click();
    });
  };

  selectHotel = (props) => {
    const { formValues } = props;
    if(formValues.hotel_category_answers_attributes &&
      formValues.hotel_category_answers_attributes.length &&
      formValues.hotel_needed_answer_attributes &&
      formValues.hotel_needed_answer_attributes.option_id !== '96') {
      return true;
    }
    return false;
  };

  render() {
    const { isHotelSelected } = this.state;
    const { formValues } = this.props;
    const goNextDisabled = !(formValues.hotel_needed_answer_attributes ||
      formValues.hotel_category_answers_attributes);

    return (
      <div className="form-body">
        <div className="p15">
          <Field
            component={HotelRating}
            name="hotel_category_answers_attributes"
            dispatchRxFormAction={this.props.dispatchRxFormAction}
            formValues={this.props.formValues}
            validate={requiredWithmessage('Hotel field must be selected')}
            isHotelSelected={isHotelSelected}
            touch={this.props.touch}
          />
          <h3 className="fw9 iblock m0 pfc3 mb8 f14">Select other inclusions</h3>
          <div className="flex spaceBetween mb24 flexWrap">
            <Field
              component={FlightBooking}
              name="flight_answer_attributes"
              formValues={this.props.formValues}
            />
            <Field
              component={CabforSightseeing}
              question={question}
              name="other_answers_attributes[1]"
              formValues={this.props.formValues}
            />
          </div>
        </div>
        <Footer goBack={this.goBack} goForward={this.goForward} goNextDisabled={goNextDisabled} />
      </div>
    );
  }
}

Inclusions.propTypes = {
  formStage: PropTypes.number,
  dispatchRxFormAction: PropTypes.func,
  touch: PropTypes.func,
  callNextSlide: PropTypes.func,
  formValues:  PropTypes.object,
  location:  PropTypes.object,
  commonProperties: PropTypes.obj,
  meta: PropTypes.obj,
  progressBar: PropTypes.func
};

export default Inclusions;
