import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { toggleFilterView } from 'actions/Listing';
import { filterSelected, sortByApplied } from 'actions/filterview';
import SortAndFilter from 'components/Listing/SortFilters/SortAndFilter';
import { selectedFilterCount } from '../../reducers/destinationListing/filter';

const mapStateToProps = state => ({
  selectedFilters: state.destinationListing.filters.selected,
  sortBy: state.destinationListing.filters.sortBy,
  filters: state.destinationListing.filters.data,
  visible: state.destinationListing.filters.isVisible,
  selectedFilterCount: selectedFilterCount(state)
});

const mapDispatchToProps = dispatch => ({
  filtersApplied: (url) => {
    // update the url of the page
    dispatch(push(url));
  },
  toggleFilterView: () => {
    dispatch(toggleFilterView());
  },
  filterSelected: (filter, filterOptions) => {
    dispatch(filterSelected(filter, filterOptions));
  },
  sortBySelected: (sortByValue) => {
    dispatch(sortByApplied(sortByValue));
  }
});
const FilterView = connect(mapStateToProps, mapDispatchToProps)(SortAndFilter);

export default FilterView;
