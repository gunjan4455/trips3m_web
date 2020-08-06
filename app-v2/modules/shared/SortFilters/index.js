import { connect } from 'react-redux';
import { toggleFilterView } from 'actions/Listing';
import { filterSelected, sortByApplied, resetFilters } from 'actions/filterview';
import SortAndFilter from 'components/Listing/SortFilters/SortAndFilter';

const modifyFilterCities = citiesArr => citiesArr.map(city => ({
  ...city,
  value: city.name,
  title: city.name
}));

const mapStateToProps = state => ({
  visible: state.listing.filters.isVisible,
  shouldHideDestinationTypeFilters: state.listing.filters.shouldHideDestinationTypeFilters,
  filterCities: modifyFilterCities(state.listing.packages.filterCities || []),
  filterCounts: state.listing.filterCounts.filterCounts,
});

const mapDispatchToProps = dispatch => ({
  toggleFilterView: () => {
    dispatch(toggleFilterView());
  },
  filterSelected: (filter, filterOptions) => {
    dispatch(filterSelected(filter, filterOptions));
  },
  sortBySelected: (sortByValue) => {
    dispatch(sortByApplied(sortByValue));
  },
  resetFilters: () => {
    dispatch(resetFilters());
  }
});
const FilterView = connect(mapStateToProps, mapDispatchToProps)(SortAndFilter);

export default FilterView;
