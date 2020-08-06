import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';

import SortBy from './SortBy';
import Filters from './Filters';
import FilterOptions from './FilterOptions';
import { getParamName } from '../../../utils/filter';

import './SortAndFilter.scss';
import { getCookie, SORT_BY_COOKIE } from 'helpers/FormDataFormatter';
import { CATEGORY_FILTER, DESTINATION_FILTER } from 'reducers/listing/filters';

const parseQuery = require('query-string');

function filterByParamName(filtersData) {
  const res = {};
  Object.keys(filtersData).forEach((filterId) => {
    const options = filtersData[filterId].options || [];
    res[filtersData[filterId].paramsName] = options.reduce((filterOptions, option) => ({
      ...filterOptions,
      options: {
        ...filterOptions.options,
        [option.value]: option.id
      }
    }), { id: filterId, options: {} });
  });
  return res;
}

class SortAndFilter extends React.Component {

  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.filterToggle = this.filterToggle.bind(this);
  }

  componentDidMount() {
    const { filterSelected, sortBySelected, isCategoryPage, filterCategory, setDefaultFilters, setDefaultSelectedFilters } = this.props;
    let { filters } = this.props;
    /*Default sortBy value for listing page is 'popularity' for which the key is 'popularity', and for category pages is also popularity (for which BE key is
    * 'relevence_asc') */
    const defaultSortBy = isCategoryPage ? 'relevence_asc' : 'popularity';
    const query = parseQuery.parse(parseQuery.extract(this.props.location.search));
    filters = filterByParamName(filters);
    // get filters data
    if (this.props.category !== 'Tour') {
      query.category = query.category || this.props.category.toLowerCase();
    }
    Object.keys(query).forEach((param) => {
      const filter = filters[param];
      if (filter) {
        const options = (typeof query[param] === 'string') ? [query[param]] : query[param];
        const selectedOptions = options.reduce((selected, optionVal) => {
          if (filterCategory.indexOf(getParamName(param)) > -1) {
            return {
              ...selected,
              [filter.options[optionVal]]: false
            };
          }
          if (filter.options[optionVal]) {
            return {
              ...selected,
              [filter.options[optionVal]]: true
            };
          }
          return selected;
        }, {});
        filterSelected(filter.id, selectedOptions);
        /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */
        if (!isCategoryPage && filter.id !== CATEGORY_FILTER && filter.id !== DESTINATION_FILTER) {
          setDefaultSelectedFilters('', filter.id, selectedOptions);
        }
      }
    });
    if (query['cities[]']) {
      const selectedCities = (typeof query['cities[]'] === 'string') ? [query['cities[]']] : query['cities[]'];
      const selectedOptions = selectedCities.reduce((selected, optionVal) => {
        if (filterCategory.indexOf('cities') > -1) {
          return {
            ...selected,
            [optionVal]: false
          };
        } else {
          return {
            ...selected,
            [optionVal]: true
          };
        }
      }, {});
      filterSelected('cities', selectedOptions);
      /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */
      if (!isCategoryPage) {
        setDefaultSelectedFilters('', 'cities', selectedOptions);
      }
    }
    if (query['location_experiences[]']) {
      const selectedCities = (typeof query['location_experiences[]'] === 'string') ? [query['location_experiences[]']] : query['location_experiences[]'];
      const selectedOptions = selectedCities.reduce((selected, optionVal) => {
        if (filterCategory.indexOf('location_experiences') > -1) {
          return {
            ...selected,
            [optionVal]: false
          };
        } else {
          return {
            ...selected,
            [optionVal]: true
          };
        }
      }, {});
      filterSelected('location_experiences', selectedOptions);
      /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */
      if (!isCategoryPage) {
        setDefaultSelectedFilters('', 'location_experiences', selectedOptions);
      }
    }
    if (query['inclusion_category_tags[]']) {
      const selectedCities = (typeof query['inclusion_category_tags[]'] === 'string') ? [query['inclusion_category_tags[]']] : query['inclusion_category_tags[]'];
      const selectedOptions = selectedCities.reduce((selected, optionVal) => {
        return {
          ...selected,
          [optionVal]: !filterCategory.indexOf('inclusion_category_tags') > -1
        };
      }, {});
      filterSelected('inclusion_category_tags', selectedOptions);
      /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */
      if (!isCategoryPage) {
        setDefaultSelectedFilters('', 'inclusion_category_tags', selectedOptions);
      }
    }
    // get sort by data
    sortBySelected(query.sort_by ? query.sort_by : defaultSortBy);
  }

  handleFilterUpdate() {
    this.props.toggleFilterView();
    this.applyFilters();
  }

  applyFilters() {
    this.props.filtersApplied();
  }

  filterToggle() {
    this.props.toggleFilterView();
    setTimeout(() => {
      const { visible } = this.props;
      const getBody = document.querySelector('body');
      if (getBody && visible) {
        getBody.classList.add('filter-opened');
      }
    }, 1000);
  }

  render() {
    const {
      selectedFilters, visible, selectedFilterCount, sortBy, resetFilters,
      shouldHideDestinationTypeFilters, category, filterCategory, isCategoryPage
    } = this.props;
    const {
      filters,
      toggleFilterView,
      filterSelected,
      sortBySelected,
      filterCities,
      filterInclusions,
      filterCounts,
      onFilterCheckHandler,
      setDefaultFilters,
      setDefaultSelectedFilters,
      filterDestinationActivities
    } = this.props;
    return (<div className="row row- mb8 sort-filter-con">
      <Sticky enabled={true} top={0} innerZ={4}>
        <div className="col-xs-6 p0 sbcw">
          <SortBy
            options={sortBy.options}
            selected={sortBy.selected}
            onSelect={sortBySelected}
            handleFilterUpdate={this.applyFilters}
            category={category}
          />
        </div>
        <div className="col-xs-6 p0 sbcw">
          <div onClick={this.filterToggle.bind(this)}> { // eslint-disable-line
          }
            <Filters numberOfFilterSelected={selectedFilterCount} />
          </div>
        </div>
      </Sticky>
      <div className={(visible) ? '' : 'hide'}>
        <FilterOptions
          toggleFilterView={toggleFilterView}
          selectedFilters={selectedFilters}
          filterSelected={filterSelected}
          onFilterCheckHandler={onFilterCheckHandler}
          filters={filters}
          handleFilterUpdate={this.handleFilterUpdate}
          resetFilters={resetFilters}
          shouldHideDestinationTypeFilters={shouldHideDestinationTypeFilters}
          filterCities={filterCities}
          filterCounts={filterCounts}
          filterInclusions={filterInclusions}
          filterDestinationActivities={filterDestinationActivities}
          filterCategory={filterCategory}
          isCategoryPage={isCategoryPage}
          setDefaultFilters={setDefaultFilters}
          setDefaultSelectedFilters={setDefaultSelectedFilters}
        />
      </div>
    </div>);
  }
}

