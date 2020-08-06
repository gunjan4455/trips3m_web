import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { DownArrow } from 'helpers/Icon/Icon';
import ISD_CODES from 'helpers/isdCodes';
import { required, phoneNumber, email } from 'utils/formValidators';
import TextBox from '../components/TextBox';
import Dropdown from '../components/Dropdown';
import Header from './Header';

const ContactDetails = ({ handleSubmit, submitting }) => {
  const PREFERENCE_ISD_CODES = Object.keys(ISD_CODES).map(key => {
    return { label: ISD_CODES[key], value: ISD_CODES[key] };
  });

  return (
    <div className='sbcw'>
      <div className='absolute t0 l0 wfull'><Header /></div>

      <div className='p15'>
        <form onSubmit={handleSubmit}>
          <div className='mb15'>
            <label htmlFor="emailId" className="block m0 f14p fw7 sfc6 mb8">Email ID<em className="pfc2">*</em></label>
            <Field
              name="email"
              component={TextBox}
              label="Email Id"
              placeholder="example@domain.com"
              validate={[required, email]}
            />
          </div>

          <div className='mb15'>
            <label htmlFor='phoneNumber' className='block m0 f14p fw7 sfc6 mb8'>Phone Number <em className='pfc2'>*</em></label>
            <div className='row'>
              <div className='col-xs-4'>
                <div className=" select-con input-box">
                  <Field
                    name="isdCode"
                    options={PREFERENCE_ISD_CODES}
                    component={Dropdown}
                    defaultValue="+91"
                  />
                  <span className='r10 block wauto lauto input-icon absolute-center-v downArrow'><DownArrow /></span>
                </div>
              </div>
              <div className='col-xs-8 pl0'>
                <Field
                  name="phoneNo"
                  component={TextBox}
                  placeholder="Mobile/Contact No."
                  validate={[required, phoneNumber]}
                />
              </div>
            </div>
          </div>

          <div className='fixed b0 p8 wfull sbcw bs6 l0 r0 bt z2'>
            <button type='submit' disabled={submitting} className='btn-filled-pri-large wfull at_confirm'>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

ContactDetails.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

ContactDetails.defaultProps = {};

export default reduxForm({
  form: 'ContactDetailsPreferences' // a unique identifier for this form
})(ContactDetails);
