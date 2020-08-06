import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { Flights } from 'helpers/Icon/Icon';

import styled from '@emotion/styled';

const GFlightRadioDiv = styled.div({
  '& .flight-radio': {
    display: 'none',
  },
  '& .flight-radio:checked + label p': {
    color: '#20A397 !important',
    fontWeight: '700',
  },
});

const renderFlightOption = flightOption =>
  <GFlightRadioDiv className='flexFull p8' key={flightOption.id}>
    <Field
      name="flightAnswerAttributes[optionId]"
      id={`flight-included${flightOption.id}`}
      component="input"
      className="flight-radio hide"
      type="radio"
      value={flightOption.id.toString()}
    />
    <label htmlFor={`flight-included${flightOption.id}`} className="block cursorP pr8 pl8">
      <p className="m0 f14p fw7 sfc6">
        {flightOption.name}
      </p>
    </label>
  </GFlightRadioDiv>;

const renderFlightOptions = flightOptions =>
  flightOptions.map(flightOption => renderFlightOption(flightOption));

const FlightBooking = ({ flightOptions }) => {
  if (!flightOptions) {
    return <span />;
  }

  return (
    <div className='flex alignCenter spaceBetween'>
      <label htmlFor='flights' className='flex alignCenter m0 f14p fw7'>
        <span className='block mr8 input-24'><Flights /></span><span className='f14p fw7 sfc6'>Flights</span>
      </label>
      <div className='flex alignCenter text-uppercase'>{renderFlightOptions(flightOptions.options)}</div>
    </div>
  );
};


FlightBooking.propTypes = {
  flightOptions: PropTypes.object.isRequired
};

export default FlightBooking;
