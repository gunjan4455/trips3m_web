import React from 'react';
import PropTypes from 'prop-types';
import PackageCustomizeButtonComp from './PackageCustomizeButtonComp';
import '../ComparePackages.scss';


const renderCustomizeButtonComps = packages => (
  packages.map(pkg => <PackageCustomizeButtonComp key={pkg.id} pkg={pkg} />)
);

const PackageCustomizeButtonRow = ({ packages }) => (
  <div className='col-xs-12 p0 scroll-hidecomparedata hotelContainerMain'>
    { renderCustomizeButtonComps(packages) }
  </div>
);

PackageCustomizeButtonRow.propTypes = {
  packages: PropTypes.array.isRequired,
};

export default PackageCustomizeButtonRow;
