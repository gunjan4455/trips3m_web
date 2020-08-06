import {
  LISTING_FILTERS_SET,
  LISTING_FILTERS_TOGGLE_VIEW,
  LISTING_FILTERS_LOAD,
  LISTING_FILTERS_LOAD_SUCCESS,
  LISTING_FILTERS_LOAD_FAIL,
  LISTING_FILTERS_SELECTED,
  SORT_BY_APPLY,
  RESET_FILTERS,
  SET_TOUR_CATEGORY_FILTER,
  SET_DESTINATION_TYPE_ALL_FILTER,
  SET_LISTING_FILTERS_CATEGORY,
  SET_LISTING_FILTERS_DESTINATION_TYPE,
  SET_DEFAULT_SELECTED_FILTERS,
  DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS,
  DEST_LISTING_RESET_DEFAULT_FILTERS,
  RESET_DEFAULT_FILTERS,
  RESET_SELECTED_TO_DEFAULT_FILTERS,
  DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS,
  SET_INITIAL_FILTERS,
  DEST_LISTING_SET_INITIAL_FILTERS
} from '../../actionConstants';
import { EXCLUSION_TAGS } from 'utils/parsers';

const UPDATE_SEASONAL_FILTER_DATA = 'update_seasonal_filters_data';

export const CATEGORY_FILTER = '36';
export const CATEGORY_FILTER_HONEYMOON = 1;
export const CATEGORY_FILTER_FAMILY = 2;
export const CATEGORY_FILTER_FRIENDS = 3;
export const DESTINATION_FILTER = '37';
export const DEST_LISTING_DESTINATION_FILTER = '36';

const tourCategoryFilterState = {
  1: true,
  2: true
};

const destinationTypeAllSelected = {
  1: true,
  2: true
};

