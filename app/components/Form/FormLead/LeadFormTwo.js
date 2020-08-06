import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import HotelRating from './HotelRating';
import FlightBooking from './FlightBookSlider';
import BudgetWithAirfair from './BudgetSlider';
import TravelerCount from './TravelerCount';
import WillBook from './WillBook';
import BackButton from './BackButton';
import NextButton from './NextButton';
import { requiredWithmessage } from '../../../utils/formValidators';
import {
  SLIDER_1,
  SLIDER_3,
  SET_DISPLAY_MODE,
  VARIATION_2, FORM_ONE_PART_ONE, FORM_ONE_PART_TWO
} from '../../../constants/Slider';

const defaultFields = ({ input }) =>
  <input type="text" {...input} />;

defaultFields.propTypes = {
  input: PropTypes.object.isRequired
};

class LeadFormTwo extends Component {
  componentDidMount() {
    const param = {
      funnel_step: 6,
      section: 'Form 2',
      object: '',
      cta: '',
      to_loc: this.props.formValues && this.props.formValues.to_loc ? this.props.formValues.to_loc : '',
      funnel_uuid: this.props.commonProperties.redisKey,
      formType: this.props.formType
    };
  }

  render() {
    const { location: { query }, commonProperties : { sliderDisplayMode } } = this.props;
    return (
      <div className="lead-form-three lead-form-transform clearfix lead-form-transform pb0 pt8 relative">
        <div className="lead-form-three-height relative">
          <p className="f20 fwb lead-form-title pl15 pr15 text-center ">{this.props.sliderTitle}</p>
          <div className="form-field-label p15 pb8">
            <div className="row row- ">
              <Field
                component={HotelRating}
                name="hotel_category_answers_attributes"
                dispatchRxFormAction={this.props.dispatchRxFormAction}
                formValues={this.props.formValues}
                validate={requiredWithmessage('Hotel field must be selected')}
              />
            </div>
          </div>
          <div className="form-part form-field-label p15 ">
            <div className="row row- at_flightincluded pl0 pr0">
              <Field
                component={FlightBooking}
                name="flight_answer_attributes"
                formValues={this.props.formValues}
              />
            </div>
          </div>
          <div className="form-part form-part form-field-label p15 pb0 at_budget">
            <Field
              component={BudgetWithAirfair}
              name="budget"
              budget_info={this.props.sliderQuestions.budget_info}
              budgetOptions={this.props.getBudgetOptions}
              getSelectedBudget={this.props.getSelectedBudget}
              isFlightSelected={this.props.isFlightSelected}
            />
          </div>
          <div className="form-part form-field-label p15 pb8 at_travelercount">
            <div className="row row-">
              <Field
                component={TravelerCount}
                name="traveler_count"
                formValues={this.props.formValues}
                dispatchRxFormAction={this.props.dispatchRxFormAction}
              />
            </div>
          </div>
          <div className="form-part form-field-label p15 at_willbook">
            <div className="row row- sbcw">
              <Field
                component={WillBook}
                name="other_answers_attributes[0]"
                formValues={this.props.formValues}
              />
            </div>
          </div>
          <div className="hide">
            <Field
              name="adult"
              component={defaultFields}
            />
            <Field
              name="child_age_answers_attributes"
              component={defaultFields}
            />
            <Field
              name="child"
              component={defaultFields}
            />
            <Field
              name="hotel_needed_answer_attributes"
              component={defaultFields}
            />
          </div>
          <div className="form-part form-field-label p15 wfull lead-form-one-btn">
            <div className="row row- at_leadformbtns">
              <div className="col-xs-4 p0">
                <BackButton
                  handleClick={() => {
                    this.props.updateFields({
                      type: SET_DISPLAY_MODE,
                      value: SLIDER_1,
                    });
                    this.props.openFormState(SLIDER_1);
                  }}
                />
              </div>
              <div className="col-xs-4" />
              <div className="col-xs-4 p0">
                <NextButton
                  handleClick={() => {
                    this.props.asynValidate(
                      this.props.formValues,
                      false,
                      SLIDER_3,
                      true
                    );
                    this.props.openFormState(SLIDER_3);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeadFormTwo.propTypes = {
  sliderQuestions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  updateFields: PropTypes.func.isRequired,
  dispatchRxFormAction: PropTypes.func.isRequired,
  formValues: PropTypes.object,
  getBudgetOptions: PropTypes.object,
  getSelectedBudget: PropTypes.string,
  isFlightSelected: PropTypes.bool,
  sliderTitle: PropTypes.string,
  asynValidate: PropTypes.func.isRequired,
  commonProperties: PropTypes.object.isRequired,
  openFormState: PropTypes.func,
  formType: PropTypes.string
};

LeadFormTwo.defaultProps = {
  formValues: {},
  getBudgetOptions: {},
  getSelectedBudget: '',
  isFlightSelected: false,
  sliderTitle: 'Great! Tell Us What You Prefer',
  openFormState: value => value,
  formType: 'Slider Close'
};

export default LeadFormTwo;
