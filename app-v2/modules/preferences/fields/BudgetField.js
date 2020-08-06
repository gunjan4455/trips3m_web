import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { numberWithCommas } from 'helpers/parsers';
import { BudgetIcon } from 'helpers/Icon/Icon';
import { required } from 'utils/formValidators';

const renderBudgetTextField = ({ isFlightSelected, input, meta: { touched, error } }) => (
  <div className="budget-textbox at_editbudget">
    <label htmlFor="From" className="f14 fw9 pb8 block pfc3">
      Budget {isFlightSelected ? 'With' : 'Without'} Airfare :
      <span className="pfc4 fw4">(per person)</span>
    </label>

    <div className="row row-">
      <div className="input-with-icon-box">
        <span className="input-icon"><BudgetIcon /></span>
        <input {...input} placeholder="Enter your budget value" />
        {
          touched &&
          (error && <span className="input-error-text">{error}</span>)
        }
      </div>
    </div>
  </div>
);

renderBudgetTextField.propTypes = {
  isFlightSelected: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object
};

const budgetError = undefined;

const getBudgetOptionFields = (budgetOptions, flightSelected) => {
  const budgetFields = budgetOptions.map((budgetOption) => {
    const id = `${budgetOption.min_price}-${budgetOption.max_price}`;
    return (
      <div className="iblock p5 pr8 pl0" key={id}>
        <Field
          name="budget"
          component="input"
          className="radio-common"
          id={id}
          type="radio"
          value={`${budgetOption.min_price}..${budgetOption.max_price}`}
        />
        <label className='pl15 pr15 cursorP' htmlFor={id}>
          <p className="m0">
            ₹ {numberWithCommas(budgetOption.min_price)}
            -{numberWithCommas(budgetOption.max_price)}
          </p>
        </label>
      </div>
    );
  });
  return (
    <div className="clearfix">
      <p className="f14p fw7 sfc6 m0">Budget {(flightSelected) ? 'With ' : 'Without '}Airfare: ( per person )<em className="pfc2">*</em></p>
      {budgetFields}
      {budgetError && <span className="input-error-text">{budgetError}</span>}
    </div>
  );
};

class BudgetField extends React.Component {
  static propTypes = {
    flightAnswerValue: PropTypes.object,
    hotelStarsValues: PropTypes.object,
    flightBudget: PropTypes.object,
    hotelBudget: PropTypes.object,
    noHotelValue: PropTypes.bool,
  };

  getBudgetOptions() {
    const idToStar = {
      32: '2Star',
      8: '3Star',
      7: '4Star',
      6: '5Star'
    };
    const flightOption = this.props.flightAnswerValue;
    const hotelStarsOptions = this.props.hotelStarsValues;
    const noHotelValue = this.props.noHotelValue;

    // no preferences are there
    if (!hotelStarsOptions) {
      return undefined;
    }

    const flightBudget = this.props.flightBudget && this.props.flightBudget.flightPrice;

    const selectedHotelOptions = [];
    for (const hotelOption in hotelStarsOptions) {
      if (hotelStarsOptions[hotelOption]) {
        selectedHotelOptions.push(hotelOption);
      }
    }
    // get flight budget
    const flightPrice = (flightOption.customizationId === 23 && flightOption.optionId === '97')
      ? flightBudget
      : 0;

    // get hotel budget
    // 96 - No hotel
    if (hotelStarsOptions && selectedHotelOptions.length && !noHotelValue && this.props.hotelBudget) {
      const hotelBudgets = this.props.hotelBudget[idToStar[Math.min(...selectedHotelOptions)]];

      return hotelBudgets.map(hotelBudget => (
        {
          max_price: hotelBudget.maxPrice + flightPrice,
          min_price: hotelBudget.minPrice + flightPrice
        }
      ));
    }
    return undefined;
  }

  isFlightSelected() {
    return (this.props.flightAnswerValue && this.props.flightAnswerValue.optionId === '97');
  }

  render() {
    const budgetOptions = this.getBudgetOptions();
    const flightSelected = this.isFlightSelected();

    return budgetOptions ?
      getBudgetOptionFields(budgetOptions, flightSelected, this.error) :
      <Field
        name="budget"
        component={renderBudgetTextField}
        isFlightSelected={flightSelected}
      />;
  }
}

export default BudgetField;
