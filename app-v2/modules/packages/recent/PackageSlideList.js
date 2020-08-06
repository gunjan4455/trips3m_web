/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import PackageSlider from 'components/PackageDetails/PackageSlider';

const PackageSlideList = ({ attributes = {}, isWeekendPackage, submitWeekendFormAction, closeForm, selectedMonth }) => {
  const { packagesList, heading} = attributes;
  return (packagesList && packagesList.length > 0)
    ? (
      <div className="clearfix">
        <PackageSlider
          packagesList={packagesList}
          heading={heading}
          isWeekendPackage={isWeekendPackage}
          submitWeekendFormAction={submitWeekendFormAction}
          closeForm={closeForm}
          selectedMonth={selectedMonth}
        />
      </div>
    )

    : (null);
};

PackageSlideList.propTypes = {
  attributes: PropTypes.object,
  isWeekendPackage: PropTypes.bool,
  submitWeekendFormAction: PropTypes.func,
  closeForm: PropTypes.bool,
  selectedMonth: PropTypes.number.isRequired
};

PackageSlideList.defaultProps = {
  attributes: {},
  isWeekendPackage: false,
  submitWeekendFormAction: () => {},
  closeForm: false
};

export default PackageSlideList;
