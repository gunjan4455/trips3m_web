import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SortIcon as SortByIcon
} from 'helpers/Icon/Icon';
import './SortAndFilter.scss';
import { useQuery } from 'containers/Listing/parseFilters';

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
  }

  handleChange = (e) => {
    const selected = {
      value: e.target.value
    };

    this.props.applySort({ values: selected, location: this.props.location, push: this.props.push });
    this.setState({ selectedOption: e.target.value});
  };

  sortOptions = (options) => (
    options.map(opt => (
      <option key={opt.label} value={opt.value}>{opt.label}</option>
    ))
  );

  render() {
    const { options, selected, location } = this.props;
    const { search } = location;
    const query = useQuery(search);
    let selectedOption = options.filter(option => option.value === query.sort_by);
    selectedOption = selectedOption.length ? selectedOption[0] : selected;
    return (
      <div className="row row- relative sort-by-listing-container">
        <div className="pl48 relative sort-by-listing-view sbcw">
          <span className="sort-by-icon"><SortByIcon /></span>
          <p>Sort by</p>
          <p className="pfc2 f10">{selectedOption.label}</p>
        </div>
        <select className="sort-by-listing"
                onChange={this.handleChange}
                value={selectedOption.value}
                name={selectedOption.name}>
          {options.length && this.sortOptions(options)}
        </select>
      </div>
    );
  };
}

Filters.propTypes = {
  location: PropTypes.object.isRequired,
  options: PropTypes.array,
  selected: PropTypes.object,
  applySort: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

Filters.defaultProps = {
  options: [],
  selected: {}
};

export default Filters;
