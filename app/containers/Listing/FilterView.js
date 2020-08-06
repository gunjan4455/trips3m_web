import { connect } from 'react-redux';
import { toggleFilterView } from '../../actions/listing';
import { filterSelected, sortByApplied, resetFilters } from 'actions/filterview';
import SortAndFilter from 'components/Listing/SortFilters/SortAndFilter';
import { setDefaultSelectedFilters, setDefaultFilters } from 'reducers/listing/filters';

const modifyFilterCities = citiesArr => citiesArr.map(city => ({
  ...city,
  value: city.name,
  title: city.name
}));

const modifyFilterInclusions = inclusions => inclusions.map(inclusion => ({
  ...inclusion,
  value: inclusion.id,
  title: inclusion.name
}));

export default connect(state => ({
  visible: state.listing.filters.isVisible,
  shouldHideDestinationTypeFilters: state.listing.filters.shouldHideDestinationTypeFilters,
  filterCities: modifyFilterCities(state.listing.packages.filterCities || []),
  filterInclusions: modifyFilterInclusions(state.listing.packages.filterInclusions || []),
  filterCounts: state.listing.filterCounts.filterCounts,
  filterDestinationActivities: state.listing.packages.filterDestinationActivities,
}), (dispatch, ownProps) => ({
  toggleFilterView: () => {
    dispatch(toggleFilterView());
  },
  filterSelected: (filter, filterOptions) => {
    dispatch(filterSelected(filter, filterOptions, ownProps.isCategoryPage || false));
  },
  sortBySelected: (sortByValue) => {
    dispatch(sortByApplied(sortByValue));
  },
  resetFilters: () => {
    dispatch(resetFilters());
  },
  setDefaultSelectedFilters: (type, filterId, filterValue) => {
    dispatch(setDefaultSelectedFilters(type, filterId, filterValue, ownProps.isCategoryPage || false));
  },
  setDefaultFilters: () => {
    dispatch(setDefaultFilters(ownProps.isCategoryPage || false));
  }
}))(SortAndFilter);
