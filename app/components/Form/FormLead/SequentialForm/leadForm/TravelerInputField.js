import React from 'react';
import PropTypes from 'prop-types';

class TravelerInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue
    };
    this.props.dispatchRxFormAction(this.state.inputValue, this.props.fieldName);
  }

  onChange = (e) => {
    let value = parseInt(e.target.value);
    if(this.props.fieldName === 'adult') {
      if (value >= 2) {
        this.setState({ inputValue: value });
      } else {
        value = 1;
        this.setState({ inputValue: 1 });
      }
    }else {
      if(value >=0){
        this.setState({ inputValue: value });
      }else {
        value = 0;
        this.setState({ inputValue: 0 });
      }
    }
    this.props.dispatchRxFormAction(value, this.props.fieldName);
    this.props.handleTravelerCount(value);
  };

  updateDays = (action) => {
    let tempValue = 0;
    let newValue = 0;
    let currentValue = 0;
    if(this.props.fieldName === 'adult'){
      currentValue = this.state.inputValue ? this.state.inputValue : 1;
    }else {
      currentValue = this.state.inputValue ? this.state.inputValue : 0;
    }

    if (action === 'inc') {
      tempValue = 1;
    } else {
      tempValue = -1;
    }
    newValue = parseInt(currentValue, 10) + tempValue;
    if (newValue >= 1 && this.props.fieldName === 'adult') {
      this.setState({ inputValue: newValue });
      this.props.dispatchRxFormAction(newValue.toString(), this.props.fieldName);
    }
    if ((this.props.fieldName === 'infant' || this.props.fieldName === 'child') && newValue >= 0) {
      this.setState({ inputValue: newValue });
      this.props.dispatchRxFormAction(newValue.toString(), this.props.fieldName);
      this.props.handleTravelerCount(newValue);
    }
  };

  handleBlur = (e) => {
    if(e.target.value === '') {
      this.setState({ inputValue: 0 });
    }
  };

  render() {
    return (
        <div >
          <div className="daysCount relative input-with-icon-box input-two-icons input-with-icon-box">
            <button type="button" onClick={() => this.updateDays('dec')}
              className="min-date cursorP minus-icon" />
            <input
              name={this.props.fieldName}
              type="number"
              placeholder={this.props.placeholder}
              className="input text-center duration"
              value={this.state.inputValue}
              onChange={this.onChange}
              id={this.props.fieldName}
              onBlur={this.handleBlur}
            />
            <button type="button" onClick={() => this.updateDays('inc')}
              className="plus-date cursorP plus-icon" />
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

TravelerInputField.propTypes = {
  dispatchRxFormAction: PropTypes.func.isRequired,
  handleTravelerCount: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  placeholder: PropTypes.string
};

TravelerInputField.defaultProps = {
  inputValue: ''
};

export default TravelerInputField;
