import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Contact } from 'helpers/Icon/Icon';
import { Field } from 'redux-form';
import {
  email,
  requiredWithmessage,
  phoneNumberRequired
} from '../../../../../utils/formValidators';
import {
  renderPhone,
  renderEmail,
  genericCheckbox,
} from '../../FormOneVariation';
import {
  SEQUENTIAL_FORM_FIVE, SEQUENTIAL_FORM_TWO, SEQUENTIAL_FORM_SEVEN, SEQUENTIAL_FORM_THREE,
} from '../../../../../constants/Slider';
import Footer from '../footer';

class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email || '',
    };
  }

  goBack = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_FIVE,
      isBackButton: true
    });
  };

  goForward = () => {
    this.props.callNextSlide({
      submitVariation: true,
      variation: true,
      variationStep: SEQUENTIAL_FORM_SEVEN
    });
  };

  render() {
    const { formValues } = this.props;
    const goNextDisabled = formValues.email && formValues.phone_no ? false : true;

    return (
      <div className="form-body pt15">
        <div className="contact-icon-container">
          <Contact />
        </div>
        <div className="p15">
          <div className="pb8">
          <Field
            name="email"
            component={renderEmail}
            placeholder="Email"
            type="email"
            label="Email ID"
            validate={[
              requiredWithmessage('Enter valid email id'),
              email,
            ]}
            changeHandler={e => {
              this.setState({ email: e.target.value });
              this.props.handleEmailChange();
            }}
            emailVal={this.state.email}
          />
          </div>
          <Field
            name="phone_no"
            component={renderPhone}
            placeholder="Phone"
            type="number"
            label="Phone No"
            validate={phoneNumberRequired}
            defaultValue={
              this.props.formValues && this.props.formValues.isd_code
                ? this.props.formValues.isd_code
                : ''
            }
            isFocus={!goNextDisabled}
          />
          <Field
            name="whatsapp_opt_status"
            component={genericCheckbox}
            type="checkbox"
            label="Send trip updates on WhatsApp"
            className="checkbox-common sfcw"
            id="whatsapp_opt_status"
            classname="at_whatsapp_opt_status"
            formValues={this.props.formValues}
          />
        </div>
        <Footer goBack={this.goBack} goForward={this.goForward} goNextDisabled={goNextDisabled}/>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  formStage: PropTypes.number,
  formValues: PropTypes.object,
  location: PropTypes.object,
  handleEmailChange: PropTypes.func,
  callNextSlide: PropTypes.func,
  email: PropTypes.string,
  progressBar: PropTypes.func
};

export default ContactDetails;
