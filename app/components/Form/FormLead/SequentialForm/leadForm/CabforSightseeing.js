import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CabsFilled, Tick } from 'helpers/Icon/Icon';

class CabforSightseeing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      isChecked: this.selectCab(props),
    };
  }

  selectCab = (props) => {
    const { formValues } = props;
    if(formValues.other_answers_attributes && formValues.other_answers_attributes.length) {
      return formValues.other_answers_attributes[1] &&
        formValues.other_answers_attributes[1].option_id &&
        formValues.other_answers_attributes[1].option_id === "99";
    }
    return false;
  };

  handleChange = event => {
    const { input, question } = this.props;
    this.setState({ isChecked: !this.state.isChecked }, () => {
      input.onChange({
        option_id: question.options[this.state.isChecked ? 0 : 1].id,
        customization_id: question.customizationId.toString(),
      });
    });
  };

  render() {
    const { question } = this.props;
    const { isChecked } = this.state;
    const optionIndex = isChecked ? 0 : 1;
    const option = question.options[optionIndex];
    return (
      <div className={`button-box round-icon ${isChecked ? 'active' : ''}`}>
        <span className="tick-icon-container">
          <Tick/>
        </span>
        <div className="icon-48">
          <CabsFilled />
        </div>
        <input
          type="checkbox"
          className="checkbox-common"
          name={`${question.identifier}[${optionIndex}]`}
          id={`radio_button_${option.id}_${optionIndex}`}
          value={option.id}
          checked={isChecked}
          onChange={this.handleChange}
        />
        <p className="text-center">Cab</p>
      </div>
    );
  }
}

CabforSightseeing.propTypes = {
  question: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  cabQuestionHandler: PropTypes.func,
};

CabforSightseeing.defaultProps = {
  cabQuestionHandler: () => {},
};
export default CabforSightseeing;
