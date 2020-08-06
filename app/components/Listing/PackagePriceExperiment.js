import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { parsePrice, getPercentage } from '../../utils/parsers';
import { InfoIcon, TTRecommendedIcon } from 'helpers/Icon/Icon';
import TooltipCommon from 'modules/shared/TooltipCommon';

class PackagePriceExperiment extends Component {
  render() {
    const { priceUnit, price, discount, currency, displayRange, priceFrom, priceTo, totalPrice, totalDiscount, promoTag,
      hideDiscount} = this.props;
    return(
      <div className="row row-">
        <div className="flex alignCenter">
          <div>
          <span className="f10 mt8 pfc4 pb5 fw4 starting-from block">Starting from:</span>
          <h4 className="package-price sfc3 fw7 f18 pb0">
            <div>
              {parsePrice({ price: priceFrom || (price - discount), currency })}/-
              {
                !hideDiscount ?
                  <span className="f12 fw4 ml8 pfc3 tdl original-price">
                    {parsePrice({ price: priceTo || price, currency })}/-
                  </span> : null
              }
            </div>
          </h4>
          <p className="f10 mt4">{priceUnit}</p>
          </div>
          <div className="ml8 mt8 discount-ribbon-container flex flexFull alignCenter">
            {
              !hideDiscount ?
                <span className="discount-ribbon fright mr4">{getPercentage({ price: price, discount: discount })}% Off</span> : null
            }

            <TooltipCommon message={'Exact prices may vary based on availability.'}>
              <div className="input-24 p3 pl0 flex alignCenter justifyCenter relative">
                <InfoIcon />
              </div>
            </TooltipCommon>

            <div className="flex flexFull justifyEnd">
              {promoTag ?
                <TooltipCommon message={'Recommended by TravelTriangle'}>
                  <div className="input-24 flex alignCenter justifyCenter relative">
                    <TTRecommendedIcon />
                  </div>
                </TooltipCommon> : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PackagePriceExperiment.propTypes = {
  priceUnit: PropTypes.string,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  displayRange: PropTypes.bool,
  priceFrom: PropTypes.string,
  priceTo: PropTypes.string,
  hideDiscount: PropTypes.bool,
  totalPrice: PropTypes.number.isRequired,
  totalDiscount: PropTypes.number.isRequired,
  promoTag: PropTypes.number.isRequired
};

PackagePriceExperiment.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee',
  displayRange: false,
  priceFrom: null,
  priceTo: null,
  hideDiscount: false
};

export default PackagePriceExperiment;
