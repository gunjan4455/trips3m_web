import {
  LISTING_FILTERS_SELECTED,
  LISTING_FILTERS_APPLY,
  SORT_BY_APPLY,
  RESET_FILTERS,
  DEST_LISTING_FILTERS_SELECTED,
  DEST_LISTING_RESET_FILTERS
} from '../actionConstants';

const filterApplied = () => ({ type: LISTING_FILTERS_APPLY });

const filterSelected = (selectedFilter, selectedFilterOptions, isCategoryPage) => ({
  type: isCategoryPage ? DEST_LISTING_FILTERS_SELECTED : LISTING_FILTERS_SELECTED,
  selectedFilter,
  selectedFilterOptions
});

const sortByApplied = sortByVal => ({
  type: SORT_BY_APPLY,
  sortByVal
});

const resetFilters = () => ({
  type: RESET_FILTERS
});

export {
  filterApplied,
  filterSelected,
  sortByApplied,
  resetFilters
};
