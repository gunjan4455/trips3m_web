import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InlineFilter from 'components/Listing/InlineFilters/InlineFilter';

class Index extends Component {
  render() {
    const {
      isTourFilterSelected, filters, selectedFilters, filterSelected,
      filtersApplied, filterCounts, filterCategory, location
    } = this.props;

    return (
      <div>
        {
          isTourFilterSelected && filterCategory.indexOf('category') === -1 ?
            <div className='mt8'>
              <InlineFilter filters={filters['36']}
                            className="inline-theme-filter inline-common-filter"
                            selectedFilters={selectedFilters}
                            isTheme={true}
                            filterSelected={filterSelected}
                            filtersApplied={filtersApplied}
                            filterCounts={filterCounts}
                            showImage={true}
                            location={location}
                            title="Choose by Theme"/>
            </div> : null
        }
        {
          filterCategory.indexOf('days') === -1 ?
            <div className='mt8'>
              <InlineFilter filters={filters['38']}
                            className="inline-common-filter days-filter"
                            selectedFilters={selectedFilters}
                            filterSelected={filterSelected}
                            isTheme={false}
                            filtersApplied={filtersApplied}
                            filterCounts={filterCounts}
                            location={location}
                            title="Choose by Duration <span class='f12 pfc4 fw7'>(in Days)</span>"/>
            </div> : null
        }
        {
          filterCategory.indexOf('price_ranges') === -1 ?
            <div className='mt8 mb8'>
              <InlineFilter filters={filters['39']}
                            className="inline-common-filter price-filters"
                            selectedFilters={selectedFilters}
                            filterSelected={filterSelected}
                            isTheme={false}
                            filtersApplied={filtersApplied}
                            filterCounts={filterCounts}
                            location={location}
                            title="Choose by Budget <span class='f12 pfc4 fw7'>(per person in Rs.)</span>" />
            </div> : null
        }
          </div>
    );
  }
}

Index.displayName = 'InlineFilters';

Index.propTypes = {
  isTourFilterSelected: PropTypes.bool.isRequired,
  filters: PropTypes.object,
  selectedFilters: PropTypes.object,
  filterSelected: PropTypes.func,
  filtersApplied: PropTypes.func,
  filterCounts: PropTypes.object,
  location: PropTypes.object,
  filterCategory: PropTypes.array
};

export default Index;
