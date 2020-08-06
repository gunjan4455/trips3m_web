import React from 'react';
import PropTypes from 'prop-types';

class NumberFormatter extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    placeholder: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    startValue: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    startValue: 0,
    className: ''
  };

  updateDays(action) {
    let newValue = 0;
    const tempValue = action === 'inc' ? 1 : -1;
    let currentValue = parseInt(this.props.input.value);
    if (isNaN(currentValue)) {
      currentValue = 1;
    }
    newValue = currentValue + tempValue;
    if (newValue >= this.props.startValue) {
      this.props.input.value = newValue;
      this.props.input.onChange(newValue);
    }
  }

  updateDaysText = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.value === '') {
      this.props.input.onChange(e.target.value);
    }
    else if (value >= this.props.startValue) {
      this.props.input.onChange(value);
    }
  };

  render() {
    return (
      <div className="clearfix p0">
        <div className="daysCount relative input-with-icon-box input-two-icons">
          <div onClick={this.updateDays.bind(this, 'dec')} className="min-date cursorP minus-icon" />
          <input
            {...this.props.input}
            type="number"
            placeholder={this.props.placeholder}
            className={`text-center duration ${this.props.className} ${this.props.meta.touched && (this.props.meta.error && 'input-error')}`}
            onChange={(e) => this.updateDaysText(e)}
          />
          <div onClick={this.updateDays.bind(this, 'inc')} className="plus-date cursorP plus-icon" />
        </div>
        {
          this.props.meta
          && this.props.meta.touched
          && (this.props.meta.error
            && <span className="input-error-text">{this.props.meta.error}</span>)
        }
      </div>
    );
  }
}

export default NumberFormatter;
