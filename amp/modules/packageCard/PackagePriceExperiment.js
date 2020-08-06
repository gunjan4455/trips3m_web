import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'amp/utils/parsers';
import PackagedaysDiscount from 'amp/screens/pdp/priceModule/PackageDaysDiscount';

class PackagePriceExperiment extends Component {
  render() {
    const { priceUnit, price, discount, currency, priceFrom, priceTo, promoTag,
      hideDiscount,index} = this.props;
    return(
      <div className="row row-">
        <div className="flex alignCenter">
          <div>
          <span className="f10 mt8 pfc4 pb5 fw4 starting-from block">Starting from:</span>
          <h4 className="package-price sfc3 fw7 f18 pb0" >
            <div>
              <span data-amp-bind-text={`selectedHotel${index} ? similarPackages${index}[hotel${index}][3] :
              defaultPrices${index}['price']`}>
                {parsePrice({ price: priceFrom || (price - discount), currency })}/-
              </span>
              {
                !hideDiscount ?
                  <span className="f12 fw4 ml8 pfc3 tdl original-price"
                        data-amp-bind-text={`selectedHotel${index} ? similarPackages${index}[hotel${index}][4]
                         :defaultPrices${index}['discount']`}>
                    {parsePrice({ price: priceTo || price, currency })}/-
                  </span> : null
              }
            </div>
          </h4>
          <p className="f10 mt4">{priceUnit}</p>
          </div>
          <PackagedaysDiscount price={price} discount={discount} hideDiscount={hideDiscount}/>
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
  promoTag: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
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
