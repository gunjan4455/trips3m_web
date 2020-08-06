import React from 'react';
import PropTypes from 'prop-types';

import { FilterIcon } from 'helpers/Icon/Icon';
import './SortAndFilter.scss';

const Filters = ({ selectedFilters }) => {
  const calculateFiltersCount = (filters) => {
    const selectedFilters = filters;
    let _selectedFilterCount = 0;
    Object.keys(selectedFilters).map((filter) => {
      Object.keys(selectedFilters[filter]).map((filterValue) => {
        if (selectedFilters[filter][filterValue]) {
          _selectedFilterCount += 1;
        }
        return 0;
      });
      return 0;
    });
    return _selectedFilterCount;
  };

  return (
    <div className="row row-">
      <div className="relative pl48 filter-by-listing-view">
        <span className="sort-by-icon"><FilterIcon /></span>
        <p>Filters</p>
        <p className={`f10 no-filter-selected`}>{calculateFiltersCount(selectedFilters)} selected</p>
      </div>
    </div>
  );
};

Filters.propTypes = {
  selectedFilters: PropTypes.object
};

Filters.defaultProps = {
  selectedFilters: {}
};

export default Filters;
