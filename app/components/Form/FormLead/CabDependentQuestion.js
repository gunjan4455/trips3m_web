import React from 'react';
import PropTypes from 'prop-types';

import FilterClear from './FilterClear';

function getSelcectedQuestion(question, isDomestic) {
  const includeStr = isDomestic ? 'domestic' : 'international';
  const tagsStr = isDomestic ? 'domestic:English,Hindi' : 'international:Shared,Private';
  let finalOption = question.options.map(option => {
    if ((option.id === 12 || option.id === 89) && option.tags.includes(includeStr)) {
      return option;
    }
    return -1;
  });
  finalOption = finalOption.filter(option => option !== -1);
  finalOption[0].tags = tagsStr;
  const options = finalOption[0].tags.toString().split(':')[1].toString().split(',');
  return {
    question: finalOption,
    options
  };
}

const CabDependentQuestion = ({ question, input, commonProperties, nameForClear }) => {
  const isChecked = (value) => {
    try {
      let index = -1;
      if (input.value !== '') {
        index = [input.value].findIndex(obj =>
          obj.user_input.toString() === value.toString());
      }
      return (index !== -1);
    } catch (e) {
      return false;
    }
  };
  const revisedQuestion = getSelcectedQuestion(question, commonProperties.properties && commonProperties.properties.isDomestic);
  const handleChange = (event) => {
    if (!question.useInputForOptions) {
      input.onChange({
        option_id: revisedQuestion.question[0].id.toString(),
        customization_id: question.customizationId.toString()
      });
    } else {
      // TODO :: set user input
      input.onChange({
        user_input: event.target.value,
        option_id: revisedQuestion.question[0].id.toString(),
        customization_id: question.customizationId.toString()
      });
    }
  };
  return (
    <div className="row row- tour-type at_cabdependent">
      <div className="iblock wfull">
        <p className="f14p fw7 sfc6 m0 iblock">
          {revisedQuestion.question[0].name}
        </p>
        <FilterClear
          name={nameForClear}
          text="Clear"
          type="radio"
          id={`id_${nameForClear}`}
        />
      </div>
      <div className="row row-8">
        {
          revisedQuestion.options.map((option, index) =>
            <div className="col-xs-6 p8" key={`${revisedQuestion.question[0].id}_${index}`}>
              <input
                type="radio"
                className="radio-common"
                name={`${question.identifier}[${index}]`}
                id={`radio_button_${revisedQuestion.question[0].id}_${index}`}
                value={option}
                onChange={handleChange}
                checked={isChecked(option)}
              />
              <label
                htmlFor={`radio_button_${revisedQuestion.question[0].id}_${index}`}
                className="cursorP"
              >
                <p className="m0">{option}</p>
              </label>
            </div>)
        }
      </div>
    </div>
  );
};

CabDependentQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  commonProperties: PropTypes.object.isRequired,
  nameForClear: PropTypes.string.isRequired
};

export default CabDependentQuestion;
