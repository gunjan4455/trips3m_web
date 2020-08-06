import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

  toggleCheckboxChange = (value) => {
    const { input, handleOnChange } = this.props;
    input.onChange(value);
    handleOnChange(value);
  };

  render() {
    const { label, input, disabled, defaultChecked } = this.props;

    return (
      <div className="p0 option-overflow">
        <div className="flex">
          <input
            {...input}
            type="checkbox"
            id={`filter_${input.name}_${input.value}`}
            className="checkbox-common"
            onChange={this.toggleCheckboxChange}
            disabled={disabled}
            defaultChecked={defaultChecked}
          />
          <label className='break-all' htmlFor={`filter_${input.name}_${input.value}`}>
            {label}
          </label>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func,
  input: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool
};

Checkbox.defaultProps = {
  handleOnChange: () => {},
  disabled: false,
  defaultChecked: false
};

export default Checkbox;
