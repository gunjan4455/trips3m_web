import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const FilterClearButton = ({ input, type, text, id }) =>
  <div className="iblock fright">
    <input {...input} type={type} className="hide" id={id} value="" />
    <label htmlFor={id} className="cursorP mb0">
      <label htmlFor={id} className="text-uppercase pfc4 fw4 cursorP pt1 f12 mb0">{text} </label>
    </label>
  </div>;

FilterClearButton.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string.isRequired
};

FilterClearButton.defaultProps = {
  input: {},
  type: 'radio',
  text: 'Clear'
};

const FilterClear = ({ name, type, text, id }) =>
  <div className="iblock fright">
    <Field
      name={name}
      component={FilterClearButton}
      type={type}
      text={text}
      id={id}
    />
  </div>;

FilterClear.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default FilterClear;
