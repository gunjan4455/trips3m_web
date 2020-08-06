import React from 'react';
import './Flight.scss';
import {
  Flight as FlightIcon
} from 'helpers/Icon/Icon';

const NoFlightIncluded = () => (
  <div className="row row- pt24 pb24">
      <span className="greyscale flightIconContainer"><FlightIcon className="greyscale flight-icon-disabled" /></span>
    <p className="pt8 f16 fw9 pfc4 text-center">No Flight Included</p>
  </div>
);

export default NoFlightIncluded;
