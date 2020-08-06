import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import FormHeader from '../Form/FormHeader.js';
import { IllusForgotPassword } from 'helpers/Icon/Icon';
import { required, email } from '../../utils/formValidators';

import './ForgotPassword.scss';


const renderEmail = ({ input, type, label, meta: { touched, error } }) =>
  <div className='row row- mt24'>
    <label htmlFor="email" className='fw9'>Email ID</label>
    <div className='relative mt15 relative'>
      <input type={type} {...input} className={`input ${touched && (error && 'input-error')}`} placeholder={label} />
    </div>
    {
      touched &&
        (error && <span className='input-error-text'>{error}</span>)
    }
  </div>;

renderEmail.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

const ForgotPassword = ({ goBack, handleSubmit, submitting }) => (
  <div className='row row-'>
    <FormHeader name="Forgot Password" goBack={goBack} />
    <div className='col-xs-12 sbcw'>
      <p className='mt24 mb18'><span className='forgotIcon'><IllusForgotPassword className='container-forgot-icon' /></span></p>
      <p className='mt24 f14 fw4 text-center pfc3'>We’ll email you a link to reset your Password.</p>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={renderEmail}
          type="text"
          label="Email ID"
          placeholder="Email ID"
          validate={[required, email]}
        />
        <div className='col-xs-12 pb64 pl0 pr0 pt16 callme-btn-primary'>
          <button
            disabled={submitting}
            className='btn-filled-pri-large wfull mt15 mb64 text-capitalize ripple'
          >
            <div className='wave' />
          Sent Reset Link
        </button>
        </div>
      </form>
    </div>
  </div>
);

ForgotPassword.propTypes = {
  goBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'forgotPassword-QL08B'
})(ForgotPassword);
