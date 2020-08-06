import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import { parsePrice } from 'helpers/parsers';
import Modal from 'modules/shared/GenericModal';
import Tnc from "./tnc";

const { parse } = new Parser();

const AppliedCouponBanner = ({
                               appliedOffer, removeDiscountCoupon,
                             }) => {
  const getAmount = (offer = {}) => {
    return offer.discountType === 1
      ? `${parsePrice({
        price: offer.offerVal,
        currency: offer.currency
      })}`
      : `${offer.offerVal}%`;
  };

  return (
    <div className="p15 sfcw flex alignCenter">
      <div className="flexFull">
        <h3 className="f14 fw9 pfc3 mb4">{`${appliedOffer.code} applied!`}</h3>
        <p className="f14 pfc3 mb8">You got discount worth {getAmount(appliedOffer)}</p>
        <Modal
          trigger={<span className="f14 fw7 sfc1 cursorP">View T&C</span>} hasNoClose
        >
          <Tnc tncHtml={appliedOffer.tncHtml} />
        </Modal>
      </div>
      <button className="text-right f14 fw7 sfc1" onClick={removeDiscountCoupon}>Remove</button>
    </div>
  );
};

AppliedCouponBanner.propTypes = {
  appliedOffer: PropTypes.object.isRequired,
  removeDiscountCoupon: PropTypes.func.isRequired,
  trackSegmentEvent: PropTypes.func
};

AppliedCouponBanner.defaultProps = {
  trackSegmentEvent: () => {
  }
};

export default AppliedCouponBanner;
