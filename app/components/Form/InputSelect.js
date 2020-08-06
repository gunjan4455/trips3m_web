import React from 'react';
import PropTypes from 'prop-types';

import {DownArrow} from 'helpers/Icon/Icon';
import { getRange } from '../../helpers/array';


const InputSelect = ({ optionRange, selectedValue, onChangeHandler }) => {
  const handleChange = (event) => {
    onChangeHandler(event.target.value);
  };
  return (
    <div className="select-con">
      <select className="select" value={selectedValue} onChange={handleChange}>
        {optionRange.map(option => (
          <option value={option} key={option}>{option}</option>
      ))}
      </select>
      <span className="absolute-center-v r10 flexCenter downArrow"><DownArrow /></span>
    </div>
  );
};

InputSelect.propTypes = {
  optionRange: PropTypes.array,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChangeHandler: PropTypes.func,
};

InputSelect.defaultProps = {
  optionRange: getRange(1, 10),
  selectedValue: '1',
  onChangeHandler: () => {}
};
export default InputSelect;
