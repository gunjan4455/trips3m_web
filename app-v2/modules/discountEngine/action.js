import { change, clearSubmitErrors } from 'redux-form';

import {
  discountOffers,
  applyDiscountOffer,
  removeDiscountOffer,
  updateDiscountOffer,
  appliedOffer
} from 'helpers/urlHelpers';
import config from 'appConfig';

export const DISCOUNT_OFFERS_LOAD = 'DISCOUNT_OFFERS_LOAD';
export const DISCOUNT_OFFERS_LOAD_SUCCESS = 'DISCOUNT_OFFERS_LOAD_SUCCESS';
export const DISCOUNT_OFFERS_LOAD_FAIL = 'DISCOUNT_OFFERS_LOAD_FAIL';
export const DISCOUNT_OFFERS_APPLY = 'DISCOUNT_OFFERS_APPLY';
export const DISCOUNT_OFFERS_APPLY_SUCCESS = 'DISCOUNT_OFFERS_APPLY_SUCCESS';
export const DISCOUNT_OFFERS_APPLY_FAIL = 'DISCOUNT_OFFERS_APPLY_FAIL';
export const DISCOUNT_OFFERS_UPDATE = 'DISCOUNT_OFFERS_UPDATE';
export const DISCOUNT_OFFERS_UPDATE_SUCCESS = 'DISCOUNT_OFFERS_UPDATE_SUCCESS';
export const DISCOUNT_OFFERS_UPDATE_FAIL = 'DISCOUNT_OFFERS_UPDATE_FAIL';
export const DISCOUNT_OFFERS_REMOVE = 'DISCOUNT_OFFERS_REMOVE';
export const DISCOUNT_OFFERS_REMOVE_SUCCESS = 'DISCOUNT_OFFERS_REMOVE_SUCCESS';
export const DISCOUNT_OFFERS_REMOVE_FAIL = 'DISCOUNT_OFFERS_REMOVE_FAIL';
export const APPLIED_OFFERS_LOAD = 'APPLIED_OFFERS_LOAD';
export const APPLIED_OFFERS_LOAD_SUCCESS = 'APPLIED_OFFERS_LOAD_SUCCESS';
export const APPLIED_OFFERS_LOAD_FAIL = 'APPLIED_OFFERS_LOAD_FAIL';

export function fetchDiscountOffers({ tripId }) {
  return {
    types: [
      DISCOUNT_OFFERS_LOAD,
      DISCOUNT_OFFERS_LOAD_SUCCESS,
      DISCOUNT_OFFERS_LOAD_FAIL
    ],
    promise: client => client.get(discountOffers({ rtrip_id: tripId }), {
      hostType: config.apiEndpoints.discountOffers.host
    }),
    withoutCamelCasing: false
  };
}

export function applyDiscountCoupon({ tripId, offerType, offerCode }) {
  return {
    types: [
      DISCOUNT_OFFERS_APPLY,
      DISCOUNT_OFFERS_APPLY_SUCCESS,
      DISCOUNT_OFFERS_APPLY_FAIL
    ],
    promise: client => client.get(applyDiscountOffer({
      rtrip_id: tripId,
      offer_type: offerType,
      offer_code: offerCode,
      click_source: 'user'
    }), {
      hostType: config.apiEndpoints.applyDiscountOffer.host
    })
  };
}

export function updateDiscountCoupon({ tripId, offerType, offerCode }) {
  return {
    types: [
      DISCOUNT_OFFERS_UPDATE,
      DISCOUNT_OFFERS_UPDATE_SUCCESS,
      DISCOUNT_OFFERS_UPDATE_FAIL
    ],
    promise: client => client.get(updateDiscountOffer({
      rtrip_id: tripId,
      offer_type: offerType,
      offer_code: offerCode,
      click_source: 'user'
    }), {
      hostType: config.apiEndpoints.updateDiscountOffer.host
    })
  };
}

export function removeDiscountCoupon(tripId) {
  return {
    types: [
      DISCOUNT_OFFERS_REMOVE,
      DISCOUNT_OFFERS_REMOVE_SUCCESS,
      DISCOUNT_OFFERS_REMOVE_FAIL
    ],
    promise: client => client.get(removeDiscountOffer({
      rtrip_id: tripId,
    }), {
      hostType: config.apiEndpoints.removeDiscountOffer.host
    })
  };
}

export const updateFormField = (form, fieldName, value) => (dispatch) => {
  dispatch(change(form, fieldName, value));
};

export const clearFormSubmitError = (form) => (dispatch) => {
  dispatch(clearSubmitErrors(form));
};

export function fetchAppliedOffer(offerId) {
  return {
    types: [
      APPLIED_OFFERS_LOAD,
      APPLIED_OFFERS_LOAD_SUCCESS,
      APPLIED_OFFERS_LOAD_FAIL
    ],
    promise: client => client.get(appliedOffer({ offer_type: 'Coupon', offer_id: offerId }), {
      hostType: config.apiEndpoints.appliedOffer.host
    }),
    withoutCamelCasing: false
  };
}
