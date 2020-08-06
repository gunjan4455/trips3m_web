import { DESTINATION_DETAILS_LOAD_SUCCESS, } from '../actionConstants';

// Clean this up! Should do this way
const SET_ACTIVE_TAB = 'destinationDetails/SET_ACTIVE_TAB';

const initialState = {
  data: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DESTINATION_DETAILS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.result.data
      };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.tab
      };
    default:
      return state;
  }
}

export function selectedFilterCount(state) {
  return () => {
    const selectedFilters = state.listing.filters.selected;
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
    // for (const filter in selectedFilters) {
    //   for (const filterValue in selectedFilters[filter]) {
    //     if (selectedFilters[filter][filterValue]) {
    //     }
    //   }
    // }
    return _selectedFilterCount;
  };
}

export function getActiveTab(globalState) {
  return (globalState.destinationDetail && globalState.destinationDetail.activeTab) || null;
}

export function setActiveDetailsTab(tab = '') {
  return {
    type: SET_ACTIVE_TAB,
    tab
  };
}
