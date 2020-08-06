import React from 'react';
import PropTypes from 'prop-types';

import InputTextArea from './InputTextArea';
import './FormLead/LeadForm.scss';


const AdditionalPrefs = ({ input }) => {
  const onUpdate = (event) => {
    input.onChange(event.target.value);
  };
  return (
    <div className="form-part p15 sbcw">
      <div className="form-field-label">
        <label htmlFor="additional-preferences" className="f14 fw9 pb15 block">Additional Preferences</label>
        <InputTextArea
          name="additional-preferences"
          placeholder="Want
        to say anything?"
          text={input.value}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
};

AdditionalPrefs.propTypes = {
  input: PropTypes.object.isRequired
};

export default AdditionalPrefs;
