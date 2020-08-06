import React from 'react';
import PropTypes from 'prop-types';

import Price from '../components/Price';

const PriceFooter = ({ disabled, price, night, guest, cta, ctaHandler }) => {

  return <div className="pt15 bt flex">
    <div className="flexFull mr8">
      <Price price={price} />
      <p className="f12">{`${night} nights, ${guest} guests`}</p>
    </div>

    <div className="flexFull">
      <button type="button" className="btn-filled-pri-large wfull ripple pl15 pr15" disabled={disabled}
              onClick={ctaHandler}>{cta}
      </button>
    </div>
  </div>;
};

PriceFooter.propTypes = {
  disabled: PropTypes.bool,
  price: PropTypes.object.isRequired,
  night: PropTypes.number,
  guest: PropTypes.number,
  cta: PropTypes.string.isRequired,
  ctaHandler: PropTypes.func
};

PriceFooter.defaultProps = {
  disable: false,
  night: 1,
  guest: 2,
  ctaHandler: () => {
  }
};

export default PriceFooter;
