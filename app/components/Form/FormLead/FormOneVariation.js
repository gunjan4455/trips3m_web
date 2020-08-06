/* eslint-disable */
/* eslint-disable react/prop-types, quotes, react/no-array-index-key */
import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import FromLocation from '../FromLocation';
import FromLocationSearch from '../FromLocationSearch';
import DepartureDateFormOne from '../DepartureDateFormOne';
import { SLIDER_2, SLIDER_1, DEALS } from "../../../constants/Slider";
import IsdCodes from '../../Generic/IsdCodes';

import './LeadForm.scss';

import {
  LocationMarkerIcon,
  ContactIcon,
  CalendarIcon,
  DownArrow,
  LockIcon,
  WhatsAppIcon
} from 'helpers/Icon/Icon';

import {
  email,
  phoneNumber,
  requiredWithmessage
} from '../../../utils/formValidators';

export const renderToLocation = ({
                                   input,
                                   label, type, meta: { touched, error, warning },
                                   trackFormOneInteracted,
                                   onToLocFocus,
                                   handleBlur
                                 }) => {
  const inputProps = {
    value: input.value,
    placeholder: "Where Do You Want To Go?",
    onChange: (obj, check = true) => {
      input.onChange(obj);
      if (check) {
        this.props.handleBlur();
      }
    },
    id: input.id,
  };

  return (
    <div className="form-field-label">
      <label htmlFor={label} className="f14 fw9 pb15 block">
        {label}<em className='pfc2'>*</em>
      </label>
      <div className="row row-">
        <div className={`input-with-icon-box input-with-icon-box ${touched && (error && "input-error")}`}>
          <span className="input-icon flexCenter locationIconSize"><LocationMarkerIcon /></span>
          <FromLocationSearch
            initialValue={input.value} itemSelected={input.onChange}
            trackFormOneInteracted={trackFormOneInteracted}
            handleFocus={onToLocFocus}
            id="toLocation_fnew"
            handleBlur={handleBlur}
          />
        </div>
        {touched && (error && <span className="input-error-text input-error-text">{error}</span>)}
      </div>
    </div>
  );
};


export const renderEmail = ({
                              input,
                              label,
                              type,
                              meta: { touched, error, warning },
                              trackFormOneInteracted,
                              changeHandler,
                              emailVal,
                            }) => (
  <div className="form-field-label mb15 row row-">
    <label htmlFor={label} className="f14 fw9 pb8 block">
      {label}
      <em className="pfc2">*</em>
    </label>
    <div className="input-with-icon-box row row- input-with-icon-box">
      <span className="input-icon">
        <ContactIcon />
      </span>
      <input
        id="email_fnew"
        className={`input ${touched && (error && 'input-error')}`}
        {...input}
        type={type}
        placeholder="Enter Your Email Id"
        onClick={trackFormOneInteracted}
        onChange={changeHandler}
        value={emailVal}
      />
    </div>
    {touched && (error && <span className="input-error-text">{error}</span>)}
  </div>
);

export const renderPhone = ({
                              input,
                              label,
                              type,
                              meta: { touched, error, warning },
                              trackFormOneInteracted,
                              defaultValue,
                              isFocus
                            }) => (
  <div className="form-field-label">
    <label htmlFor={label} className="f14 fw9 pb8 block">
      {label}
      <em className="pfc2">*</em>
    </label>
    <div className="row">
      <div className="col-xs-12">
        <div className="col-xs-3 pl0 pr0">
          <div className="select-con input-box">
            <Field
              name="isd_code"
              component={IsdCodes}
              type="select"
              trackFormOneInteracted={trackFormOneInteracted}
              id="isd_code_fnew"
              defaultValue={defaultValue}
            />
            <span className="r10 block wauto lauto input-icon absolute-center-v downArrow">
              <DownArrow />
            </span>
          </div>
        </div>
        <div className={`col-xs-9 pr0 ${isFocus ? '' : ''}`}>
          <input
            id="phone_no_fnew"
            type={type}
            className={`input input-with-icon-box ${touched && (error && 'input-error')}`}
            {...input}
            placeholder="Phone No"
            onClick={trackFormOneInteracted}
          />
        </div>
      </div>
    </div>
    {touched &&
    ((error && <span className="input-error-text">{error}</span>) ||
      (warning && <span>{warning}</span>))}
  </div>
);

export const genericCheckbox = ({
                                  input,
                                  type,
                                  label,
                                  trackFormOneInteracted = () => {},
                                  id,
                                  classname,
                                  formValues,
                                }) => {

  return (
    <div className={classname}>
      <input
        type={type}
        {...input}
        id={id}
        className="checkbox-common checkbox-common"
        onClick={() => trackFormOneInteracted()}
      />
      <label htmlFor={id} className="f12 pt8 pb0">
        {id === 'whatsapp_opt_status' ? (
          <span className="labelIcon">
            <WhatsAppIcon />
          </span>
        ) : null}{' '}
        {label}
      </label>
    </div>
  );
};

const defaultFields = ({ input }) =>
  <input type="text" {...input} />;