const initialState = {
  data: {
    36: {
      title: 'Categories',
      paramsName: 'category',
      displayType: 'Checkbox',
      id: 36,
      options: [
        {
          id: 1,
          title: 'Honeymoon',
          value: 'honeymoon',
        },
        {
          id: 2,
          title: 'Family',
          value: 'family',
        },
        {
          id: 3,
          title: 'Friends / Group',
          value: 'friends',
        },
      ]
    },
    37: {
      title: 'Type of Destination',
      paramsName: 'destination_type',
      displayType: 'Checkbox',
      id: 37,
      options: [
        {
          id: 1,
          title: 'India',
          value: 'india',
        },
        {
          id: 2,
          title: 'International',
          value: 'international',
        },
      ]
    },
    41: {
      title: 'Inclusions',
      paramsName: 'inclusions[]',
      displayType: 'Checkbox',
      id: 41,
      options: [
        {
          id: 1,
          title: 'Meals',
          value: 'Meals',
          filterCountKey: 'inclusions_Meals',
        },
        {
          id: 2,
          title: 'Cab',
          value: 'Cab',
          filterCountKey: 'inclusions_Cab',
        },
        {
          id: 3,
          title: 'Shared Coach',
          value: 'Shared Coach',
          filterCountKey: 'inclusions_Shared___Coach',
        },
      ]
    },
    42: {
      title: 'Themes/Activities',
      paramsName: 'trip_types[]',
      displayType: 'Checkbox',
      id: 42,
      options: [
        {
          id: 1,
          title: 'Adventure',
          value: 'Adventure',
          filterCountKey: 'trip_types_Adventure',
        },
        {
          id: 2,
          title: 'Nature',
          value: 'Nature',
          filterCountKey: 'trip_types_Nature',
        },
        {
          id: 3,
          title: 'Hill Station',
          value: 'Hill Station',
          filterCountKey: 'trip_types_Hill___Station',
        },
        {
          id: 4,
          title: 'Religious',
          value: 'Religious',
          filterCountKey: 'trip_types_Religious',
        },
        {
          id: 5,
          title: 'Water Activities',
          value: 'Water Activities',
          filterCountKey: 'trip_types_Water___Activities',
        },
      ]
    },
    40: {
      title: 'Hotel Star Rating',
      paramsName: 'hotel_ratings[]',
      displayType: 'StarRatingCheckbox',
      id: 40,
      options: [
        {
          id: 1,
          title: '2 Star',
          value: '2',
          filterCountKey: 'hotel_ratings_2',
        },
        {
          id: 2,
          title: '3 Star',
          value: '3',
          filterCountKey: 'hotel_ratings_3',
        },
        {
          id: 3,
          title: '4 Star',
          value: '4',
          filterCountKey: 'hotel_ratings_4',
        },
        {
          id: 4,
          title: '5 Star',
          value: '5',
          filterCountKey: 'hotel_ratings_5',
        },
      ]
    },
    39: {
      title: 'Budget Per Person (in Rs.)',
      paramsName: 'price_ranges[]',
      displayType: 'Checkbox',
      id: 39,
      options: [
        {
          id: 1,
          title: 'Less than 10,000',
          value: '0-10_000',
          filterCountKey: 'price_ranges_0___10_000',
        },
        {
          id: 2,
          title: '10000 - 20000',
          value: '10_000-20_000',
          filterCountKey: 'price_ranges_10_000___20_000',
        },
        {
          id: 3,
          title: '20,000 - 40,000',
          value: '20_000-40_000',
          filterCountKey: 'price_ranges_20_000___40_000',
        },
        {
          id: 4,
          title: '40,000 - 60,000',
          value: '40_000-60_000',
          filterCountKey: 'price_ranges_40_000___60_000',
        },
        {
          id: 5,
          title: '60,000 - 80,000',
          value: '60_000-80_000',
          filterCountKey: 'price_ranges_60_000___80_000',
        },
        {
          id: 6,
          title: 'Above 80,000',
          value: '80_000-50_000_000',
          filterCountKey: 'price_ranges_80_000___50_000_000',
        },
      ]
    },
    38: {
      title: 'Duration(in Days)',
      paramsName: 'days[]',
      displayType: 'Checkbox',
      id: 38,
      options: [
        {
          id: 1,
          title: '1 to 3',
          value: '1-3',
          filterCountKey: 'days_1___3',
        },
        {
          id: 2,
          title: '4 to 6',
          value: '4-6',
          filterCountKey: 'days_4___6',
        },
        {
          id: 3,
          title: '7 to 9',
          value: '7-9',
          filterCountKey: 'days_7___9',
        },
        {
          id: 4,
          title: '10 to 12',
          value: '10-12',
          filterCountKey: 'days_10___12',
        },
        {
          id: 5,
          title: '13 or more',
          value: '>13',
          filterCountKey: 'days_gtn13',
        },
      ]
    },
    'flight_filter': {
      title: 'View Packages',
      paramsName: 'inclusion_category_tags',
      tag: 'flight_filter',
      displayType: 'Checkbox',
      id: 'inclusion_category_tags',
      options: [
        {
          filterCountKey: "inclusion_category_tags",
          id: '7578',
          title: "With Flights",
          value: "7578",
        },
        {
          filterCountKey: "exclusion_category_tags",
          id: '7578_not_included',
          title: "Without Flights",
          value: "7578_not_included",
        }
      ],
    },
  }, // filters data
  // selected filters
  selected: {
    36: {
      1: true,
      2: true
    },
    37: {
      1: true,
      2: true
    }
  },
  initialSelected: {
    36: {
      1: true,
      2: true
    },
    37: {
      1: true,
      2: true
    }
  },
  defaultSelected: {
    37: {
      2: false
    }
  },
  // sort by options
  sortBy: {
    paramsName: 'sort_by',
    options: {
      'popularity': 'Popularity',
      'price_l-h': 'Price: Low to High',
      'price_h-l': 'Price: High to Low',
      'duration_l-h': 'Duration: Low to High',
      'duration_h-l': 'Duration: High to Low'
    },
    selected: 'popularity'
  },
  isVisible: false, // whether filters view is visible or not
  loaded: false, // whether filters data are loaded or not(so we dont dire an api call again)
  shouldHideDestinationTypeFilters: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LISTING_FILTERS_SET :
      return {
        ...state,
        selected: Object.assign(
          {},
          ...state.selected,
          ...action.selected
        )
      };
    case LISTING_FILTERS_TOGGLE_VIEW:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case LISTING_FILTERS_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LISTING_FILTERS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data, // Check this shit
        error: null,
      };
    /*When filter count api fails, the previous state of selected filters should be maintained (otherwise all the
    * filters will reset on dynamic selection). That is why commenting data: null */
    case LISTING_FILTERS_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        // data: null,
        error: action.error,
      };
    case LISTING_FILTERS_SELECTED: {
      const selectedFilters = {
        ...state.selected,
        [action.selectedFilter]: {
          ...state.selected[action.selectedFilter], ...action.selectedFilterOptions
        }
      };
      return {
        ...state,
        selected: selectedFilters
      };
    }
    // case LISTING_FILTER_APPLY:
    case SORT_BY_APPLY:
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          selected: action.sortByVal
        }
      };
    case RESET_FILTERS:
      return {
        ...state,
        selected: state.initialSelected,
      };
    case RESET_SELECTED_TO_DEFAULT_FILTERS:
      return {
        ...state,
        selected: state.defaultSelected
      };
    case RESET_DEFAULT_FILTERS:
      return {
        ...state,
        defaultSelected: {}
      };
    case SET_DEFAULT_SELECTED_FILTERS:
      return {
        ...state,
        defaultSelected: {
          ...state.defaultSelected,
          [action.data.key]: action.data.value
        }
      };
    case SET_INITIAL_FILTERS:
      return {
        ...state,
        initialSelected: {
          ...state.initialSelected,
          [action.data.key]: action.data.value
        }
      };
    case SET_TOUR_CATEGORY_FILTER:
      return {
        ...state,
        selected: {
          ...state.selected,
          [CATEGORY_FILTER]: tourCategoryFilterState
        }
      };
    case SET_DESTINATION_TYPE_ALL_FILTER:
      return {
        ...state,
        selected: {
          ...state.selected,
          37: destinationTypeAllSelected
        }
      };
    case UPDATE_SEASONAL_FILTER_DATA:
      return {
        ...state,
        selected: {
          ...state.selected,
          [CATEGORY_FILTER]: {
            1: false,
            2: false,
          }
        }
      };
    case SET_LISTING_FILTERS_CATEGORY: {
      return { ...state, selected: { [CATEGORY_FILTER]: action.categoryData } };
    }
    case SET_LISTING_FILTERS_DESTINATION_TYPE: {
      return {
        ...state,
        selected: { ...state.selected, [DESTINATION_FILTER]: action.data.destinationTypeData },
        shouldHideDestinationTypeFilters: action.data.shouldHideDestinationTypeFilters
      };
    }
    default:
      return state;
  }
}

