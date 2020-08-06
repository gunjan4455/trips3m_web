import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Flights
} from 'helpers/Icon/Icon';

class FlightBooking extends React.Component {
  constructor(props) {
    super(props);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.state = {
      selected: this.checkInitialValues()
    };
  }

  checkInitialValues() {
    try {
      if (this.props.formValues) {
        const flightAnswerAttributes = this.props.formValues.flight_answer_attributes;
        if (flightAnswerAttributes && flightAnswerAttributes.optionId) {
          return flightAnswerAttributes.optionId;
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
        index = [this.props.input.value].findIndex(obj =>
          obj.option_id.toString() === optionId.toString());
      }
      return (index !== -1);
    } catch (e) {
      return false;
    }
  }

  handleChange(event) {
    this.props.input.onChange({ option_id: event.target.value, customization_id: '23' });
  }

  render() {
    return (
      <div>
        <div className="flight-included col-xs-8 pr0 pl0">
          <p className="fw9 relative m0"><span className="flight-icon"><Flights /></span>Flights To Be Included?</p>
        </div>
        <div className="col-xs-4 pr0 pl0 text-right">
          <div className="col-xs-6 pl0 pr0">
            <input
              type="radio"
              className="flight-radio hide"
              name="cust_23"
              id="flight-included1"
              value="97"
              defaultChecked={this.state.selected === '97'}
              checked={this.isChecked(97)}
              onChange={this.handleChange}
            />
            <label htmlFor="flight-included1" className="cursorP pr8 pl8"><p className="m0 pfc4 fw4 f12">YES</p></label>
          </div>
          <div className="col-xs-6 pl0 pr0">
            <input
              type="radio"
              className="flight-radio hide"
              name="cust_23"
              id="flight-included2"
              value="98"
              defaultChecked={this.state.selected === '98'}
              checked={this.isChecked(98)}
              onChange={this.handleChange}
            />
            <label htmlFor="flight-included2" className="cursorP pr8 pl8"><p className="m0 pfc4 fw4 f12">NO</p></label>
          </div>
        </div>
      </div>
    );
  }
}

FlightBooking.propTypes = {
  input: PropTypes.object.isRequired,
  formValues: PropTypes.object
};

FlightBooking.defaultProps = {
  formValues: {}
};

export default FlightBooking;
