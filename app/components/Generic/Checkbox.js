import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

  toggleCheckboxChange = () => {
    const { handleOnChange, id } = this.props;
    handleOnChange(id);
  }
  render() {
    const isChecked = this.props.isChecked || false;
    const { title, value, name } = this.props;
    return (
      <div className="col-xs-6 p0 option-overflow">
        <div className="flex">
        <input
          type="checkbox"
          name={name}
          value={value}
          id={`filter_${name}_${value}`}
          className="checkbox-common"
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
          disabled={this.props.disabled}
        />
        <label className='break-all' htmlFor={`filter_${name}_${value}`}>
          {title}
        </label>
          {
            this.props.count !== undefined ?
              <span className='at_count hide iblock pl0 p8' >[{this.props.count}]</span> : null
          }
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  count: PropTypes.number
};

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
