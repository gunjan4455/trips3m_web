import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({ input, label, labelClassName,  placeholder, meta: { touched, error }, onChange, ...rest }) => (
  <div>
    { label ?
      <label className={labelClassName}>
        {label}
      </label> : null}
    <input
      className="input"
      {...input}
      {...rest}
      placeholder={placeholder}
      onChange={(val) => {
        input.onChange(val);
        onChange(val);
      }}
    />
    {touched && error && <span className="input-error-text">{error}</span>}
  </div>
);

InputComponent.propTypes = {
  input: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  labelClassName: PropTypes.string
};

InputComponent.defaultProps = {
  onChange: () => {},
  label: '',
  placeholder: '',
  labelClassName: ''
};

export default InputComponent;
