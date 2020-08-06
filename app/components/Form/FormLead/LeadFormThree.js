import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import CabforSightseeing from './CabforSightseeing';
import TypeTour from './TypeTour';
import CabDependentQuestion from './CabDependentQuestion';
import LocalExperience from './LocalExperience';
import LeadFormSubmitButton from './LeadFormSubmitButton';
import AdditionalPrefrences from './AdditionalPrefrences';
import BackButton from './BackButton';
import { SLIDER_2, SET_DISPLAY_MODE } from '../../../constants/Slider';
import { getNameType } from '../../../reducers/formOneLead';

export function getQuestions(sliderQuestions, toDestination) {
  try {
    const defaultQs = [...sliderQuestions.defaultLastCardQuestions[0].questions,
      ...sliderQuestions.destinationCardQuestions[toDestination.toLowerCase()].questions
    ];
    return defaultQs.sort((q1, q2) => q1.questionSequence - q2.questionSequence);
  } catch (e) {
    return sliderQuestions.defaultLastCardQuestions && sliderQuestions.defaultLastCardQuestions[0].questions;
  }
}

export function checkCabDependentQuestion(formValues) {
  try {
    return formValues.other_answers_attributes.filter(obj => obj.option_id === '99').length > 0;
  } catch (e) {
    return false;
  }
}

class LeadFormThreeElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCabSelected: checkCabDependentQuestion(props.formValues)
    };
    this.cabQuestionHandler = this.cabQuestionHandler.bind(this);
  }

  componentDidMount() {
    const param = {
      funnel_step: 9,
      section: 'Form 3',
      object: '',
      cta: '',
      to_loc: this.props.commonProperties.properties.toDestination,
      funnel_uuid: this.props.commonProperties.redisKey,
      formType: this.props.formType
    };
  }

  cabQuestionHandler(val) {
    this.setState({
      isCabSelected: val === '99'
    });
  }

  render() {
    const toDestination = this.props.commonProperties.properties.toDestination;
    const questions = getQuestions(this.props.sliderQuestions, toDestination);
    return (
      <div className="lead-form-three clearfix lead-form-transform pb0 pt8 relative">
        <div className="lead-form-three-height relative">
          <p className="f20 fwb text-center lead-form-title">{this.props.sliderTitle}</p>
          {
            questions.map((question, index) => {
              switch (question.templateType) {
                case 'radio_button':
                  if (question.customizationTags === 'cab') {
                    return (
                      <div className="form-field-label p15" key={question.id}>
                        <div className="row row-">
                          <Field
                            component={CabforSightseeing}
                            question={question}
                            name={getNameType(question, index)}
                            cabQuestionHandler={this.cabQuestionHandler}
                          />
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="form-part form-field-label p15 pb8" key={question.id}>
                      <div className="row row-">
                        <Field
                          component={TypeTour}
                          question={question}
                          name={getNameType(question, index)}
                          nameForClear={getNameType(question, index)}
                        />
                      </div>
                    </div>
                  );

                case 'drop_down':
                  if (question.identifier === 'cust_3' && this.state.isCabSelected) {
                    return (
                      <div className="form-part form-field-label p15 pb8" key={question.id}>
                        <div className="row row-">
                          <Field
                            component={CabDependentQuestion}
                            question={question}
                            name={getNameType(question, index)}
                            nameForClear={getNameType(question, index)}
                            commonProperties={this.props.commonProperties}
                          />
                        </div>
                      </div>
                    );
                  } else if (question.identifier !== 'cust_3') {
                    return (
                      <div className="form-part form-field-label p15 pb8" key={question.id}>
                        <div className="row row-">
                          <Field
                            component={TypeTour}
                            question={question}
                            name={getNameType(question, index)}
                            nameForClear={getNameType(question, index)}
                          />
                        </div>
                      </div>
                    );
                  }
                  return null;

                case 'text_area':
                  return (
                    <div className="form-part form-field-label p15" key={question.id}>
                      <div className="row row-">
                        <Field
                          component={AdditionalPrefrences}
                          question={question}
                          name={getNameType(question, index)}
                          type="text"
                        />
                      </div>
                    </div>
                  );

                case 'checkbox':
                  return (
                    <div className="form-part form-field-label p15 pb5" key={question.id}>
                      <div className="row row-">
                        <Field
                          component={LocalExperience}
                          name={getNameType(question, index)}
                          question={question}
                          nameForClear={getNameType(question, index)}
                        />
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })
          }
          <div className="form-part form-field-label p15 sbcw wfull lead-form-one-btn">
            <div className="row row-">
              <div className="col-xs-4 p0">
                <BackButton
                  handleClick={() => {
                    this.props.updateFields({
                      type: SET_DISPLAY_MODE,
                      value: SLIDER_2
                    });
                    this.props.openFormState(SLIDER_2);
                  }}
                />
              </div>
              <div className="col-xs-2" />
              <div className="col-xs-6 p0">
                <LeadFormSubmitButton
                  handleClick={() => {
                    this.props.handleThankYou();
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

LeadFormThreeElement.propTypes = {
  sliderQuestions: PropTypes.object.isRequired,
  updateFields: PropTypes.func.isRequired,
  commonProperties: PropTypes.object.isRequired,
  formValues: PropTypes.object,
  sliderTitle: PropTypes.string,
  handleThankYou: PropTypes.func.isRequired,
  openFormState: PropTypes.func,
  formType: PropTypes.string,
};

LeadFormThreeElement.defaultProps = {
  formValues: {},
  sliderTitle: 'Almost Done!',
  openFormState: value => value,
  formType: 'Slider Close',
};

export default LeadFormThreeElement;
