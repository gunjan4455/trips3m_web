import React from 'react';
import PropTypes from 'prop-types';

const DiscountOfferInput = ({ input, meta: { touched, error }, resetRadio }) => (
  <div className="clearfix">
    <label className="f14p fw4 pfc3 mb8 block" htmlFor="selectOffer">Please Apply a Discount</label>
    <input
      id="selectOffer"
      type="text"
      className="input"
      placeholder="Enter Coupon Code"
      {...input}
      onChange={(event) => {
        input.onChange(event);
        resetRadio();
      }}
    />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

DiscountOfferInput.propTypes = {
  input: PropTypes.any,
  meta: PropTypes.object,
  resetRadio: PropTypes.func.isRequired,
};

export default DiscountOfferInput;

