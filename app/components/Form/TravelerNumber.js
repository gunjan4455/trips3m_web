import React from 'react';
import PropTypes from 'prop-types';

import InputSelect from './InputSelect';
import { ProfileIcon } from 'helpers/Icon/Icon';
import { getRange } from '../../helpers/array';
import './FormLead/LeadForm.scss';


const TravelerNumber = ({ numberFor, title, optionRange, input }) => (
  <div className="col-xs-6">
    <div className="form-field-label">
      <label htmlFor={numberFor} className="f14 fw9 pb15 block">{title}</label>
      <div className="input-with-icon-box">
        <span className="input-icon flexCenter profileCon"><ProfileIcon /></span>
        <InputSelect
          optionRange={optionRange}
          onChangeHandler={(selectedValue) => { input.onChange(selectedValue); }}
          selectedValue={input.value}
        />
      </div>
    </div>
  </div>
);

TravelerNumber.propTypes = {
  numberFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  optionRange: PropTypes.array,
  input: PropTypes.object.isRequired
};

TravelerNumber.defaultProps = {
  optionRange: getRange(1, 10),
};

export default TravelerNumber;
