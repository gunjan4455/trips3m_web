import React from 'react';
import PropTypes from 'prop-types';

import './FormLead/LeadForm.scss';

class FormDateNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDays: this.props.days || props.rtData.trip_days || props.formValues.trip_days
    };
    this.props.dispatchRxFormAction(this.state.numberOfDays, 'trip_days');
    this.onChange = this.onChange.bind(this);
    this.updateDays = this.updateDays.bind(this);
  }

  onChange(e) {
    if (e.target.value >= 2) {
      this.setState({ numberOfDays: e.target.value });
    } else {
      this.setState({ numberOfDays: 0 });
    }
    this.props.dispatchRxFormAction(e.target.value, 'trip_days');
  }

  updateDays(action) {
    let tempValue = 0;
    let newValue = 0;
    const currentValue = this.state.numberOfDays ? this.state.numberOfDays : 1;
    if (action === 'inc') {
      tempValue = 1;
    } else {
      tempValue = -1;
    }
    newValue = parseInt(currentValue, 10) + tempValue;
    if (newValue >= 2) {
      this.setState({ numberOfDays: newValue });
      this.props.dispatchRxFormAction(newValue.toString(), 'trip_days');
    }
  }

  render() {
    const { meta: { touched, error }, variation } = this.props;
    return (
      <div className="col-xs-6 p0">
        <div className={this.props.showDays ? "col-xs-12 pr0 pl8" : "hide"}>
          <label htmlFor="From" className="f14 fw9 pb8 iblock pfc3">Number Of Days<em className="pfc2">*</em></label>
          <div className="daysCount relative input-with-icon-box input-two-icons input-with-icon-box">
            <button type="button" onClick={() => this.updateDays('dec')}
              className="min-date cursorP minus-icon" />
            <input
              name="trip_days"
              type="number"
              placeholder="Days"
              className={`input text-center duration ${variation && touched && (error && 'input-error')}`}
              value={this.state.numberOfDays || ''}
              onChange={this.onChange}
              id="trip_days_fnew"
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
      </div>
    );
  }
}

FormDateNum.propTypes = {
  showDays: PropTypes.bool,
  variation: PropTypes.bool,
  dispatchRxFormAction: PropTypes.func.isRequired,
  rtData: PropTypes.object,
  days: PropTypes.string,
  meta: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired
};

FormDateNum.defaultProps = {
  showDays: false,
  rtData: {},
  days: ''
};

export default FormDateNum;
