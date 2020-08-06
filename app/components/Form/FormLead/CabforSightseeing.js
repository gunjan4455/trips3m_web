import React from 'react';
import PropTypes from 'prop-types';

import {
  CabIconFront
} from 'helpers/Icon/Icon';

const CabforSightseeing = ({ input, question, cabQuestionHandler }) => {
  const isChecked = (optionId) => {
    try {
      let index = -1;
      if (input.value !== '') {
        index = [input.value].findIndex(obj =>
          obj.option_id.toString() === optionId.toString());
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
    cabQuestionHandler(event.target.value);
  };

  return (
    <div>
      <div className="flight-included col-xs-8 pr0 pl0 at_cab">
        <p className="fw9 relative m0"><span className="flight-icon"><CabIconFront /></span>
          {question.title}
        </p>
      </div>
      <div className="col-xs-4 pr0 pl0 text-right at_cab_radio">
        {
          question.options.map((option, index) =>
            <div className="col-xs-6 pl0 pr0" key={option.id}>
              <input
                type="radio"
                className="flight-radio"
                name={`${question.identifier}[${index}]`}
                id={`radio_button_${option.id}_${index}`}
                value={option.id}
                checked={isChecked(option.id)}
                onChange={handleChange}
              />
              <label htmlFor={`radio_button_${option.id}_${index}`} className="cursorP pr8 pl8">
                <p className="m0 pfc4 f12 fw4 text-uppercase">{option.name}</p>
              </label>
            </div>)
        }
      </div>
    </div>
  );
};

CabforSightseeing.propTypes = {
  question: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  cabQuestionHandler: PropTypes.func
};

CabforSightseeing.defaultProps = {
  cabQuestionHandler: () => {}
};
export default CabforSightseeing;
