import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollPercentage } from 'react-scroll-percentage';

import {
  onScroll,
  trackSegment,
  PACKAGE_COMPARE_CLICKED,
  DEFAULT_VALUE
} from '../../actions/segmentEvents';
import CompareHeader from './CompareHeader';
import PackageSection from './PackageSection/PackageSection';
import AccordionPackage from './AccordionPackage';


class ComparePackages extends Component {

  componentDidMount() {
    const {  details, comparedPackagesIndex } = this.props;
    let destinations = '';
    let days = '';
    let compareIds = ',';

    details.packages.map((item) => {
      destinations = destinations.concat(item.name, ',');
      days = days.concat(item.days, ',');
      compareIds = compareIds.concat(item.id, ',');
    });

    trackSegment({
      event: PACKAGE_COMPARE_CLICKED,
      section: 'Compare Packages',
      object: '',
      cta: '',
      package_id: details.packages[0].id,
      label: `Days:${days}::Index:${comparedPackagesIndex}::Hotels:`,
      value: DEFAULT_VALUE,
      category: `Destination:${destinations}`,
      compare_ids: compareIds
    });
  }

  render() {
    const { details, removePackage, closeAndRemoveCompareData, submittedForCompare } = this.props;
    return (
      <div>
        <ScrollPercentage onChange={onScroll}>
          <div className='row row- pb64'>
            <CompareHeader
              name="Compare Packages"
              closeAndRemoveCompareData={closeAndRemoveCompareData}
              submittedForCompare={submittedForCompare}
            />
            <PackageSection
              details={details}
              removePackage={removePackage}
              submittedForCompare={submittedForCompare}
            />
            <AccordionPackage details={details} />
          </div>
        </ScrollPercentage>
      </div>
    );
  }
};

ComparePackages.propTypes = {
  details: PropTypes.object.isRequired,
  removePackage: PropTypes.func.isRequired,
  closeAndRemoveCompareData: PropTypes.func.isRequired,
  submittedForCompare: PropTypes.func.isRequired,
  comparedPackagesIndex: PropTypes.string.isRequired
};

export default ComparePackages;
