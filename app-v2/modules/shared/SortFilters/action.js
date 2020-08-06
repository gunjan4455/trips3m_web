const   HLP_FILTERS_SELECTED = 'HLP_FILTERS_SELECTED';
const   HLP_FILTERS_APPLY = 'HLP_FILTERS_APPLY';
const   HLP_SORT_BY_APPLY = 'HLP_SORT_BY_APPLY';
const   HLP_RESET_FILTERS = 'HLP_RESET_FILTERS';
const   HLP_FILTERS_TOGGLE = 'HLP_FILTERS_TOGGLE';

const filterApplied = () => ({ type: HLP_FILTERS_APPLY });

const filterSelected = (selectedFilter, selectedFilterOptions) => ({
  type: HLP_FILTERS_SELECTED,
  selectedFilter,
  selectedFilterOptions
});

const sortByApplied = sortByVal => ({
  type: HLP_SORT_BY_APPLY,
  sortByVal
});

const resetFilters = () => ({
  type: HLP_RESET_FILTERS
});

const toggleFilterView = () => ({ type: HLP_FILTERS_TOGGLE });

export {
  filterApplied,
  filterSelected,
  sortByApplied,
  resetFilters,
  toggleFilterView
};
