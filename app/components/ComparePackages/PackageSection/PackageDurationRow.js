import React from 'react';
import PropTypes from 'prop-types';
import PackageDurationComp from './PackageDurationComp';
import '../ComparePackages.scss';


const renderPackageDurationComps = packages => (
  packages.map(pkg => <PackageDurationComp key={pkg.id} pkg={pkg} />)
);

const PackageDurationRow = ({ packages }) => (
  <div id="scroll-hideMain" className='col-xs-12 clear p0 scroll-hidecomparedata hotelContainerMain headingDays'>
    { renderPackageDurationComps(packages) }
  </div>
);

PackageDurationRow.propTypes = {
  packages: PropTypes.array.isRequired,
};

export default PackageDurationRow;
