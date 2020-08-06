import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComparePackages from '../../components/ComparePackages/ComparePackages';

class ComparePackagesMain extends Component {
  render() {
    const { details, removePackage, closeAndRemoveCompareData,
      submittedForCompare, comparedPackagesIndex } = this.props;

    return (
      <div>
        {
          details && details.packages && details.packages.length ?
            <ComparePackages
              details={details}
              removePackage={removePackage}
              closeAndRemoveCompareData={closeAndRemoveCompareData}
              submittedForCompare={submittedForCompare}
              comparedPackagesIndex={comparedPackagesIndex} /> : null
        }
      </div>
    );
  }
}

ComparePackagesMain.propTypes = {
  details: PropTypes.object.isRequired,
  removePackage: PropTypes.func.isRequired,
  closeAndRemoveCompareData: PropTypes.func.isRequired,
  submittedForCompare: PropTypes.func.isRequired,
  comparedPackagesIndex: PropTypes.string.isRequired,
  removeCompareData: PropTypes.func.isRequired
};

export default ComparePackagesMain;