SortAndFilter.propTypes = {
  selectedFilters: PropTypes.object,
  filters: PropTypes.object,
  visible: PropTypes.bool,
  toggleFilterView: PropTypes.func.isRequired,
  filtersApplied: PropTypes.func.isRequired,
  filterSelected: PropTypes.func.isRequired,
  sortBySelected: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  selectedFilterCount: PropTypes.func.isRequired,
  sortBy: PropTypes.object.isRequired,
  resetFilters: PropTypes.func.isRequired,
  category: PropTypes.string,
  isCategoryPage: PropTypes.bool,
  shouldHideDestinationTypeFilters: PropTypes.bool,
  filterCities: PropTypes.array,
  filterInclusions: PropTypes.array,
  filterCounts: PropTypes.object,
  push: PropTypes.func.isRequired,
  filterCategory: PropTypes.array,
  filterDestinationActivities: PropTypes.array,
  onFilterCheckHandler: PropTypes.func,
  setDefaultFilters: PropTypes.func,
  setDefaultSelectedFilters: PropTypes.func
};

SortAndFilter.defaultProps = {
  selectedFilters: {},
  filters: {},
  visible: false,
  category: 'Tour',
  shouldHideDestinationTypeFilters: false,
  filterCities: [],
  filterInclusions: [],
  filterDestinationActivities: [],
  filterCounts: {},
  filterCategory: [],
  onFilterCheckHandler: () => {},
  isCategoryPage: false,
  setDefaultFilters: () => {},
  setDefaultSelectedFilters: () => {}
};

export default SortAndFilter;
