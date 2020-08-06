import React from 'react';
import PropTypes from 'prop-types';

import { getPercentage, parsePrice } from 'utils/parsers';
import PackageDaysDiscount from './PackageDaysDiscount';

const PackagePrice = ({ priceUnit, price, discount, currency, priceFrom, priceTo, dealsInfo, days, nights,
                        animationPrice, hideDiscount }) => (
  <div className="row row- flex wfull">
    <div>
      <p className="f10 pfc4 pb5 fw4">Starting from:</p>
      <h4 className={`${animationPrice ? 'animated shake':''} package-price sfc3 fw7 f24 pb0`}>
        {
          <div>
            {parsePrice({ price: priceFrom || (price - discount), currency })}/-
            {
              !hideDiscount ?
                <span className="f12 fw4 ml8 pfc3 tdl">
                  {parsePrice({ price: priceTo || price, currency })}/-
                </span> : null
            }
          </div>
        }
      </h4>
      <p className="f10">{priceUnit}</p>
    </div>
    {
      dealsInfo && !hideDiscount ?
        <span className="discount-ribbon fright mt24 ml8">{getPercentage({ price, discount })}%
          Off</span> : null
    }
    {
      dealsInfo ?
        null :
        <PackageDaysDiscount
          days={days}
          nights={nights}
          price={price}
          discount={discount}
          hideDiscount={hideDiscount}
        />
    }
    {/*    <div className="flex flexFull justifyEnd recommended-icon-container">
      <TooltipCommon message={'Recommended by TravelTriangle'}>
        <div className="input-24 flex alignCenter justifyCenter relative">
          <TTRecommendedIcon />
        </div>
      </TooltipCommon>
    </div>*/}
  </div>
);

PackagePrice.propTypes = {
  priceUnit: PropTypes.string,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  priceFrom: PropTypes.number,
  priceTo: PropTypes.number,
  dealsInfo: PropTypes.bool.isRequired,
  days: PropTypes.number,
  nights: PropTypes.number,
  animationPrice: PropTypes.bool,
  hideDiscount: PropTypes.bool
};

PackagePrice.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee',
  hideDiscount: false
};

export default PackagePrice;
