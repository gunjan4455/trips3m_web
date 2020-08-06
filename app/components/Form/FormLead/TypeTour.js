import React from 'react';
import PropTypes from 'prop-types';

import FilterClear from './FilterClear';

const TypeTour = ({ question, input, nameForClear }) => {
  const isChecked = (optionId) => {
    try {
      let index = -1;
      if (input.value !== '') {
        index = [input.value].findIndex(obj => obj.option_id.toString() === optionId.toString());
      }
      return (index !== -1);
    } catch (e) {
      return false;
    }
  };

  const handleChange = (event) => {
    if (!question.useInputForOptions) {
      input.onChange({
        option_id: event.target.value.toString(),
        customization_id: question.customizationId.toString()
      });
    } else {
      // TODO :: set user input
      input.onChange({
        user_input: '',
        option_id: event.target.value.toString(),
        customization_id: question.customizationId.toString()
      });
    }
  };

  return (
    <div className="row row- tour-type at_tourtype">
      <div className="iblock wfull">
        <p className="f14p fw7 sfc6 m0 iblock f14">{question.title}</p>
        <FilterClear
          name={nameForClear}
          text="Clear"
          type="radio"
          id={`id_${nameForClear}`} />
      </div>
      <div className="row row-">
        <div className="row row-8 flex flexWrap formBox ">
          {
            question.options.map((option, index) =>
              <div className="col-xs-6 p8 at_tourtype_radio" key={option.id}>
                <input
                  type="radio"
                  className="radio-common"
                  name={`${question.identifier}[${index}]`}
                  id={`radio_button_${option.id}_${index}`}
                  value={option.id}
                  checked={isChecked(option.id)}
                  onChange={handleChange} />
                <label htmlFor={`radio_button_${option.id}_${index}`} className="cursorP">
                  <p className="m0">{option.name}</p>
                </label>
              </div>)
          }
        </div>
      </div>
    </div>
  );
};

TypeTour.propTypes = {
  question: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  nameForClear: PropTypes.string.isRequired
};

export default TypeTour;
