import React from 'react';
import PropTypes from 'prop-types';

import { BudgetLow, BudgetMedium, BudgetHigh } from 'helpers/Icon/Icon';

const Budget = props => (
  <div className="form-body">
    <div className="form-header-secondary">
      <h4 className="f24 fw9 text-center mb15">Budget</h4>
      <div className="progress-bar-container flex">
        {[...Array(props.formStage)].map((e, i) => (
          <span className="progress-indicator" key={i} />
        ))}
      </div>
    </div>
    <div className="p15">
      <div className="flex spaceBetween mb24 flexWrap">
        <div className="button-box">
          <div className="icon-48">
            <BudgetHigh />
          </div>
          <p className="text-center">Above 60,000</p>
        </div>
        <div className="button-box">
          <div className="icon-48">
            <BudgetMedium />
          </div>
          <p className="text-center">20,000 - 40,000</p>
        </div>
        <div className="button-box active">
          <div className="icon-48">
            <BudgetLow />
          </div>
          <p className="text-center">10,000 - 20,000</p>
        </div>
      </div>
    </div>
  </div>
);

Budget.propTypes = {
  formStage: PropTypes.number,
};

export default Budget;
