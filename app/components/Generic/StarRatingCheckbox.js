import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'components/Review/StarRatings';

class StarRatingCheckbox extends Component {

  toggleCheckboxChange = () => {
    const { handleOnChange, id } = this.props;
    handleOnChange(id);
  };

  render() {
    const isChecked = this.props.isChecked || false;
    const { value, name, disabled } = this.props;
    return (
      <div className="col-xs-6 p0">
        <input
          type="checkbox"
          name={name}
          value={value}
          id={`filter_${name}_${value}`}
          className="checkbox-common"
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
          disabled={disabled}
        />
        <label className="row row-" htmlFor={`filter_${name}_${value}`}>
          <div className="fleft">
            <StarRatings
              id={`label_${name}_${value}`}
              rating={Number(value)}
              total={5}
            />
          </div>
          {
            this.props.count !== undefined ?
            <span className='at_count hide'>[{this.props.count}]</span> :null
          }
        </label>
      </div>
    );
  }
}

StarRatingCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  count: PropTypes.number
};

export default StarRatingCheckbox;
