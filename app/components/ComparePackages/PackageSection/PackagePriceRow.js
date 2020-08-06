import React from 'react';
import PropTypes from 'prop-types';
import PackagePriceComp from './PackagePriceComp';
import '../ComparePackages.scss';


const renderPackagePriceComps = packages => (
  packages.map(pkg => <PackagePriceComp key={pkg.id} pkg={pkg} />)
);

const PackagePriceRow = ({ packages }) => (
  <div className='col-xs-12 clear p0 hotelContainerMain headingDays'>
    { renderPackagePriceComps(packages) }
  </div>
);

PackagePriceRow.propTypes = {
  packages: PropTypes.array.isRequired,
};

export default PackagePriceRow;
