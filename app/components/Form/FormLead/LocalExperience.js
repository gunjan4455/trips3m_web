import React from 'react';
import PropTypes from 'prop-types';

import FilterClear from './FilterClear';

const LocalExperience = ({ question, input, nameForClear }) => {
  const isChecked = (optionId) => {
    try {
      return [...input.value].findIndex(obj => obj.option_id.toString() === optionId.toString()) !== -1;
    } catch (e) {
      return false;
    }
  };

  const handleChange = (event) => {
    const newValue = [...input.value];
    const obj = {
      option_id: event.target.value.toString(),
      customization_id: question.customizationId.toString()
    };

    if (event.target.checked) {
      newValue.push(obj);
    } else {
      newValue.splice(newValue.findIndex(j => j.option_id.toString() === event.target.value.toString()), 1);
    }

    return input.onChange(newValue);
  };

  return (
    <div className="row local-exp row- at_LocalExperience">
      <div className="iblock wfull">
        <p className="fw9 iblock m0">{question.title}</p>
        <FilterClear
          name={nameForClear}
          text="Clear"
          type="radio"
          id={`id_${nameForClear}`} />
      </div>
      {
        question.options.map((option, index) =>
          <div className="col-xs-12 p0 at_LocalExperience_checkbox" key={option.id}>
            <input
              type="checkbox"
              id={`radio_button_${option.id}_${index}`}
              className="checkbox-common"
              value={option.id}
              name={`${question.identifier}[${index}]`}
              onChange={handleChange}
              checked={isChecked(option.id)} />
            <label htmlFor={`radio_button_${option.id}_${index}`} className="cursorP ellipsis wauto">
              {option.name}
            </label>
          </div>)
      }
    </div>
  );
};

LocalExperience.propTypes = {
  question: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  nameForClear: PropTypes.string.isRequired
};

export default LocalExperience;
