import React from 'react';
import PropTypes from 'prop-types';

import { BudgetIcon } from 'helpers/Icon/Icon';
import { numberWithCommas } from '../../../utils/parsers';

const BudgetOptions = ({ budgetOptions, handleChange, getSelectedBudget, isFlightSelected }) => {
  const budgetKeys = Object.keys(budgetOptions);
  const budgetFields = budgetKeys.slice(0, 3).map((key, index) =>
    <div className="col-xs-6 p8" key={key}>
      <input
        id={key}
        type="radio"
        className="radio-common"
        name="budgetOptions"
        value={`${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`}
        checked={getSelectedBudget === `${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`}
        onChange={handleChange}
      />
      <label htmlFor={key} className="cursorP">
        <p>
          ₹ {numberWithCommas(budgetOptions[key])}
        </p>
      </label>
    </div>
  );
  return (
    <div className="row row-8 pt0 pb8">
      <p className="fw9 p8 pb0 mb0 pt0 f14">Budget { isFlightSelected ? "With" : "Without" } Airfare
        <span className="pfc4 fw4 f12"> (per person)</span></p>
      {budgetFields}
    </div>
  );
};

BudgetOptions.propTypes = {
  budgetOptions: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  getSelectedBudget: PropTypes.string,
  isFlightSelected: PropTypes.bool.isRequired
};

BudgetOptions.defaultProps = {
  getSelectedBudget: ''
};

const BudgetText = ({ handleChange, isFlightSelected, getSelectedBudget, value }) => (
  <div className="budget-textbox pb15">
    <label htmlFor="budget-text" className="f14 fw9 pb8 block pfc3">
      Budget { isFlightSelected ? "With" : "Without" } Airfare <span className="pfc4 fw4 f12"> (per person)</span>
    </label>
    <div className="row row-">
      <div className="input-with-icon-box">
        <span className="input-icon"><BudgetIcon /></span>
        <input
          type="number"
          id="budget-text"
          placeholder="Enter your budget value"
          defaultValue={getSelectedBudget}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  </div>
);

BudgetText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isFlightSelected: PropTypes.bool,
  getSelectedBudget: PropTypes.string,
  value: PropTypes.string.isRequired
};

BudgetText.defaultProps = {
  isFlightSelected: false,
  getSelectedBudget: ''
};

class BudgetWithAirfair extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    budgetOptions: PropTypes.object,
    getSelectedBudget: PropTypes.string,
    isFlightSelected: PropTypes.bool
  };

  static defaultProps = {
    budgetOptions: {},
    getSelectedBudget: '',
    isFlightSelected: false
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.input.onChange(event.target.value);
  }

  render() {
    return (
      <div className="row row-">
        {
          (Object.keys(this.props.budgetOptions).length > 0) ?
            <BudgetOptions
              budgetOptions={this.props.budgetOptions}
              handleChange={this.handleChange}
              getSelectedBudget={this.props.getSelectedBudget}
              isFlightSelected={this.props.isFlightSelected} /> :
            <BudgetText handleChange={this.handleChange}
              isFlightSelected={this.props.isFlightSelected}
              value={this.props.input.value} />
        }
      </div>
    );
  }
}

export default BudgetWithAirfair;
