import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import { CalendarIcon } from 'helpers/Icon/Icon';
import { format } from 'helpers/DateTime';
import 'components/DatePicker/DatePicker.scss';

const DatePicker = ({ input, label, placeholder, calendarClassName, meta: { touched, error } }) => (
  <div className="col-md-6 col-sm-6 at_editdate">
    {
      label ? <label htmlFor="days" className="f14 fw9 pb4 block pfc3">{label}</label> : null
    }
    <div className="input-with-icon-box">
      <span className="input-icon"><CalendarIcon /></span>
      <ReactDatePicker
        popperPlacement="auto"
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
            boundariesElement: 'viewport'
          }
        }}
        calendarClassName={calendarClassName}
        dateFormat="DD MMM YYYY"
        placeholderText={placeholder}
        {...input}
        value={input.value ? format(input.value, 'DD MMM YYYY'): null}
        minDate={new Date()}
        selected={input.value ? new Date(input.value) : null}
        onFocus={(e) => e.target.readOnly = true}
        onSelect={(a, e) => e.stopPropagation()}
        className={touched && (error && 'input-error')}
      />
    </div>
    {
      touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>
);

DatePicker.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  calendarClassName: PropTypes.string
};

DatePicker.defaultProps = {
  placeholder: 'Date',
  calendarClassName: ''
};

export default DatePicker;
