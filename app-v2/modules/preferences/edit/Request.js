import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required, validDate } from 'utils/formValidators';
import TextBox from '../components/TextBox';
import DatePicker from '../components/DatePicker';
import NumberFormatter from '../components/NumberFormatter';
import Header from './Header';
import RadioButton from '../components/RadioButton';
import { TRIP_STAGES } from '../constants';

const Request = ({ handleSubmit, submitting, errors }) => {

  return (
    <div className='sbcw'>
      <div className='absolute wfull t0 l0'><Header /></div>
      {
        errors && errors.length
          ? errors.map(error => <p className="f14 fw7 mt8 mb0 pl15 pr15" style={{ color: 'red' }}>{`* ${error}`}</p>)
          : null
      }
      <div className='p15'>
        <form onSubmit={handleSubmit}>
          <div className='mb15'>
            <label htmlFor='destination' className='block m0 f14p mb8 fw7 sfc6'>Destination <em className='pfc2'>*</em></label>
            <Field
              name="destination"
              component={TextBox}
              type="text"
              placeholder="Destination"
              validate={required}
              className='at_destination'
            />
          </div>

          <div className='mb15'>
            <label htmlFor='departureCity' className='block m0 f14p fw7 sfc6 mb8'>Departure City <em
              className='pfc2'>*</em></label>
            <Field
              name="departureCity"
              component={TextBox}
              type="text"
              placeholder="Departure City"
              validate={required}
              className='at_departureCity'
            />
          </div>

          <div className='row'>
            <div className='mb15 col-xs-6 pr8'>
              <label htmlFor='departureDate' className='block m0 f14p fw7 sfc6 mb8'>Departure Date <em
                className='pfc2'>*</em></label>
              <Field
                name="departureDate"
                component={DatePicker}
                type="text"
                placeholder="Fri, 10 May"
                validate={[required, validDate('DD MMM YYYY')]}
              />
            </div>
            <div className='mb15 col-xs-6 pl8'>
              <label htmlFor='days' className='block m0 f14p fw7 sfc6 mb8'>No. Of Days <em
                className='pfc2'>*</em></label>
              <Field
                name="tripDays"
                component={NumberFormatter}
                type="number"
                placeholder="2"
                validate={required}
                startValue={2}
                className='at_days'
              />
            </div>
          </div>

          <div className='row'>
            <div className='mb15 col-xs-6 pr8'>
              <label htmlFor='adults' className='block m0 f14p fw7 sfc6 mb8'>Adults (+12 years)</label>
              <Field
                name="adults"
                component={NumberFormatter}
                type="number"
                placeholder="2"
                startValue={1}
                className='at_adults'
              />
            </div>
            <div className='mb15 col-xs-6 pl8'>
              <label htmlFor='children' className='block m0 f14p fw7 sfc6 mb8'>Children</label>
              <Field
                name="children"
                component={NumberFormatter}
                type="number"
                placeholder="2"
                startValue={0}
              />
            </div>
            <div className='mb15 pl8'>
              <label htmlFor='children' className='block m0 f14p fw4 mb8 fw7'>Trip Planning Stage</label>
              <div className="row row- m0 mb48 ">
                <Field
                  name='tripStage'
                  component={RadioButton}
                  options={TRIP_STAGES.options}
                />
              </div>
            </div>
          </div>

          <div className='fixed b0 p8 wfull sbcw bs6 l0 r0 bt z2'>
            <button type='submit' disabled={submitting} className='btn-filled-pri-large wfull  at_confirm'>Confirm</button>
          </div>

        </form>
      </div>
    </div>
  );
};

Request.propTypes = {
  errors: PropTypes.array,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

Request.defaultProps = {
  errors: []
};

export default reduxForm({
  form: 'RequestPreferences' // a unique identifier for this form
})(Request);
