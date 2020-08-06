import React from 'react';
import { PropTypes } from 'prop-types';

import { FlightFilled, Tick } from 'helpers/Icon/Icon';

class FlightBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.checkInitialValues(),
      flightSelected: '98',
    };
  }

  checkInitialValues = () => {
    try {
      if (this.props.formValues) {
        const flightAnswerAttributes = this.props.formValues.flight_answer_attributes;
        if (flightAnswerAttributes && flightAnswerAttributes.option_id) {
          return flightAnswerAttributes.option_id;
        }
        return null;
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  handleChange = (event) => {
    if (!this.state.selected || this.state.selected === '98') {
      this.setState({ selected: '97' });
      this.props.input.onChange({
        option_id: '97',
        customization_id: '23',
      });
    } else {
      this.setState({ selected: '98' });
      this.props.input.onChange({
        option_id: '98',
        customization_id: '23',
      });
    }
  };

  render() {
    return (
      <div className={`button-box round-icon ${
          this.state.selected && this.state.selected !== '98' ? 'active' : ''
        }`}>
        <span className="tick-icon-container">
          <Tick/>
        </span>
        <div className="icon-48">
          <FlightFilled />
        </div>
        <input
          type="checkbox"
          className="checkbox-common"
          name="cust_23"
          id="flight-included1"
          value={this.state.selected}
          defaultChecked={this.state.selected === '97'}
          onChange={this.handleChange}
        />
        <p className="text-center">Flights</p>
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

