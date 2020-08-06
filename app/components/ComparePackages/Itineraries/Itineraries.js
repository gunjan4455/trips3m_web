import React from 'react';
import PropTypes from 'prop-types';
import ItineraryRow from './ItineraryRow';
import '../ComparePackages.scss';



/* eslint-disable react/no-array-index-key */
const renderItineraryRows = itineraries =>
  itineraries.map((dayWiseItineraries, i) =>
    <ItineraryRow itineraries={dayWiseItineraries} day={i + 1} key={i} />
  );
/* eslint-enable */

const Itineraries = ({ itineraries }) => (
  <div className='col-xs-12 p0 sbcw accordian-contenido'>
    { renderItineraryRows(itineraries) }
  </div>
);

Itineraries.propTypes = {
  itineraries: PropTypes.array.isRequired
};

export default Itineraries;
