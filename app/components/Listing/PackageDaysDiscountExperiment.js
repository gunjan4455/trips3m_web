import React from 'react';
import PropTypes from 'prop-types';

import './PackageDaysDiscount.scss';

const PackageDaysDiscountExperiment = ({ days, nights, isPackageRevamp}) => (
  <div className="row row-">
    <p className={`at_packageDaysCount fw7 text-left ${isPackageRevamp ? 'f10 at_package' : 'f12'}`}>{days} Days & {nights} Nights </p>
  </div>
);

PackageDaysDiscountExperiment.propTypes = {
  days: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  isPackageRevamp: PropTypes.bool
};

export default PackageDaysDiscountExperiment;
