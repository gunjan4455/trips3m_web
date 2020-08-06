import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'helpers/parsers';
import { RightWhiteArrow, RightGreyArrow, EllipsisLoader } from 'helpers/Icon/Icon';
import SpinningLoader from 'modules/shared/loaders/SpinningLoader';

const renderPrice = (price) => {
  return price.discounted ?
    <p className="f18 fw7 sfc3 mb4">{parsePrice({
      price: price.discounted,
      currency: price.currency,
      appendOnly: false
    })} <span className="f12 pfc4 tdl">{parsePrice({
      price: price.total,
      currency: price.currency,
      appendOnly: false
    })}</span>
    </p> :
    <p className="f18 fw7 sfc3 mb4">{parsePrice({
      price: price.total,
      currency: price.currency,
      appendOnly: false
    })}</p>;
};

const StickyPriceFooter = ({ disabled, loading, price, night, guest, cta, ctaHandler }) => {

  return <div className="fixed b0 l0 r0 bs4 z10 p8 pl15 pr15 bt sbcw flex alignCenter">
    <div className="flexFull mr8">
      {loading ?
        <div className="wfull h20 relative">
          <div className="absolute-center-v z1">
            <SpinningLoader size={35}/>
          </div>
        </div>
        : renderPrice(price) }
      <p className="f12 pfc3 relative z2">{`${night} nights, ${guest} guests`}</p>
    </div>

    <div className="flexFull">
      <button
        type="button"
        className="btn-filled-pri-large wfull ripple"
        disabled={disabled}
        onClick={ctaHandler}>{cta}</button>
      <div className="absolute-center-v r20">
        <div className="icon-24">
          {disabled ? <RightGreyArrow /> : <RightWhiteArrow />}
        </div>
      </div>
    </div>
  </div>;
};

StickyPriceFooter.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  price: PropTypes.object.isRequired,
  night: PropTypes.number,
  guest: PropTypes.number,
  cta: PropTypes.string.isRequired,
  ctaHandler: PropTypes.func
};

StickyPriceFooter.defaultProps = {
  disabled: false,
  loading: false,
  night: 1,
  guest: 2,
  ctaHandler: () => {
  }
};

export default StickyPriceFooter;
