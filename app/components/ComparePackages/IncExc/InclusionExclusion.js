import React from 'react';
import PropTypes from 'prop-types';
import InclusionExclusionRow from './InclulsionExclusionRow';
import '../ComparePackages.scss';



/* eslint-disable react/no-array-index-key */
const renderInclusionExclusionRows = (inclusions, uniqueInclusions) =>
  uniqueInclusions.map((uniqueInclusion, i) =>
    <InclusionExclusionRow key={i} inclusions={inclusions} uniqueInclusion={uniqueInclusion} />);
/* eslint-enable */

const InclusionExclusion = ({ inclusions, uniqueInclusions }) => (
  <div className='col-xs-12 p0 sbcw accordian-contenido'>
    { renderInclusionExclusionRows(inclusions, uniqueInclusions) }
  </div>
);

InclusionExclusion.propTypes = {
  inclusions: PropTypes.array.isRequired,
  uniqueInclusions: PropTypes.array.isRequired
};

export default InclusionExclusion;
