import React from 'react';
import PropTypes from 'prop-types';

import './FormLead/LeadForm.scss';

import { Flight } from 'helpers/Icon/Icon';


const FlightOptions = ({ input }) => {
  const handleChange = (event) => {
    input.onChange(event.target.value);
  };
  return (
    <div className="row">
      <div className="row row- flight-included-con">
        <div className="flight-included col-xs-8 pl0 pr0">
          <p className="fw9 relative"><span className="flight-icon"><Flight /></span>Flights To Be Included?</p>
        </div>
        <div className="col-xs-4 pl0 pr0">
          <div className="col-xs-6 pl0 pr0">
            <input
              type="radio"
              defaultChecked="true"
              name="flightincluded"
              id="flightIncluded1"
              className="flight-radio"
              value="97"
              selected={input.value === '97'}
              onChange={handleChange}
            />
            <label htmlFor="flightIncluded1">
              <p>NO</p>
            </label>
          </div>
          <div className="col-xs-6 pl0 pr0">
            <input
              type="radio"
              name="flightincluded"
              id="flightIncluded2"
              className="flight-radio"
              selected={input.value === '98'}
              value="98"
              onChange={handleChange}
            />
            <label htmlFor="flightIncluded2">
              <p>YES</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

FlightOptions.propTypes = {
  input: PropTypes.object.isRequired
};

export default FlightOptions;
