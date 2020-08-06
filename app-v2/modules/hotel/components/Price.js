import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'helpers/parsers';

const Price = ({ price, reverse, fontClass }) => {

  return price.discounted ?
    <div className={`flex ${reverse ? 'flexRowReverse': ''}`}>
      <span className={`fw9 sfc3 ${fontClass}`}>
        {parsePrice({
          price: price.discounted,
          currency: price.currency,
          appendOnly: false
        })}
      </span>
      <span className={`f12 pfc4 tdl fw4 alignSelfFlexEnd mb2 ${reverse ? 'mr4': 'ml4'}`}>
        {parsePrice({
          price: price.total,
          currency: price.currency,
          appendOnly: false
        })}
      </span>
    </div> :
    <span className="f18 fw9 sfc3">
      {parsePrice({
        price: price.total,
        currency: price.currency,
        appendOnly: false
      })}
    </span>;
};

Price.propTypes = {
  price: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
  fontClass:PropTypes.string
};
Price.defaultProps = {
  reverse: false,
  fontClass:'f18'

};

export default Price;
