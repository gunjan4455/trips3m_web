import React from 'react';
import PropTypes from 'prop-types';


const InputTextArea = ({ placeholder, name, text, onUpdate }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    className="textarea"
    value={text}
    onChange={onUpdate}
  />
);

InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string,
  onUpdate: PropTypes.func
};

InputTextArea.defaultProps = {
  text: '',
  onUpdate: () => {}
};

export default InputTextArea;