class FormOneVariation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionCount: 1,
      email: props.email ? props.email : ''
    };
    this.handlFormInteraction = this.handlFormInteraction.bind(this);
    this.onToLocFocus = this.onToLocFocus.bind(this);
  }

  componentDidMount() {
    if (this.props.email) {
      this.props.dispatchRxFormAction(this.props.email, 'email');
    }
  }

  onToLocFocus() {
    const toLoc = document.getElementById('toLocation_fnew');
    const toLocScroll = toLoc.offsetTop;
    const toLocPos = toLoc.getBoundingClientRect().y;
    const toLocAdd = toLocPos - toLocScroll;
    window.scrollTo(0, toLocAdd);
  }

  handlFormInteraction() {
    if (this.state.interactionCount === 1) {
      this.setState({
        interactionCount: this.state.interactionCount + 1
      });
    }
  }

  callNextForm = () => {
    const { location: { query } } = this.props;
    if (query.deals) {
      this.props.asynValidate(
        this.props.formValues,
        true,
        SLIDER_1,
        true,
        true,
        DEALS
      );
    } else {
      this.props.asynValidate(
        this.props.formValues,
        false,
        SLIDER_2,
        true
      );
    }
  };

  render() {
    const { location: { query } } = this.props;
    const isDeal = query.deals || false;
    return (
      <div id="form-variation" className="form-variation row row-">
        <div className="row row- relative bg-progress-div">
          <div
            id="bg-progress"
            className="absolute t0 l0 sbcw wfull bg-progress"
          />
          <div className="form-part form-field-incl-label p15 relative">
            <Field
              name="to_loc"
              component={renderToLocation}
              placeholder="To"
              type="text"
              label="To"
              validate={requiredWithmessage('enter correct city name')}
              trackFormOneInteracted={this.handlFormInteraction}
              onToLocFocus={this.onToLocFocus}
              handleBlur={this.props.handleBlur}
            />
            <div className="row row- mb15">
              <Field
                name="exploring_destinations"
                component={genericCheckbox}
                type="checkbox"
                label="I am exploring destinations"
                className="checkbox-common sfcw"
                id="exploring-destination_fnew"
                trackFormOneInteracted={this.handlFormInteraction}
                classname="exploring-destination at_explore"
              />
            </div>
            <Field
              id="fromLocation_fnew"
              className="input"
              name="from_loc"
              component={FromLocation}
              placeholder="From"
              type="text"
              label="From"
              trackFormOneInteracted={this.handlFormInteraction}
            />
          </div>
          <div className="form-part p15 mb1 relative">
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
                trackFormOneInteracted={this.handlFormInteraction}
                rtData={this.props.rtData}
              />
            </div>
          </div>
          <div className="form-part p15 mb0 relative">
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
              trackFormOneInteracted={this.handlFormInteraction}
              changeHandler={e => {
                this.setState({ email: e.target.value });
                this.props.handleEmailChange();
              }}
              emailVal={this.state.email}
            />
            <Field
              name="phone_no"
              component={renderPhone}
              placeholder="Phone"
              type="number"
              label="Phone No"
              validate={phoneNumber}
              trackFormOneInteracted={this.handlFormInteraction}
              defaultValue={
                this.props.formValues && this.props.formValues.isd_code
                  ? this.props.formValues.isd_code
                  : ''
              }
            />
            <Field
              name="whatsapp_opt_status"
              component={genericCheckbox}
              type="checkbox"
              label="Send trip updates on WhatsApp"
              className="checkbox-common sfcw"
              id="whatsapp_opt_status"
              trackFormOneInteracted={this.handlFormInteraction}
              classname="at_whatsapp_opt_status"
              formValues={this.props.formValues}
            />
          </div>
          <div className="hide">
            <Field name="start_date_flexible" component={defaultFields} />
            <Field name="booked_tickets" component={defaultFields} />
            <Field name="trip_days" component={defaultFields} />
            <Field
              component={defaultFields}
              name="dont_utilize_budget_new"
            />
            <Field component={defaultFields} name="budget_new" />
            <Field component={defaultFields} name="start_date_noidea" />
          </div>
          <div className="row row- p8 pt0 sbcw hide">
            <p className="mt0 mb0 mlauto mrauto relative pl48 pt8 pb8 pr0 iblock">
              <span className="w20 h20 mr8 absolute l8 t2 iblock">
                <LockIcon />
              </span>
              Your information will be kept confidential
            </p>
          </div>
          <div className="row row- sbcw wfull">
            <div className="row row- p15 pt0 sbcw">
              <button
                id="submit_btn_fnew"
                disabled={this.props.disableSubmitButton}
                type="button"
                className="btn-filled-pri-large wfull ripple"
                onClick={() => this.callNextForm()}
              >
                <div className="wave" />
                {this.props.disableSubmitButton ? (
                  <p className="loading-dots">
                    <span className="loading-dot-1" />
                    <span className="loading-dot-2" />
                    <span className="loading-dot-3" />
                  </p>
                ) : isDeal ? ('Check Availability') : (
                  'Request Quotes'
                )}
              </button>
            </div>
            <div className="progress-header-div hide">
              <div id="progress-header" className="progress-header" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FormOneVariation.propTypes = {
  dispatchRxFormAction: PropTypes.func.isRequired,
  handleThankYou: PropTypes.func.isRequired,
  rtData: PropTypes.object,
  handleBlur: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  formValues: PropTypes.object
};

FormOneVariation.defaultProps = {
  rtData: {},
  email: '',
  formValues: {}
};

export default FormOneVariation;
