import {
  PDM_LOAD, PDM_LOAD_SUCCESS, PDM_LOAD_FAIL,
  CURRENT_PDM_CATEGORY, PDM_VIEW_SHOW
} from './action';

const defaultState = {
  loading: false,
  loaded: false,
  pdms: null,
  selectedPdmCategory: null,
  showPdmView: false,
};

export default function pdmReducer(state = defaultState, action) {
  switch (action.type) {
    case PDM_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    case PDM_LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case PDM_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        pdms: action.result.data.results
      };
    }

    case CURRENT_PDM_CATEGORY: {
      return {
        ...state,
        selectedPdmCategory: action.category
      };
    }

    case PDM_VIEW_SHOW: {
      return {
        ...state,
        showPdmView: action.show
      };
    }

    default:
      return state;
  }
}

export const quotePdmsLoaded = (state) => {
  return state.quote.pdms.loaded || false;
};
