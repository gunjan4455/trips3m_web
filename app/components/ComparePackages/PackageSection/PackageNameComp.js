import React from 'react';
import PropTypes from 'prop-types';


const PackageNameComp = ({ pkg, i, removePackage, submittedForCompare, goBack }) => (
  <div key={pkg.id} className='col-xs-6 p8 static'>
    <h3 className='pfc1 f14 fwb scroll-f12 mb15'>{pkg.name}</h3>
    <button
      className='block f12 fw9 sfc1 mt5 mb5 scroll-hidecomparedata absolute b0'
      onClick={() => {
        removePackage(pkg, i);
        goBack();
        submittedForCompare(false);
      }}
    >
      + Change Package
    </button>
  </div>
);

PackageNameComp.propTypes = {
  pkg: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  removePackage: PropTypes.func.isRequired,
  submittedForCompare: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

export default PackageNameComp;
