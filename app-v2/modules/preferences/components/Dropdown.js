import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ disabled, input, defaultValue, options, meta: { touched, error } }) => (
  <div>
    <select
      {...input}
      onBlur={() => input.onBlur(input.value)}
      className={`${'select'} ${touched && (error && 'input-error')}`}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      {
        options.map(option => (
          <option value={option.value} key={`isd_${option.value}`}>
            {option.label}
          </option>
        ))
      }
    </select>
    {
      touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>
);

Dropdown.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.any,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool
};

Dropdown.defaultProps = {};

export default Dropdown;
