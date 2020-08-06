/* eslint-disable react/prop-types, quotes, react/no-array-index-key */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import './LeadForm.scss';
import IsdCodes from '../../Generic/IsdCodes';
import { CallUs, LocationMarkerIcon, ChatIcon, ContactIcon, Back2Icon, CalendarIcon,
  DownArrow } from 'helpers/Icon/Icon';
import { required, validDateInternalFormat, email, phoneNumber,
  number } from '../../../utils/formValidators';
import FromLocation from '../FromLocation';
import FromLocationSearch from '../FromLocationSearch';
import { openChatHandler } from '../../FixedMenu/FixedMenu';
// import superagent from 'superagent';
// import { formatURL } from '../../../utils/parsers';

const renderToLocation = ({ input, label, meta: { touched, error }, trackFormOneInteracted }) => (
  <div className="form-field-label">
    <label htmlFor={label} className="f14 fw9 pb15 block">
      {label}<em className="pfc2">*</em>
    </label>
    <div className={`row row- ${touched && (error && "input-error-parent")}`}>
      <div className="input-with-icon-box">
        <span className="input-icon flexCenter locationIconSize"><LocationMarkerIcon /></span>
        <FromLocationSearch initialValue={input.value} itemSelected={input.onChange}
          trackFormOneInteracted={trackFormOneInteracted} />
      </div>
      {
        touched &&
          (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>
);

// const asyncValidate = values => new Promise((resolve) => {
//   if (values.email) {
//     superagent
//       .get(formatURL({ path: '/get_fake_mail' }))
//       .query({ email: values.email })
//       .end((err, res) => {
//         if (res && res.body && res.body.fake_mail_status) {
//           resolve({ email: 'Please provide an original email.' });
// // eslint-disable-line no-throw-literal
//         }
//       });
//   }
// }).then((error) => { throw error; });

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);
  }
  handleTouchStart() {
    this._calender.setOpen(true);
  }
  render() {
    const { input, touched, error, handleInputChange } = this.props;
    return (
      <DatePicker
        {...input}
        dateForm="DD/MM/YYYY"
        readOnly
        ref={(c) => { this._calender = c; }}
        minDate={dayjs()}
        className={`input ${touched && (error && "input-error")}`}
        placeholderText="YYYY-MM-DD"
        selected={input.value ? dayjs(input.value) : null}
        onChange={handleInputChange}
        customInput={<input id="start_date" type="text" readOnly onTouchStart={this.handleTouchStart} />}
      />
    );
  }
}

