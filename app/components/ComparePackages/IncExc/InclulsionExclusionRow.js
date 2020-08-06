import React from 'react';
import PropTypes from 'prop-types';
import InclusionExclusionComp from './InclusionExclusionComp';
import '../ComparePackages.scss';


/* eslint-disable react/no-array-index-key */
const renderInclusionExclusionComps = (inclusions, uniqueInclusion) => (
  inclusions.map((inclusion, i) => {
    const included = inclusion.findIndex(item => item === uniqueInclusion) !== -1;
    return (
      <InclusionExclusionComp key={i} included={included} uniqueInclusion={uniqueInclusion} />
    );
  })
);
/* eslint-enable */

const InclusionExclusionRow = ({ inclusions, uniqueInclusion }) => (
  <div className='col-xs-12 clear p0 hotelContainerMain headingDays'>
    { renderInclusionExclusionComps(inclusions, uniqueInclusion) }
  </div>
);

InclusionExclusionRow.propTypes = {
  inclusions: PropTypes.array.isRequired,
  uniqueInclusion: PropTypes.string.isRequired
};
export default InclusionExclusionRow;
