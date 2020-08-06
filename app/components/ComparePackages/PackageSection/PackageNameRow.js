import React from 'react';
import PropTypes from 'prop-types';
import PackageNameComp from './PackageNameComp';
import '../ComparePackages.scss';


const renderPackagePackageNameComps = (packages, removePackage, submittedForCompare, goBack) => (
  packages.map((pkg, i) => (
    <PackageNameComp
      key={pkg.id}
      pkg={pkg}
      i={i}
      removePackage={removePackage}
      submittedForCompare={submittedForCompare}
      goBack={goBack}
    />
  ))
);

const PackageNameRow = ({ packages, removePackage, submittedForCompare, goBack }) => (
  <div className='col-xs-12 clear p0 sticky-border-hide hotelContainerMain headingDays'>
    { renderPackagePackageNameComps(packages, removePackage, submittedForCompare, goBack) }
  </div>
);

PackageNameRow.propTypes = {
  packages: PropTypes.array.isRequired,
  removePackage: PropTypes.func.isRequired,
  submittedForCompare: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

export default PackageNameRow;
