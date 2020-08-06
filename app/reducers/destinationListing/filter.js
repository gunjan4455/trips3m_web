import {
  LISTING_FILTERS_SET,
  LISTING_FILTERS_TOGGLE_VIEW,
  LISTING_FILTERS_LOAD,
  LISTING_FILTERS_LOAD_SUCCESS,
  LISTING_FILTERS_LOAD_FAIL,
  DEST_LISTING_FILTERS_SELECTED,
  SORT_BY_APPLY,
  RESET_FILTERS,
  INITIALIZE_WEEKEND_FILTER,
  DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS,
  DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS,
  DEST_LISTING_RESET_DEFAULT_FILTERS,
  DEST_LISTING_SET_INITIAL_FILTERS
} from '../../actionConstants';

const initialState = {
  data: {
    36: {
      title: 'Destination Type',
      paramsName: 'destination_type',
      displayType: 'Checkbox',
      id: 36,
      options: [
        {
          id: 1,
          title: 'Indian',
          value: 'domestic',
        },
        {
          id: 2,
          title: 'International',
          value: 'international',
        },
      ]
    },
    37: {
      title: 'Activities',
      paramsName: 'activity',
      displayType: 'Checkbox',
      id: 37,
      options: [
        {
          id: 1,
          title: 'Nature',
          value: '11',
        },
        {
          id: 2,
          title: 'Beach',
          value: '4',
        },
        {
          id: 3,
          title: 'Water Activities',
          value: '16',
        },
        {
          id: 4,
          title: 'City Tours',
          value: '1',
        },
        {
          id: 5,
          title: 'Self Drive',
          value: '14',
        },
      ]
    },
    38: {
      title: 'Budget in Rs',
      paramsName: 'price_ranges',
      displayType: 'Checkbox',
      id: 38,
      options: [
        {
          id: 1,
          title: 'Less than 10,000',
          value: '0-10000',
        },
        {
          id: 2,
          title: '10,000-20,000',
          value: '10000-20000',
        },
        {
          id: 3,
          title: '20,000-40,000',
          value: '20000-40000',
        },
        {
          id: 4,
          title: '40,000-60,000',
          value: '40000-60000',
        },
        {
          id: 5,
          title: '60,000-80,000',
          value: '60000-80000',
        },
        {
          id: 6,
          title: 'Above 80,000',
          value: '80000-200000',
        },
      ]
    },
    39: {
      title: 'Duration (in Days)',
      paramsName: 'days',
      displayType: 'Checkbox',
      id: 39,
      options: [
        {
          id: 1,
          title: '1 to 3',
          value: '1-3',
        },
        {
          id: 2,
          title: '4 to 6',
          value: '4-6',
        },
        {
          id: 3,
          title: '7 to 9',
          value: '7-9',
        },
        {
          id: 4,
          title: '10 to 12',
          value: '10-12',
        },
        {
          id: 5,
          title: '13 or more',
          value: '13-20',
        },
      ]
    },
    40: {
      title: 'Month of Travel',
      paramsName: 'months',
      displayType: 'Checkbox',
      id: 40,
      options: [
        {
          id: 1,
          title: 'Jan-Mar',
          value: '1-3',
        },
        {
          id: 2,
          title: 'Apr-Jun',
          value: '4-6',
        },
        {
          id: 3,
          title: 'Jul-Sep',
          value: '7-9',
        },
        {
          id: 4,
          title: 'Oct-Dec',
          value: '10-12',
        },
      ]
    },
  }, // filters data
  // selected filters
  selected: {
    36: {
      1: true,
      2: true
    },
  },
  initialSelected: {
    36: {
      1: true,
      2: true
    },
  },
  defaultSelected: {
    36: {
      1: true,
      2: true
    }
  },
  // sort by options
  sortBy: {
    paramsName: 'sort_by',
    options: {
      relevence_asc: 'Popularity',
      price_asc: 'Price: Low to High',
      price_desc: 'Price: High to Low',
    },
    selected: 'relevence_asc'
  },
  isVisible: false, // whether filters view is visible or not
  loaded: false // whether filters data are loaded or not(so we dont dire an api call again)
};

const weekendFiltersSelected = {
  36: {
    1: true,
    2: false
  },
};

const weekendFilterDestinationType = {
  title: 'Destination Type',
  paramsName: 'destination_type',
  displayType: 'Checkbox',
  id: 36,
  options: [
    {
      id: 1,
      title: 'Indian',
      value: 'domestic',
    }
  ]
};

const weekendDefaultSelected = {
  36: {
    1: true
  },
  37: {
    2: false
  }
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
    case LISTING_FILTERS_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    case DEST_LISTING_FILTERS_SELECTED: {
      const selectedFilters = {};
      selectedFilters[action.selectedFilter] = action.selectedFilterOptions;
      return {
        ...state,
        selected: {
          ...state.selected,
          ...selectedFilters
        }
      };
    }
    case DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS: {
      return {
        ...state,
        selected: state.defaultSelected
      };
    }
    case DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS: {
      return {
        ...state,
        defaultSelected: {
          ...state.defaultSelected,
          [action.data.key]: action.data.value
        }
      };
    }
    case DEST_LISTING_RESET_DEFAULT_FILTERS:
      return {
        ...state,
        defaultSelected: {}
      };
    case DEST_LISTING_SET_INITIAL_FILTERS:
      return {
        ...state,
        initialSelected: {
          [action.data.key]: action.data.value
        }
      };
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
        selected: state.initialSelected
      };
    case INITIALIZE_WEEKEND_FILTER:
      return {
        ...state,
        data: {
          ...state.data,
          36: weekendFilterDestinationType
        },
        selected: weekendFiltersSelected,
        defaultSelected: weekendDefaultSelected
      };
    default:
      return state;
  }
}

export function selectedFilterCount(state) {
  return () => {
    const selectedFilters = state.destinationListing.filters.selected;
    let _selectedFilterCount = 0;
    Object.keys(selectedFilters).map((filter) => {
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

export function isBadWeekendFilter(state) {
  return state.destinationListing && state.destinationListing &&
    state.destinationListing.filters && state.destinationListing.filters.selected
    && state.destinationListing.filters.selected[36] &&
    state.destinationListing.filters.selected[36][2];
}
