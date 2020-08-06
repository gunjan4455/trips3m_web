import React from 'react';
import PropTypes from 'prop-types';


const PackageDurationComp = ({ pkg }) => (
  <div className='col-xs-6 p8'>
    <span className='pfc3 f12 fwb'>
      {`${pkg.days} Days & ${pkg.nights} Nights`}
    </span>
  </div>
);

PackageDurationComp.propTypes = {
  pkg: PropTypes.object.isRequired,
};

export default PackageDurationComp;
