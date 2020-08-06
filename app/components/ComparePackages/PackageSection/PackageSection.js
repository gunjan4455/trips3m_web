import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';
import Sticky from 'react-stickynode';
import { goBack as goBackAction } from 'react-router-redux';
import { connect } from 'react-redux';
import PackageNameRow from './PackageNameRow';
import PackageDurationRow from './PackageDurationRow';
import PackagePriceRow from './PackagePriceRow';
import PackageCustomizeButtonRow from './PackageCustomizeButtonRow';
import BottomSelectButton from '../BottomSelectButton';


const renderPackageDetails = (packages, removePackage, goBack, submittedForCompare) => (
  <div className="col-xs-12 p0 xyz">
    <PackageNameRow
      packages={packages}
      removePackage={removePackage}
      submittedForCompare={submittedForCompare}
      goBack={goBack}
    />
    <PackageDurationRow packages={packages} />
    <PackagePriceRow packages={packages} />
    <PackageCustomizeButtonRow packages={packages} />
  </div>
);

const renderPackageDetailsSticky = (packages, removePackage, goBack, submittedForCompare) => (
  <div className='col-xs-12 p0 xyz'>
    <PackageNameRow
      packages={packages}
      removePackage={removePackage}
      submittedForCompare={submittedForCompare}
      goBack={goBack}
    />
    <PackagePriceRow packages={packages} />
  </div>
);

const PackageSection = ({ details, removePackage,
  goBack, submittedForCompare }) => (
    <div>
      <div>
        <div className='row row- sbcw headingDays'>
          { renderPackageDetails(details.packages, removePackage,
            goBack, submittedForCompare) }
        </div>
      </div>

      <Sticky className='row row- h0' activeClass='sticky-top btnHideActive' innerZ={2}>
        <div className='row row- sbcw headingDays'>
          { renderPackageDetailsSticky(details.packages, removePackage,
            goBack, submittedForCompare) }
        </div>
      </Sticky>
      <BottomSelectButton details={details} />
    </div>
);

PackageSection.propTypes = {
  details: PropTypes.object.isRequired,
  removePackage: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  submittedForCompare: PropTypes.func.isRequired,
};

export default connect(null, {
  goBack: goBackAction
})(PackageSection);
