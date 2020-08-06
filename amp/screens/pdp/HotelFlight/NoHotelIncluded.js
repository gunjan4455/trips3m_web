import React from 'react';

import './Hotel.scss';

const NoHotelIncluded = () => (
  <div className="row row- pt24 pb24">
    <span className="greyscale flight-icon-disabled" />
    <p className="pt8 f16 fw9 pfc4 text-center">No Hotel Included</p>
  </div>
);

export default NoHotelIncluded;
