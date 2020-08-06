import React from 'react';
import PropTypes from 'prop-types';
import { getPercentage, parsePrice } from '../../utils/parsers';

const PackagePrice = ({ priceUnit, price, discount, currency, priceFrom, priceTo, dealsInfo }) => (
  <div className="row row- flex">
    <div>
      <p className="f12 pfc4 pb5 fw4">Starting from:</p>
      <h4 className="package-price sfc3 fw7 f18 pb0">
        {
          <div>
            {parsePrice({ price: priceFrom || (price - discount), currency })}/-
            <span className="f12 fw4 ml8 pfc3 tdl">
              {parsePrice({ price: priceTo || price, currency })}/-
            </span>
          </div>
        }
      </h4>
      <p className="f12">{priceUnit}</p>
    </div>
    {dealsInfo ? <span className="discount-ribbon fright mt24 ml8">{getPercentage({ price, discount })}% Off</span> : null}
  </div>
);

PackagePrice.propTypes = {
  priceUnit: PropTypes.string,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  priceFrom: PropTypes.number,
  priceTo: PropTypes.number,
  dealsInfo: PropTypes.bool.isRequired
};

PackagePrice.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee',
};

export default PackagePrice;
