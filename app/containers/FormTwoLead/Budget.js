import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBudgetOptions, getSelectedBudget, isFlightSelected } from '../../reducers/formTwoLead';
import {
  BudgetIcon
} from 'helpers/Icon/Icon';
import { numberWithCommas } from '../../utils/parsers';

const BudgetOptions = ({ budgetOptions, handleChange, selectedBudget, flightSelected }) => {
  const budgetFields = budgetOptions.map((budgetOption) => {
    const id = `${budgetOption.min_price}-${budgetOption.max_price}`;
    return (
      <div className="col-xs-6 p8" key={id}>
        <input
          id={id}
          type="radio"
          className="radio-common"
          name="budgetOptions"
          value={`${budgetOption.min_price}..${budgetOption.max_price}`}
          checked={selectedBudget === `${budgetOption.min_price}..${budgetOption.max_price}`}
          onChange={handleChange}
        />
        <label htmlFor={id}>
          <p>
            ₹ {numberWithCommas(budgetOption.min_price)}
            -{numberWithCommas(budgetOption.max_price)}
          </p>
        </label>
      </div>
    );
  });
  return (
    <div className="row p8">
      <p className="fw9 p8">Budget { (flightSelected) ? 'With ' : 'Without ' }Airfare: ( per person )</p>
      {budgetFields}
    </div>
  );
};
BudgetOptions.propTypes = {
  budgetOptions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedBudget: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  flightSelected: PropTypes.bool,
};
BudgetOptions.defaultProps = {
  selectedBudget: 0,
  flightSelected: false,
};

const BudgetText = ({ handleChange, selectedBudget, flightSelected }) => (
  <div className="pt15 pb15">
    <label htmlFor="budegt-input" className="fw9 pb15 block">
      Budget { (flightSelected) ? 'With ' : 'Without ' }Airfare: (per person)
    </label>
    <div className="input-with-icon-box row row-">
      <span className="input-icon"><BudgetIcon /></span>
      <input className="input" name="budegt-input" type="text" placeholder="Enter Your Budget Value" value={selectedBudget} onChange={handleChange} />
    </div>
  </div>
);

BudgetText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedBudget: PropTypes.string,
  flightSelected: PropTypes.bool,
};
BudgetText.defaultProps = {
  selectedBudget: 0,
  flightSelected: false,
};

@connect(
  state => ({
    budgetOptions: getBudgetOptions(state),
    selectedBudget: getSelectedBudget(state),
    isFlightSelected: isFlightSelected(state),
  })
)
class Budget extends React.Component {

  static propTypes = {
    input: PropTypes.object.isRequired,
    budgetOptions: PropTypes.array,
    selectedBudget: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    isFlightSelected: PropTypes.bool,
  }
  static defaultProps = {
    budgetOptions: [],
    selectedBudget: '1000',
    isFlightSelected: false,
  }
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
          (this.props.budgetOptions && this.props.budgetOptions.length > 0)
          ? <BudgetOptions
            budgetOptions={this.props.budgetOptions}
            handleChange={this.handleChange}
            selectedBudget={this.props.selectedBudget}
            flightSelected={this.props.isFlightSelected}
          />
          : <BudgetText
            handleChange={this.handleChange}
            selectedBudget={this.props.selectedBudget}
            flightSelected={this.props.isFlightSelected}
          />
        }
      </div>
    );
  }
}

export default Budget;
