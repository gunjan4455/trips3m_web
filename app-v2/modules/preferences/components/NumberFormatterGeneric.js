import React from 'react';
import PropTypes from 'prop-types';

import './NumberFormatterGeneric.scss';

class NumberFormatter extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    placeholder: PropTypes.string,
    startValue: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    error: PropTypes.object
  };

  static defaultProps = {
    placeholder: '',
    startValue: 0,
    className: ''
  };

  updateDays(action) {
    let newValue = 0;
    const tempValue = action === 'inc' ? 1 : -1;
    let currentValue = parseInt(this.props.value);
    if (isNaN(currentValue)) {
      currentValue = 0;
    }
    newValue = currentValue + tempValue;
    if (newValue >= this.props.startValue) {
      this.props.onChange(newValue, action);
    }
  }

  updateDaysText = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.value === '') {
      this.props.onChange(e.target.value);
    } else if (value >= this.props.startValue) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <div className="clearfix p0">
        <div className="numberCount relative input-with-icon-box input-two-icons">
          <input
            type="number"
            value={this.props.value}
            placeholder={this.props.placeholder}
            className={`text-center duration ${this.props.className} ${this.props.error && 'input-error'}`}
            onChange={(e) => this.updateDaysText(e)}
            disabled
          />
          <div onClick={this.updateDays.bind(this, 'dec')} className="min-date cursorP minus-icon" />
          <div onClick={this.updateDays.bind(this, 'inc')} className="plus-date cursorP plus-icon" />
        </div>
        {
          this.props.error
          && <span className="input-error-text">{this.props.error}</span>
        }
      </div>
    );
  }
}

export default NumberFormatter;