const renderDatepicker = ({ input, meta: { touched, error, warning }, trackFormOneInteracted }) => {
  const handleInputChange = (date) => {
    input.onChange(dayjs(date).format('YYYY-MM-DD'));
    trackFormOneInteracted();
  };
  // const handleTouchStart = (date) => {
  //   this._calender.setOpen(true);
  // };
  return (
    <div>
      <label htmlFor="datepicker" className="f14 fw9 pb15 block">
      Departure Date<em className="pfc2">*</em>
      </label>
      <div className="input-with-icon-box">
        <span className="input-icon flexCenter iconSize"><CalendarIcon /></span>
        <CustomDatePicker
          readonly
          input={input}
          touched={touched}
          error={error}
          warning={warning}
          handleInputChange={handleInputChange}
        />
      </div>
      {touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
    </div>
  );
};

const renderNoOfDays = ({ input, label, meta: { touched, error },
  trackFormOneInteracted
}) =>
  <div className="form-field-label">
    <label htmlFor={label} className="f14 fw9 pb15 block">
      {label}<em className="pfc2">*</em>
    </label>
    <div className="select-con">
      <select id="trip_days" className={`select ${touched && (error && "input-error")}`} {...input} onClick={trackFormOneInteracted}>
        <option value="" disabled>Days</option>
        {Array.from(Array(10), (e, i) => (<option value={i + 1} key={`f1_noOfDays_${i}`}>{i + 1}</option>))}
      </select>
      <span className="absolute-center-v r10 flexCenter downArrow"><DownArrow /></span>
    </div>
    {touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>;

const planningStageOptions = () => [
  "Select Trip Stage",
  "Still dreaming . . . not sure I'm going to take this trip",
  "I know I'm going somewhere, just not sure which place",
  "I'm definitely going, I know which place . . . let's go!",
  "Flight-Train already booked, just need remaining package"
];

const renderPlanningStage = ({ input, label, trackFormOneInteracted }) =>
  <div className="form-part p15 sbcw mb8">
    <div className="form-field-label row row-">
      <label htmlFor={label} className="f14 fw9 pb15 block">{label}</label>
      <div className="select-con relative">
        <select id="trip_stage" className="select" {...input} onClick={trackFormOneInteracted}>
          {planningStageOptions().map((e, i) => <option value={i} key={`f1_planning_${i}`}>{e}</option>)}
          <optgroup label="" />
        </select>
        <span className="absolute-center-v r10 flexCenter downArrow"><DownArrow /></span>
      </div>
    </div>
  </div>;

const renderEmail = ({ input, label, type, meta: { touched, error },
  trackFormOneInteracted
}) =>
  <div className="form-field-label mb15 row row-">
    <label htmlFor={label} className="f14 fw9 pb15 block">
      {label}<em className="pfc2">*</em>
    </label>
    <div className="input-with-icon-box row row-">
      <span className="input-icon flexCenter iconSize"><ContactIcon /></span>
      <input id="email" className={`input ${touched && (error && "input-error")}`} {...input} type={type} placeholder="Enter Your Email Id" onClick={trackFormOneInteracted} />
    </div>
    {touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>;

const renderPhone = ({ input, label, type, meta: { touched, error, warning },
  trackFormOneInteracted }) =>
    <div className="form-field-label">
      <label htmlFor={label} className="f14 fw9 pb15 block">
        {label}<em className="pfc2">*</em>
      </label>
      <div className="row">
        <div className="col-xs-12">
          <div className="at_isdCodeBlock col-xs-4 pl0 pr0" >
            <div className="at_isdCodes select-con" >
              <Field
                name="isd_code"
                component={IsdCodes}
                type="select"
                trackFormOneInteracted={trackFormOneInteracted}
              />
              <span className="r10 lauto input-icon absolute-center-v flexCenter downArrow"><DownArrow /></span>
            </div>
          </div>
          <div className="col-xs-8 pr0">
            <input id="phone_no" type={type} className="input" {...input} placeholder="Phone No" onClick={trackFormOneInteracted} />
          </div>
        </div>
      </div>
      {touched &&
      ((error && <span className="input-error-text">{error}</span>) ||
        (warning && <span>{warning}</span>)
      )
    }
    </div>;

class FormOneElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionCount: 1,
    };
    this.handlFormInteraction = this.handlFormInteraction.bind(this);
  }

  handlFormInteraction() {
    if (this.state.interactionCount === 1) {
      this.setState({
        interactionCount: this.state.interactionCount + 1
      });
    }
  }

  render() {
    return (
      <form id="rtrip_v1" onSubmit={this.props.handleSubmit((data) => { // eslint-disable-line arrow-body-style
        /* return new Promise((resolve) => {
          if (data.email) {
            superagent
              .get(formatURL({ path: '/get_fake_mail' }))
              .query({ email: data.email })
              .end((err, res) => {
                if (res && res.body && res.body.fake_mail_status) {
                  resolve({ email: 'Please provide an original email.' });
                } else {
                  this.props.onSubmit(data);
                }
              });
          }
        }).then((error) => { throw new SubmissionError(error); }); */
        this.props.onSubmit(data);
      })}>
        <div className="row row-">
          <div className="form-header pl0 pr0 row row- sbcw">
            <div className="col-xs-9 pl48 pr0">
              <button type="button" onClick={this.props.goBack} className="cross-common"><Back2Icon /></button>
              <p className="f16 ellipsis">Your Preferences</p>
            </div>
            <div className="at_headerIconF1 col-xs-3 pl0">
              <span className="at_openChatHandler header-logo-right fright ml15"><a href="" onClick={openChatHandler}><ChatIcon className="absolute-center wfull" /></a></span>
              <span className="at_callUsIconF1 header-logo-right fright"><a href="tel:18001235555"><CallUs className="absolute-center wfull" /></a></span>
            </div>
          </div>
          <div className="form-part p15 sbcw mb8">
            <Field id="fromLocation" className="input" name="from_loc" component={FromLocation} placeholder="From" type="text" label="From" trackFormOneInteracted={this.handlFormInteraction} />
            <Field
              name="to_loc" component={renderToLocation} placeholder="To" type="text" label="To"
              validate={required}
              trackFormOneInteracted={this.handlFormInteraction}
            />
          </div>
          <div className="form-part p15 sbcw mb8">
            <div className="row">
              <div className="col-xs-7 pr8">
                <Field
                  name="start_date" component={renderDatepicker} placeholder="DD / MM / YY" type="text" label="Departure Date"
                  validate={validDateInternalFormat}
                  trackFormOneInteracted={this.handlFormInteraction}
                />
              </div>
              <div className="col-xs-5 pl8">
                <Field
                  name="trip_days" component={renderNoOfDays} label="No. Of Days"
                  validate={[required, number]}
                  trackFormOneInteracted={this.handlFormInteraction}
                />
              </div>
            </div>
          </div>
          <div className="form-part">
            <Field
              name="trip_stage" component={renderPlanningStage} label="Trip Planning Stage"
              trackFormOneInteracted={this.handlFormInteraction}
            />
          </div>
          <div className="form-part p15 sbcw mb8">
            <Field
              name="email" component={renderEmail} placeholder="Email" type="email" label="Email ID"
              validate={[required, email]}
              trackFormOneInteracted={this.handlFormInteraction}
            />
            <Field
              name="phone_no" component={renderPhone} placeholder="Phone" type="text" label="Phone No"
              validate={phoneNumber}
              trackFormOneInteracted={this.handlFormInteraction}
            />
          </div>
          <div className="row row- p8 sbcw bs4">
            <button id="submit_btn" disabled={this.props.disableSubmitButton} type="submit" className="btn-filled-pri-large wfull ripple"><div className="wave" />Request Quotes</button>
          </div>
        </div>
      </form>
    );
  }
}

const FormOne = reduxForm({
  form: 'formOne-1ae_X',
  // asyncValidate,
  // asyncBlurFields: ['email']
})(FormOneElement);

export default FormOne;
