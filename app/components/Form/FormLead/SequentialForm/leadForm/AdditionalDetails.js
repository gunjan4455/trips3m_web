import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import WillBook from './WillBook';
import AdditionalPrefrences from '../../AdditionalPrefrences';
import { SEQUENTIAL_FORM_SIX, SEQUENTIAL_FORM_END } from '../../../../../constants/Slider';
import Footer from '../footer';
import { getNameType } from "../../../../../reducers/formOneLead";
import TypeTour from "../../TypeTour";
import CabDependentQuestion from "../../CabDependentQuestion";
import LocalExperience from "../../LocalExperience";
import { getQuestions, checkCabDependentQuestion } from '../../LeadFormThree';

const question = {
  customizationId: 132,
  customizationTags: null,
  description: 'Hotel names if you have already decided, Special considerations, e.g. kid friendly, Arrival and departure date / time, if tickets booked?',
  hasOthers: false,
  id: 137,
  identifier: 'additional_prefs',
  jsonValueType: 'input',
  questionSequence: 100,
  railsFormName: 'info',
  templateId: '10',
  templateType: 'text_area',
  title: 'Additional requirements',
  valueType: 'single_value',
};

class AdditionalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCabSelected: checkCabDependentQuestion(props.formValues)
    };
  }

  goBack = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_SIX,
      isBackButton: true
    });
  };

  goForward = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_END,
    });
    //this.props.handleThankYou();
  };

  render() {
    const toDestination = this.props.commonProperties && this.props.commonProperties.properties &&
      this.props.commonProperties.properties.toDestination;
    const questions = getQuestions(this.props.sliderQuestions, toDestination);
    return (
      <div className="form-body">
        <div className="p15">
          <Field
            component={WillBook}
            name="other_answers_attributes[0]"
            formValues={this.props.formValues}
            className="mb15"
          />
          {
            questions.map((question, index) => {
              switch (question.templateType) {
                case 'radio_button':
                  if (question.customizationTags === 'cab') {
                    return null;
                  }
                  return (
                    <div className="row row- mb15" key={question.id}>
                      <Field
                        component={TypeTour}
                        question={question}
                        name={getNameType(question, index)}
                        nameForClear={getNameType(question, index)}
                      />
                    </div>
                  );

                case 'drop_down':
                  if (question.identifier === 'cust_3' && this.state.isCabSelected) {
                    return (
                      <div className="row row- mb15" key={question.id}>
                        <Field
                          component={CabDependentQuestion}
                          question={question}
                          name={getNameType(question, index)}
                          nameForClear={getNameType(question, index)}
                          commonProperties={this.props.commonProperties}
                        />
                      </div>
                    );
                  } else if (question.identifier !== 'cust_3') {
                    return (
                      <div className="row row- mb15" key={question.id}>
                        <Field
                          component={TypeTour}
                          question={question}
                          name={getNameType(question, index)}
                          nameForClear={getNameType(question, index)}
                        />
                      </div>
                    );
                  }
                  return null;

                case 'text_area':
                  return null;

                case 'checkbox':
                  return (
                      <div className="row row- mb15 local-experience-container" key={question.id}>
                        <Field
                          component={LocalExperience}
                          name={getNameType(question, index)}
                          question={question}
                          nameForClear={getNameType(question, index)}
                        />
                      </div>
                  );
                default:
                  return null;
              }
            })
          }
          <Field
            component={AdditionalPrefrences}
            question={question}
            name="info"
            type="text"
          />
        </div>
        <Footer goBack={this.goBack} goForward={this.goForward} isLastSlide={true} />
      </div>);
  }
};

AdditionalDetails.propTypes = {
  formStage: PropTypes.number,
  formValues: PropTypes.obj,
  question: PropTypes.obj,
  commonProperties: PropTypes.obj,
  sliderQuestions: PropTypes.obj,
  callNextSlide: PropTypes.func,
  handleThankYou: PropTypes.func,
  progressBar: PropTypes.func
};

export default AdditionalDetails;
