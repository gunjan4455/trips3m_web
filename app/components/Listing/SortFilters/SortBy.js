import React from 'react';
import PropTypes from 'prop-types';
import {
  SortIcon as SortByIcon
} from 'helpers/Icon/Icon';

import './SortAndFilter.scss';
import {
  trackSegment,
  DEFAULT_VALUE,
  SORT_CLICKED
} from "../../../actions/segmentEvents";

const Filters = ({ options, selected, onSelect, handleFilterUpdate, category }) => {
  const handleChange = (event) => {
    trackSegment({
      event: SORT_CLICKED,
      section: 'Sort List',
      object: '',
      cta: event.target.name,
      value: DEFAULT_VALUE,
      category: `Destination:${category}`,
      label: event.target.name,
      destination_id: '',
    });
    onSelect(event.target.value);
    // REVISIT, wanna call this action after previous one
    setTimeout(handleFilterUpdate, 200);
  };

  const sortOptions = () => (
    Object.keys(options).map(opt => (
      <option key={opt} value={opt}>{options[opt]}</option>
    ))
  );
  return (
    <div className="row row- relative sort-by-listing-container">
      <div className="pl48 relative sort-by-listing-view sbcw">
        <span className="sort-by-icon"><SortByIcon /></span>
        <p>Sort by</p>
        <p className="pfc2 f10">{options[selected]}</p>
      </div>
      <select id="sort_by_filter" className="sort-by-listing" onChange={handleChange} value={selected} name={options[selected]}>
        {sortOptions()}
      </select>
      <label htmlFor="sort_by_filter" className="hidden_element">sort by</label>
    </div>
  );
};

Filters.propTypes = {
  options: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  handleFilterUpdate: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};

export default Filters;
