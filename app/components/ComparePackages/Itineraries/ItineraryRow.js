import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';
import ItineraryComp from './ItineraryComp';


/* eslint-disable react/no-array-index-key */
const renderItineraryComps = itineraries =>
  itineraries.map((itinerary, i) => <ItineraryComp key={i} itinerary={itinerary} />);
/* eslint-enable */

const ItineraryRow = ({ itineraries, day }) => (
  <div className='col-xs-12 p0'>
    <p className='f14 pfc3 p8 headingDays'>{`Day ${day}`}</p>
    <div className='col-xs-12 p0 clear hotelContainerMain headingDays'>
      { renderItineraryComps(itineraries)}
    </div>
  </div>
);

ItineraryRow.propTypes = {
  itineraries: PropTypes.array.isRequired,
  day: PropTypes.number.isRequired
};

export default ItineraryRow;
