import {
  DISCOUNT_OFFERS_LOAD,
  DISCOUNT_OFFERS_LOAD_SUCCESS,
  DISCOUNT_OFFERS_LOAD_FAIL,
  APPLIED_OFFERS_LOAD,
  APPLIED_OFFERS_LOAD_SUCCESS,
  APPLIED_OFFERS_LOAD_FAIL,
} from './action';

const initialState = {
  appliedOfferLoaded: false,
  appliedOfferLoading: false,
  loaded: false,
  loading: false,
  data: {},
  appliedOfferData: {}
};

export default function discountReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISCOUNT_OFFERS_LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case DISCOUNT_OFFERS_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.result
      };
    }
    case DISCOUNT_OFFERS_LOAD_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case APPLIED_OFFERS_LOAD: {
      return {
        ...state,
        appliedOfferLoaded: false,
        appliedOfferLoading: true,
      };
    }
    case APPLIED_OFFERS_LOAD_SUCCESS: {
      return {
        ...state,
        appliedOfferLoaded: true,
        appliedOfferLoading: false,
        appliedOfferData: action.result
      };
    }
    case APPLIED_OFFERS_LOAD_FAIL: {
      return {
        ...state,
        appliedOfferLoaded: false,
        appliedOfferLoading: false
      };
    }
    default:
      return state;
  }
}

export const discountOffersLoaded = (state) => {
  return state.discountOffers.loaded || false;
};
