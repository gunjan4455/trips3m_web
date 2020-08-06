/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

import { DateNotDecided } from "../../../../../helpers/Icon/Icon";

class MonthBox extends React.Component {

  _handleClick = (e) => {
    this.props.onClick(e);
  };

  render() {
    return (
      <div id="flexible_date_fnew" className="input form-date-check box-input-flex" onClick={this._handleClick}>
        <div className="button-box active">
          <div className="icon-48">
            <DateNotDecided />
          </div>
          <p className="text-center">Dates Not Decided</p>
        </div>
      </div>
    );
  }
}

MonthBox.propTypes = {
  onClick: propTypes.func,
  dateValue: propTypes.string
};

MonthBox.defaultProps = {
  onClick: () => {},
  dateValue: ''
};

export default MonthBox;
