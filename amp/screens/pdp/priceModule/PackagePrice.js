import React from 'react';
import PropTypes from 'prop-types';

import { getPercentage, parsePrice } from 'amp/utils/parsers';
import PackageDaysDiscount from './PackageDaysDiscount';

const PackagePrice = ({ priceUnit, price, discount, currency, priceFrom, priceTo, dealsInfo, days, nights, hideDiscount }) => (
  <div className="row row- flex wfull alignCenter">
    <div>
      <p className="f12 pfc4 pb5 fw4">Starting from:</p>
      <h4 className="package-price sfc3 fw7 f24 pb0">
        {
          <div>
            <span data-amp-bind-text="selectedMonth ? filterPrice[selectedMonth].start_price+'/-' :
            filterPrice['default_start_price']+'/-'">
            {parsePrice({ price: priceFrom || (price - discount), currency })}/-
            </span>
            {
              !hideDiscount ?
                <span data-amp-bind-text="selectedMonth ? filterPrice[selectedMonth].end_price+'/-':
            filterPrice['default_end_price']+'/-'"
                      className="f12 fw4 ml8 pfc3 tdl">
              {parsePrice({ price: priceTo || price, currency })}/-
            </span> : null
            }
          </div>
        }
      </h4>
      <p className="f12">{priceUnit}</p>
    </div>
    {dealsInfo && !hideDiscount ? <span className="discount-ribbon fright mt24 ml8">{getPercentage({ price, discount })}% Off</span> : null}
    {dealsInfo ?
      null :
      <PackageDaysDiscount
        days={days}
        nights={nights}
        price={price}
        discount={discount}
        hideDiscount={hideDiscount}
      />
    }
  </div>
);

PackagePrice.propTypes = {
  priceUnit: PropTypes.string,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  priceFrom: PropTypes.number,
  priceTo: PropTypes.number,
  days: PropTypes.number,
  nights: PropTypes.number,
  dealsInfo: PropTypes.bool.isRequired,
  hideDiscount: PropTypes.bool
};

PackagePrice.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee',
  hideDiscount: false
};

export default PackagePrice;
