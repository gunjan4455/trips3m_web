/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Facebook from './Facebook';
import Google from './Google';
import IsdCodes from '../Generic/IsdCodes';
import { DownArrow } from 'helpers/Icon/Icon';
import FormHeader from '../Form/FormHeader';
import {
  required,
  email,
  phoneNumber,
  matchFields,
  minSixChars
} from '../../utils/formValidators';

const renderEmail = ({ input, type, label, meta: { touched, error } }) =>
  <div className="row row- mt15">
    <div className="col-xs-12">
      <div className="row row- relative">
        <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;

const renderFullName = ({ input, type, label, meta: { touched, error } }) =>
  <div className="row row-">
    <div className="col-xs-12">
      <div className="row row- relative">
        <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;

const renderPassword = ({ input, type, label, meta: { touched, error } }) =>
  <div className="row row- mt15">
    <div className="col-xs-12">
      <div className="row row- relative">
        <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;

const renderMobile = ({ input, type, label, meta: { touched, error } }) =>
  <div className="row row- mt15">
    <div className="col-xs-12">
      <div className="col-xs-4 pl0 pr0">
        <div className="select-con">
          <Field
            name="isd_code"
            component={IsdCodes}
            type="select"
          />
          <span className="r10 block wauto lauto input-icon absolute-center-v downArrow"><DownArrow /></span>
        </div>
      </div>
      <div className="col-xs-8 pr0">
        <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;

const renderReferrerCode = ({ input, type, label }) =>
  <div className="row row- mt15">
    <div className="col-xs-12">
      <div className="row row- relative">
        <input type={type} {...input} className="input" placeholder={label} />
      </div>
    </div>
  </div>;

const renderTermsAndConditions = ({ input, type, label, meta: { error, touched } }) =>
  <div className="mt8 row row- pb5">
    <div className="col-xs-12">
      <input id="acceptTerm" {...input} type={type} className="checkbox-common"/>
      <label htmlFor="acceptTerm" className={`pt8 pb2 ${touched && (error && 'input-error')}`}>{label}</label>
      {
        (touched) &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;


const Signup = ({ goBack, handleSubmit, submitting, canUserRefer }) => (
  <div className="row row- relative sbcw pb64">
    <FormHeader name="Signup" goBack={goBack} />
    <div className="row row- mt24">
      <div className="col-xs-12">
        <Facebook title="Sign Up" />
      </div>
    </div>
    <div className="row row- mt15">
      <div className="col-xs-12">
        <Google title="Sign Up" />
      </div>
    </div>
    <p className="f16 uppercase text-center pfc4 pt24 pb24">OR</p>
    <form onSubmit={handleSubmit} >
      <Field
        name="name"
        component={renderFullName}
        type="text"
        label="Full Name"
      />
      <Field
        name="email"
        component={renderEmail}
        type="email"
        label="Email ID"
        placeholder="Email ID"
        validate={[required, email]}
      />
      <Field
        name="password"
        component={renderPassword}
        type="password"
        label="Password"
        validate={[required, minSixChars]}
      />
      <Field
        name="password_confirmation"
        component={renderPassword}
        type="password"
        label="Confirm Password"
        validate={[required, matchFields(['password', 'password_confirmation'])]}
      />
      <Field
        name="phone_no"
        component={renderMobile}
        type="text"
        label="Phone No"
        validate={[phoneNumber]}
      />
      { canUserRefer && <Field
        name="referer_code"
        component={renderReferrerCode}
        type="text"
        label="Referrer Code ( Optional )"
      />}
      <Field
        name="tnc"
        defaultChecked="false"
        component={renderTermsAndConditions}
        type="checkbox"
        label="I Accept T&C & Privacy Policy"
        validate={[required]}
      />

      <div className="row row- mt15">
        <div className="col-xs-12">
          <button type="submit" disabled={submitting} className="btn-filled-pri-large wfull ripple"><div className="wave" />Sign Up</button>
        </div>
      </div>
    </form>
    <p className="f12 text-center pt15">Already Have An Account? <Link to="/users/sign_in" className="fw9 ml5">Login</Link></p>
  </div>
);

export default reduxForm({
  form: 'signUp-2SBE5',
  initialValues: { tnc: true }
})(Signup);
