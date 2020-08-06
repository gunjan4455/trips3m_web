import React from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel';
import Flight from './Flight';
import NoHotelIncluded from './NoHotelIncluded';
import NoFlightIncluded from './NoFlightIncluded';
import './IncExclusion.scss';
import { PACKAGE_INTERACTED } from "../../../actions/segmentEvents";

const HotelFlight = ({ hotels, flights, hotelTitle, inclusions, trackSegment }) => {
  if (!hotels.length && !flights.length) {
    return null;
  }

  const onChangeHandler = (text) => {
    trackSegment(PACKAGE_INTERACTED, 'Hotel/Flight', text);
  };

  const availableInclusions = inclusions.filter(i => i.key === 'flights' && i.available);

  return (
    <div className="row row- sbcw relative">
      <input type="radio" name="hotelflight-radio" className="inc-exc-radio" id="HotelRadio" defaultChecked onClick={() => {onChangeHandler('Hotel');}}/>
      <label htmlFor="HotelRadio" className="col-xs-12 pl0 pr0">
        <h2 className={availableInclusions.length ? 'wfull inc-exc-button absolute t0 l0 ripple' : 'inc-exc-button absolute t0 l0 ripple'}><div className="wave-dark" />{hotelTitle}</h2>
        <div className="inc-exc-data p8 pl24 pr24">
          {hotels.length ? <Hotel list={hotels} /> : <NoHotelIncluded />}
        </div>
      </label>
      <input type="radio" name="hotelflight-radio" className="inc-exc-radio" id="FlightRadio" onClick={() => {onChangeHandler('Flight');}}/>
      <label htmlFor="FlightRadio" className="col-xs-12 pl0 pr0 pt0">
        {!availableInclusions.length ? <span className="inc-exc-button absolute t0 r0 ripple"><div className="wave-dark" />Flight</span> : null }
        <div className="inc-exc-data p8 pl24 pr24">
          {
            flights.length ?
              <Flight list={flights} /> :
              <NoFlightIncluded />
          }
        </div>
      </label>
    </div>
  );
};

HotelFlight.propTypes = {
  hotels: PropTypes.array,
  flights: PropTypes.array,
  hotelTitle: PropTypes.string,
  trackSegment: PropTypes.func,
  inclusions: PropTypes.array.isRequired
};

HotelFlight.defaultProps = {
  hotels: [],
  flights: [],
  hotelTitle: 'Hotels',
  trackSegment:() => {}
};

export default HotelFlight;
