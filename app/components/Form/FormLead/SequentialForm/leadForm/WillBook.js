import React from 'react';
import PropTypes from 'prop-types';

import FilterClear from '../../FilterClear';

const willBookPrefCustomizations = {
  202: 'In Next 2-3 Days',
  203: 'In This Week',
  204: 'In This Month',
  205: 'Later Sometime',
  256: 'Just Checking Price',
};

class WillBook extends React.Component {
  constructor(props) {
    super(props);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.state = {
      selected: this.checkInitialValues(),
    };
  }

  checkInitialValues() {
    try {
      if (this.props.formValues) {
        const willBookAttributes = this.props.formValues
          .other_answers_attributes[0];
        if (willBookAttributes && willBookAttributes.optionId) {
          return willBookAttributes.optionId;
        }
        return null;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  isChecked(optionId) {
    try {
      let index = -1;
      if (this.props.input.value !== '') {
        index = [this.props.input.value].findIndex(
          obj => obj.option_id.toString() === optionId.toString()
        );
      }
      return index !== -1;
    } catch (e) {
      return false;
    }
  }

  handleChange(event) {
    this.props.input.onChange({
      option_id: event.target.value,
      customization_id: '43',
    });
  }

  render() {
    return (
      <div className="clearfix will-book-comp">
        <div className="iblock wfull">
          <p className="f14p fw7 sfc6 m0 iblock f14">
            I Will Book<em className="pfc2">*</em>
          </p>
          <FilterClear
            name="other_answers_attributes[0]"
            text="Clear"
            type="radio"
            id="id_other_answers_attributes[0]"
          />
        </div>
        <div className="row row-">
          <div className="row row-8 flex flexWrap formBox">
            {Object.keys(willBookPrefCustomizations).map((key, index) => (
              <div
                className="col-xs-6 p8 will-book-con-options at_edit_willbook"
                key={key}>
                <input
                  type="radio"
                  className="radio-common"
                  name="cust_43"
                  id={`radio_button_${key}_${index}`}
                  value={key}
                  checked={this.isChecked(key)}
                  onChange={this.handleChange}
                  defaultChecked={this.state.selected === key}
                />
                <label
                  htmlFor={`radio_button_${key}_${index}`}
                  className="cursorP">
                  <p className="m0">{willBookPrefCustomizations[key]}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

WillBook.propTypes = {
  input: PropTypes.object.isRequired,
  formValues: PropTypes.object,
};

WillBook.defaultProps = {
  formValues: {},
};

export default WillBook;
