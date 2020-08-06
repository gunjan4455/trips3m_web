import React from 'react';
import './Hotel.scss';
import {
  Hotel as HotelIcon
} from 'helpers/Icon/Icon';

const NoHotelIncluded = () => (
  <div className="row row- pt24 pb24">
    <HotelIcon className="greyscale flight-icon-disabled" />
    <p className="pt8 f16 fw9 pfc4 text-center">No Hotel Included</p>
  </div>
);

export default NoHotelIncluded;
