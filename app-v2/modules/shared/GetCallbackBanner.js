import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { capitalizeEveryFirstLetter } from 'helpers/parsers';
import FormOneCTA from 'modules/shared/FormOneCTA';

import { DefaultIcon } from 'helpers/Icon/Icon';

const GetCallbackBanner = ({ destination, hotelId, type }) => (
  <div className="pbc3 p24">
    <h6 className="f24 sfcw fwb mb8">Want best {destination} Packages <span className="block">with this {type}?</span></h6>
    <p className="f12 sfcw m0 mb24 pfc4">Fill in the form and get a callback from our experts.</p>
    <FormOneCTA
      rtProps={{
        to_loc: destination,
        page: 'Hotel Detail Page',
        section: 'Hotel',
        cta: 'Get Experts Callback',
        object: `Package/${hotelId}`,
      }}
      clickHandler={() => {}}
    >
      <div className="btn-filled-pri-large wfull pl8 pr8"><div className="wave"/>Get Experts' Callback</div>
    </FormOneCTA>
  </div>
);

GetCallbackBanner.propTypes = {
  destination: PropTypes.string.isRequired,
  hotelId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default GetCallbackBanner;

