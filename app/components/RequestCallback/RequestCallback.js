/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormHeader from '../Form/FormHeader.js';
import './RequestCallback.scss';
import {
  IllusRequestCallback
} from 'helpers/Icon/Icon';
import {
  required,
  phoneNumber,
} from '../../utils/formValidators';

const renderMobile = ({ input, type, label, meta: { touched, error } }) =>
  <div className="row row- mt15">
    <div className="col-xs-12">
      <div className="col-xs-3 pl0 pr0">
        <input type="text" className="input" placeholder="+91" />
      </div>
      <div className="col-xs-9 pr0">
        <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>
  </div>;

const RequestCallback = ({ goBack, handleSubmit, submitting }) => (
  <div className="row row-">
    <FormHeader name="Request Call Back" goBack={goBack} />
    <div className="col-xs-12 sbcw request-Header-container">
      <p className="illus-support-icon mt24 mb24 ml48"><IllusRequestCallback className="container-support-icon" /></p>
      <h3 className="f16 text-center pfc1 pt15">Request Call Back</h3>
      <h3 className="f14 pfc3 fw4 text-center pt15">Enter your number & we will call you back</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="col-xs-12 sbcw pl0 pr0">
        <p className="f14 pl15 pr15 fw7 pt24 pb15">Phone No</p>
        <Field
          name="phone"
          component={renderMobile}
          type="text"
          label="Phone No"
          validate={[required, phoneNumber]}
        />
        <div className="col-xs-12 pb64 callme-btn-primary">
          <button disabled={submitting} className="btn-filled-pri-large wfull mt15 ripple"><div className="wave"/>Call me</button>
        </div>
      </div>
    </form>
  </div>
);

RequestCallback.propTypes = {
  goBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'requestCallBack-2X3_4'
})(RequestCallback);