export function selectedFilterCount(state) {
  return () => {
    const selectedFilters = state.listing.filters.selected;
    let _selectedFilterCount = 0;
    Object.keys(selectedFilters)
      .filter(key => !EXCLUSION_TAGS['inclusion_category_tags'].includes(key))
      .map((filter) => {
        Object.keys(selectedFilters[filter]).map((filterValue) => {
          if (selectedFilters[filter][filterValue]) {
            _selectedFilterCount += 1;
          }
          return 0;
        });
        return 0;
      });
    return _selectedFilterCount;
  };
}

export function isTourFilterSelected(state) {
  const categoryFilter = state.listing.filters.selected[CATEGORY_FILTER] || {};
  const selectedFilters = Object.keys(categoryFilter).filter((filterId) => categoryFilter[filterId]);
  return selectedFilters.length === 0 || selectedFilters.length >=2;
}

export const updateSeasonalFilterData = () => ({ type: UPDATE_SEASONAL_FILTER_DATA });

export const getListingFilterCategory = (categoryType, categoryFilter) => {
  let categoryData = {
    [CATEGORY_FILTER_HONEYMOON]: false,
    [CATEGORY_FILTER_FAMILY]: false,
    [CATEGORY_FILTER_FRIENDS]: false
  };

  if (categoryFilter && categoryFilter.length) {
    if (categoryFilter.indexOf('honeymoon') > -1) {
      categoryData[CATEGORY_FILTER_HONEYMOON] = true;
    }
    if (categoryFilter.indexOf('family') > -1) {
      categoryData[CATEGORY_FILTER_FAMILY] = true;
    }
    if (categoryFilter.indexOf('friends') > -1) {
      categoryData[CATEGORY_FILTER_FRIENDS] = true;
    }
  } else {
    if (categoryType === 'honeymoon') {
      categoryData = {
        ...categoryData,
        [CATEGORY_FILTER_HONEYMOON]: true,
      };
    } else if (categoryType === 'family') {
      categoryData = {
        ...categoryData,
        [CATEGORY_FILTER_FAMILY]: true,
      };
    } else if (categoryType === 'friends') {
      categoryData = {
        ...categoryData,
        [CATEGORY_FILTER_FRIENDS]: true
      };
    }
  }
  return categoryData;
};

