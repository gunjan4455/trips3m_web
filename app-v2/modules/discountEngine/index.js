import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import DiscountOffer from './DiscountOffer';
import {
  fetchDiscountOffers,
  fetchAppliedOffer,
  applyDiscountCoupon,
  removeDiscountCoupon,
  updateDiscountCoupon,
  updateFormField,
  clearFormSubmitError
} from './action';

export default withRouter(connect((state) => ({
  offers: state.discountOffers.data.aq,
  appliedOfferLoaded: state.discountOffers.appliedOfferLoaded,
  appliedOffer: state.discountOffers.appliedOfferData
}), {
  fetchDiscountOffers,
  fetchAppliedOffer,
  applyDiscountCoupon,
  removeDiscountCoupon,
  updateDiscountCoupon,
  updateFormField,
  clearFormSubmitError
})(DiscountOffer));
