import React from 'react';
import PropTypes from 'prop-types';

import { RightWhiteArrow, EllipsisLoader, RightGreyArrow } from 'helpers/Icon/Icon';
import { format } from 'helpers/DateTime';
import SpinningLoader from "../../shared/loaders/SpinningLoader";


const StickyPriceFooter = ({ disabled, loading, cta, searchParams, ctaHandler }) => {

  return <div className="fixed b0 l0 r0 bs4 z10 p8 pl15 pr15 bt sbcw flex alignCenter">
    {loading ?
      (<div className="wfull h20 relative flexFull">
        <div className="absolute-center-v z1">
          <SpinningLoader size={35}/>
        </div>
      </div>) :
      (<div className="flexFull mr8">
        <span className="f18 fw9 pfc2">Hotel Sold Out</span>
        <p className="f12 pfc3 relative z2">{`From ${format(searchParams.checkInDate, 'DD MMM')} - ${format(searchParams.checkOutDate, 'DD MMM')}`}</p>
      </div>)}

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
  cta: PropTypes.string.isRequired,
  ctaHandler: PropTypes.func,
  searchParams: PropTypes.object
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
