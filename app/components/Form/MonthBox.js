/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';


class MonthBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div id="flexible_date_fnew" className="input form-date-check box-input-flex" onClick={this._handleClick}>
        { /*<input className="input form-date-check')}`} value={this.props.dateValue ? this.props.dateValue : ''} placeholder="Flexible" readOnly /> */ }
        {this.props.dateValue ? this.props.dateValue : 'Flexible'}
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
