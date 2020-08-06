import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterIcon
} from 'helpers/Icon/Icon';


import './SortAndFilter.scss';

const SortBy = ({ numberOfFilterSelected }) => {
  const filterClass = (numberOfFilterSelected() ? 'selected-filters' : '');
  return (
    <div className="row row-">
      <div className="relative pl48 filter-by-listing-view" >
        <span className="sort-by-icon"><FilterIcon /></span>
        <p>Filters</p>
        <p className={`f10 no-filter-selected ${filterClass}`}>{numberOfFilterSelected()} selected</p>
      </div>
    </div>
  );
};

SortBy.propTypes = {
  numberOfFilterSelected: PropTypes.func
};

SortBy.defaultProps = {
  numberOfFilterSelected: () => {}
};
export default SortBy;
