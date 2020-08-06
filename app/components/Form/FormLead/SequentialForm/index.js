/* eslint-disable */
import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import FromLocation from '../../FromLocation';
import DepartureDateFormOne from './leadForm/DepartureDateFormOne';
import {
  SET_DISPLAY_MODE,
  SEQUENTIAL_FORM_ONE,
  SEQUENTIAL_FORM_TWO,
  SEQUENTIAL_FORM_THREE,
  SEQUENTIAL_FORM_FOUR,
  SEQUENTIAL_FORM_FIVE,
  SEQUENTIAL_FORM_SIX,
  SEQUENTIAL_FORM_SEVEN,
  SEQUENTIAL_FORM_END
} from '../../../../constants/Slider';
import BudgetWithAirfair from './leadForm/BudgetSlider';
import 'app/theme/SequentialForm.scss';
import {
  requiredWithmessage,
} from '../../../../utils/formValidators';
import StartPlanning from "./leadForm/StartPlanning";
import Inclusions from "./leadForm/Inclusions";
import ContactDetails from "./leadForm/ContactDetails";
import AdditionalDetails from "./leadForm/AdditionalDetails";
import TravelerCount from './leadForm/TravelerCount';
import { useQuery } from 'containers/Listing/parseFilters';

const progressBar = (formStage, isDeal) => (
  <div className="progress-bar-container flex">
    {[...Array(isDeal ? 5 : 7)].map((e, i) => (
      <span className={`progress-indicator ${(i <= formStage - 1) ? 'active' : ''}`} key={i} />
    ))}
  </div>
);

class SequentialForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionCount: 1,
      email: props.email ? props.email : ''
    };
  }

  componentDidMount() {
    if (this.props.email) {
      this.props.dispatchRxFormAction(this.props.email, 'email');
    }
  }

  handlFormInteraction = () => {
    const { interactionCount } = this.state;
    if (interactionCount === 1) {
      this.setState({
        interactionCount: interactionCount + 1
      });
    }
  };

  callNextSlide = ({ submitVariation, variation, variationStep, isBackButton }) => {
    if (isBackButton) {
      this.props.updateFields({
        type: SET_DISPLAY_MODE,
        value: variationStep,
      });
      this.props.openFormState(variationStep);
    } else {
      this.props.asynValidate(
        this.props.formValues,
        submitVariation,
        variationStep,
        true,
        variation,
        variationStep
      );
    }
  };

  render() {
    const {
      sliderDisplayMode,
      sliderQuestions,
      commonProperties,
      location
    } = this.props;

    const { search } = location;
    const query = useQuery(search);

    const isDeal = query.deals;

    return (
      <div className="sequential-form-container">
        {progressBar(this.props.progressBarCount, isDeal)}
        <div className="mb64">
          {sliderDisplayMode === SEQUENTIAL_FORM_ONE && (
            <StartPlanning
              requiredWithmessage={requiredWithmessage}
              handlFormInteraction={this.handlFormInteraction}
              handleBlur={this.props.handleBlur}
              FromLocation={FromLocation}
              asynValidate={this.props.asynValidate}
              callNextSlide={this.callNextSlide}
              changeFormField={this.props.changeFormField}
              formValues={this.props.formValues}
            />
          )}
          {sliderDisplayMode === SEQUENTIAL_FORM_TWO && (
            <div className="p15 mb1 relative">
              <div className="row row-">
                <Field
                  name="start_date"
                  component={DepartureDateFormOne}
                  placeholder="DD / MM / YY"
                  type="text"
                  label="Departure Date"
                  dispatchRxFormAction={this.props.dispatchRxFormAction}
                  formValues={this.props.formValues}
                  days={this.props.days}
                  validate={requiredWithmessage(
                    'Please select One Date-type'
                  )}
                  rtData={this.props.rtData}
                  callNextSlide={this.callNextSlide}
                  location={location}
                />
              </div>
            </div>
          )}
          {sliderDisplayMode === SEQUENTIAL_FORM_THREE && (
            <Inclusions
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              formValues={this.props.formValues}
              callNextSlide={this.callNextSlide}
              sliderQuestions={sliderQuestions}
              commonProperties={commonProperties}
              touch={this.props.touch}
              location={location}
            />
          )}
          {sliderDisplayMode === SEQUENTIAL_FORM_FOUR && (
            <Field
              component={BudgetWithAirfair}
              formValues={this.props.formValues}
              name="budget"
              budget_info={this.props.sliderQuestions.budget_info}
              budgetOptions={this.props.getBudgetOptions}
              getSelectedBudget={this.props.getSelectedBudget}
              isFlightSelected={this.props.isFlightSelected}
              callNextSlide={this.callNextSlide}
            />
          )}
          {sliderDisplayMode === SEQUENTIAL_FORM_FIVE && (
            <Field
              component={TravelerCount}
              name="traveler_count"
              formValues={this.props.formValues}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              callNextSlide={this.callNextSlide}
              location={location}
            />
          )}
          {sliderDisplayMode === SEQUENTIAL_FORM_SIX && (
            <ContactDetails
              formValues={this.props.formValues}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              callNextSlide={this.callNextSlide}
              handleEmailChange={this.props.handleEmailChange}
              email={this.props.email}
              location={location}
            />
          )}
          {(sliderDisplayMode === SEQUENTIAL_FORM_SEVEN  || sliderDisplayMode === SEQUENTIAL_FORM_END) && (
            <AdditionalDetails
              commonProperties={this.props.commonProperties}
              sliderQuestions={this.props.sliderQuestions}
              formValues={this.props.formValues}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              callNextSlide={this.callNextSlide}
              handleThankYou={this.props.handleThankYou}
            />
          )}
        </div>
      </div>
    );
  }
}

SequentialForm.propTypes = {
  dispatchRxFormAction: PropTypes.func.isRequired,
  touch: PropTypes.func.isRequired,
  rtData: PropTypes.object,
  handleBlur: PropTypes.func.isRequired,
  getBudgetOptions: PropTypes.object,
  changeFormField: PropTypes.func,
  handleThankYou: PropTypes.func,
  openFormState: PropTypes.func,
  handleEmailChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  formValues: PropTypes.object,
  sliderQuestions: PropTypes.object,
  location: PropTypes.object.isRequired,
  commonProperties: PropTypes.object,
  isFlightSelected: PropTypes.bool,
  progressBarCount: PropTypes.number,
};

SequentialForm.defaultProps = {
  rtData: {},
  email: '',
  formValues: {}
};

export default SequentialForm;
