import {
  HLP_LOAD, HLP_LOAD_FAIL, HLP_LOAD_MORE_HOTELS, HLP_LOAD_SUCCESS,
  SET_PIVOT, FETCH_FOOTER_LINKS_SUCCESS, FETCH_FOBP_LINKS_SUCCESS
} from './action';

const initialState = {
  loading: false,
  loaded: false,
  data: {},
  constants: {},
  footerLinks: [],
  fobpLinks: []
};

export default function hlp(state = initialState, action = {}) {

  switch (action.type) {
    case HLP_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case HLP_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.result
      };
    }
    case HLP_LOAD_MORE_HOTELS: {

      const data = action.result;
      const hotels = state.data && state.data.data &&
        state.data.data.hotels.hotels.concat(action.result.data.hotels.hotels);
      const stateData = state.data && state.data.data || {};
      data.data.hotels.hotels = hotels;
      data.data.faqs = stateData.faqs;
      data.data.breadCrumbs = stateData.breadCrumbs;
      data.data.footerSection = stateData.footerSection;
      return {
        ...state,
        loaded: true,
        loading: false,
        data: data
      };
    }
    case HLP_LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case SET_PIVOT: {
      return {
        ...state,
        constants: action.pivot
      };
    }
    case FETCH_FOOTER_LINKS_SUCCESS: {
      return {
        ...state,
        footerLinks: action.result && action.result.data
      };
    }
    case FETCH_FOBP_LINKS_SUCCESS: {
      return {
        ...state,
        fobpLinks: action.result && action.result.data
      };
    }
    default:
      return state;
  }
}

export const setPivotInStore = pivot => ({ type: SET_PIVOT, pivot });
