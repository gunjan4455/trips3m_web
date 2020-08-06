import React from 'react';
import PropTypes from 'prop-types';

import { BudgetHigh, BudgetIconNew, BudgetLow, BudgetMedium, BudgetMin, Tick } from 'helpers/Icon/Icon';
import { numberWithCommas } from '../../../../../utils/parsers';
import Footer from '../footer';
import {
  SEQUENTIAL_FORM_FIVE,
  SEQUENTIAL_FORM_THREE,
} from '../../../../../constants/Slider';

const getBudgetIcon = (index, isDefault) => {
  if (isDefault) {
    if (index === 0 ) {
      return <BudgetMin/>;
    }
    if (index === 1) {
      return <BudgetLow />;
    }
    if (index === 2) {
      return <BudgetMedium />;
    }
  } else {
    if (index === 0) {
      return <BudgetLow />;
    }
    if (index === 1) {
      return <BudgetMedium />;
    }
  }
  return <BudgetHigh />;
};

const BudgetOptions = ({
                         budgetOptions,
                         handleChange,
                         getSelectedBudget,
                         isFlightSelected,
                         formValues
                       }) => {
  const budgetKeys = Object.keys(budgetOptions);
  const budgetFields = budgetKeys.slice(0, 3).map((key, index) => {
    const isChecked = formValues.budget ===
      `${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`;
    return (
      <div className={`button-box round-icon budget-icon ${isChecked ? 'active' : ''}`} key={key}>
        <span className="tick-icon-container">
          <Tick/>
        </span>
        <div className="icon-48">
          {getBudgetIcon(index)}
        </div>
        <input
          id={key}
          type="radio"
          className="radio-common"
          name="budgetOptions"
          value={`${budgetOptions[key]}..${
            budgetOptions[budgetKeys[index + 1]]
            }`}
          checked={isChecked}
          onChange={handleChange}
        />
        <p className="text-center">₹{numberWithCommas(budgetOptions[key])} -
          ₹{numberWithCommas(budgetOptions[budgetKeys[index + 1]])}</p>
        <p className="pfc4 fw4 f12 text-center">per person</p>
      </div>
    );
  });
  return (
    <div className="flex spaceBetween mb24 flexWrap budget-selector-container">
      {budgetFields}
    </div>
  );
};

BudgetOptions.propTypes = {
  budgetOptions: PropTypes.object,
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  getSelectedBudget: PropTypes.string,
  isFlightSelected: PropTypes.bool.isRequired,
};

BudgetOptions.defaultProps = {
  getSelectedBudget: '',
  budgetOptions: {
    budget: 25250,
    deluxe: 26750,
    min: 24500,
    standard: 26000
  }
};


const DefaultBudgetOptions = ({
                                budgetOptions,
                                handleChange,
                                getSelectedBudget,
                                isFlightSelected,
                                formValues
                              }) => {
  const budgetKeys = Object.keys(budgetOptions);

  const displayValues = (key) => {
    if (key.min === 10000) {
      return 'Below ₹20,000';
    }
    if (key.min === 60000) {
      return 'Above ₹60,000';
    }
    return `₹ ${numberWithCommas(key.min)} - ₹ ${numberWithCommas(key.max)}`;
  };

  const budgetFields = budgetKeys.slice(0, 4).map((key, index) => {
    const isChecked = formValues.budget ===
      `${budgetOptions[key].min}..${budgetOptions[key].max}`;
    return (
      <div className={`button-box round-icon budget-icon ${isChecked ? 'active' : ''}`} key={key}>
        <span className="tick-icon-container">
          <Tick/>
        </span>
        <div className="icon-48">
          {getBudgetIcon(index, true)}
        </div>
        <input
          id={key}
          type="radio"
          className="radio-common"
          name="budgetOptions"
          value={`${budgetOptions[key].min}..${
            budgetOptions[key].max
            }`}
          checked={isChecked}
          onChange={handleChange}
        />
        <p className="text-center">{displayValues(budgetOptions[key])}</p>
        <p className="pfc4 fw4 f12 text-center">per person</p>
      </div>
    );
  });
  return (
    <div className="flex spaceBetween mb24 flexWrap budget-selector-container">
      {budgetFields}
    </div>
  );
};

DefaultBudgetOptions.propTypes = {
  budgetOptions: PropTypes.object,
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  getSelectedBudget: PropTypes.string,
  isFlightSelected: PropTypes.bool.isRequired,
};

DefaultBudgetOptions.defaultProps = {
  getSelectedBudget: '',
  budgetOptions: {
    "min": { "min": 10000, "max": 20000 },
    "budget": { "min": 20000, "max": 40000 },
    "standard": { "min": 40000, "max": 60000 },
    "deluxe": { "min": 60000, "max": 80000 }
  }
};

export const BudgetText = ({
                      handleChange,
                      isFlightSelected,
                      getSelectedBudget,
                      value,
                    }) => (
  <div className="budget-textbox pb15">
    <label htmlFor="From" className="f14 fw9 pb8 block pfc3">Set Your Own Budget <span
      className="pfc4 fw4 f12 fright">in INR per person</span></label>
    <div className="row row-">
      <div className="input-with-icon-box">
        <span className="input-icon">
          <BudgetIconNew />
        </span>
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
  value: PropTypes.string.isRequired,
};

BudgetText.defaultProps = {
  isFlightSelected: false,
  getSelectedBudget: '',
};

class BudgetWithAirfair extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    budgetOptions: PropTypes.object,
    getSelectedBudget: PropTypes.string,
    callNextSlide: PropTypes.func,
    isFlightSelected: PropTypes.bool,
  };

  static defaultProps = {
    budgetOptions: {},
    getSelectedBudget: '',
    isFlightSelected: false,
  };

  handleChange = event => {
    this.props.input.onChange(event.target.value);
  };

  goBack = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_THREE,
      isBackButton: true
    });
  };

  goForward = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_FIVE,
    });
  };

  render() {
    return (
      <div className="row row- form-body">
        <div className="p15">
          {Object.keys(this.props.budgetOptions).length > 0 ? (
            <div>
              <BudgetOptions
                budgetOptions={this.props.budgetOptions}
                handleChange={this.handleChange}
                getSelectedBudget={this.props.getSelectedBudget}
                isFlightSelected={this.props.isFlightSelected}
                formValues={this.props.formValues}
              />
            </div>
          ) : (
            <DefaultBudgetOptions
              handleChange={this.handleChange}
              getSelectedBudget={this.props.getSelectedBudget}
              isFlightSelected={this.props.isFlightSelected}
              formValues={this.props.formValues}
            />
          )}
          <div className="or-divider">
            <span>OR</span>
          </div>
        </div>
        <div className="p15">
          <BudgetText
            handleChange={this.handleChange}
            isFlightSelected={this.props.isFlightSelected}
            value={this.props.input.value}
          />
        </div>
        <Footer goBack={this.goBack} goForward={this.goForward} />
      </div>
    );
  }
}

BudgetWithAirfair.propTypes = {
  formStage: PropTypes.number,
  formValues: PropTypes.obj,
  progressBar: PropTypes.func
};

export default BudgetWithAirfair;
