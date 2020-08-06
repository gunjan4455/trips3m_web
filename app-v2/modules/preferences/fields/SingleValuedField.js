import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const getRadioComponent = (preferenceId, option, elementId) =>
  <div key={option.id} className="p5">
    <Field
      name={`singleValueOptions[${preferenceId}][optionId]`}
      component="input"
      className="radio-common"
      id={elementId}
      type="radio"
      
      value={option.id.toString()}
    />
    <label
      htmlFor={elementId}
      className="cursorP pl15 pr15"
    >
      <p className="m0">{option.name}</p>
    </label>
  </div>;

const getCheckboxComponent = (preferenceId, option, elementId) =>
  <div key={option.id} className="p5">
    <Field
      name={`multiValueOptions[${preferenceId}][optionId][${option.id}]`}
      component="input"
      className="checkbox-common"
      id={elementId}
      type="checkbox"
    />
    <label
      htmlFor={elementId}
      className="cursorP pl24 pr24 pt5 pb5"
    >
      <p className="m0">{option.name}</p>
    </label>
  </div>;

const getOptions = preference => (
  preference.options.map((option) => {
    const elementId = `option-radio-${option.id}`;
    if (preference.valueType === 'single_value') {
      return getRadioComponent(preference.id, option, elementId);
    }
    return getCheckboxComponent(preference.id, option, elementId);
  })
);

// {/* <FilterClear /> */}
const SingleValuedField = ({ preference }) =>
  <div className="clearfix will-book-comp">
    <p className="f14p fw7 sfc6 m0 iblock pb3">{preference.title}</p>
    <div className="clearfix pl4 pt0">
      <div className="row row-8 flex flexWrap">
        {getOptions(preference)}
      </div>
    </div>
  </div>;


export default SingleValuedField;

SingleValuedField.propTypes = {
  preference: PropTypes.object.isRequired,
};