export const setListingFiltersCategory = (categoryType, categoryFilter) => {
  const categoryData = getListingFilterCategory(categoryType, categoryFilter);
  return {
    type: SET_LISTING_FILTERS_CATEGORY,
    categoryData
  };
};

const getListingFiltersDestinationType = destinationType => {
  let destinationTypeData = { 1: false, 2: false };

  if (destinationType === 'india' || destinationType === 'domestic') {
    destinationTypeData = { 1: true, 2: false };
  } else if (destinationType === 'international') {
    destinationTypeData = { 1: false, 2: true };
  } else if (destinationType === 'all') {
    destinationTypeData = { 1: true, 2: true };
  }

  return destinationTypeData;
};

export const setListingFiltersDestinationType = (destinationType, shouldHideDestinationTypeFilters) => {
  const destinationTypeData = getListingFiltersDestinationType(destinationType);
  return {
    type: SET_LISTING_FILTERS_DESTINATION_TYPE,
    data: {
      destinationTypeData,
      shouldHideDestinationTypeFilters
    }
  };
};

export const setDefaultSelectedFilters = (type, filterId, filterValue, isCategoryPage = false) => {
  let filterData = {};
  if (!isCategoryPage && filterId === CATEGORY_FILTER) {
    filterData = getListingFilterCategory(type, filterValue);
  } else if (filterId === (isCategoryPage ? DEST_LISTING_DESTINATION_FILTER : DESTINATION_FILTER) && type) {
    filterData = getListingFiltersDestinationType(type);
  } else {
    filterData = filterValue;
  }
  return {
    type: isCategoryPage ? DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS : SET_DEFAULT_SELECTED_FILTERS,
    data: {
      key: filterId,
      value: filterData
    }
  };
};

export const setInitialFilters = (type, filterId, filterValue, isCategoryPage = false) => {
  let filterData = {};
  if (!isCategoryPage && filterId === CATEGORY_FILTER) {
    filterData = getListingFilterCategory(type, filterValue);
  } else if (filterId === (isCategoryPage ? DEST_LISTING_DESTINATION_FILTER : DESTINATION_FILTER)) {
    filterData = getListingFiltersDestinationType(type);
  } else {
    filterData = filterValue;
  }
  return {
    type: isCategoryPage ? DEST_LISTING_SET_INITIAL_FILTERS : SET_INITIAL_FILTERS,
    data: {
      key: filterId,
      value: filterData
    }
  };
};

export const setDefaultFilters = (isCategoryPage) => {
  return {
    type: isCategoryPage ? DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS : RESET_SELECTED_TO_DEFAULT_FILTERS
  };
};

export const resetDefaultFilters = ( isCategoryPage = false ) => {
  return {
    type: isCategoryPage ? DEST_LISTING_RESET_DEFAULT_FILTERS : RESET_DEFAULT_FILTERS
  };
};

export function isDestinationTypeAll(state) {
  try {
    const checkedState = state.listing.filters.selected[DESTINATION_FILTER];
    return (checkedState[1] && checkedState[1] === checkedState[2]);
  } catch (e) {
    return false;
  }
}
