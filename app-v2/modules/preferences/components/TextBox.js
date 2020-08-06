import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ disabled, input, placeholder,className, meta: { touched, error } }) => (
  <div>
    <input
      type='text'
      {...input}
      disabled={disabled}
      placeholder={placeholder}
      className={`${'input'} ${touched && (error && 'input-error')} ${className}`}
    />
    {
      touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>
);

TextBox.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

TextBox.defaultProps = {
  className: ''
};

export default TextBox;
