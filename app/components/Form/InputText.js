import React from 'react';
import PropTypes from 'prop-types';


const InputText = ({ placeholder, name, type, value }) => (
  <input type={type} placeholder={placeholder} name={name} className="input" value={value} />
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default InputText;
