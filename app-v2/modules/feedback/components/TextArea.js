import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ input, placeholder, meta: { touched, error } }) => (
  <div>
    <textarea {...input}
              placeholder={placeholder}
              className={`textarea`} />
    {
      touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>
);

TextArea.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
};

TextArea.defaultProps = {};

export default TextArea;
