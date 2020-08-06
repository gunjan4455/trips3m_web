import React from 'react';
import PropTypes from 'prop-types';

import { getDiscountedPrice } from 'helpers/parsers';
import Price from './Price';
import CutPrice from './CutPrice';
import PriceSuffix from './PriceSuffix';

const renderOriginalPrice = (price, currency, lineBreak) => <span className={`${lineBreak ? 'block' : ''}`}><CutPrice
  price={price} currency={currency} /></span>;

const renderDiscountedPrice = (price, discount, currency, perPerson, lineBreak) => {
  return <span>
    <span className={`mr4 ${lineBreak ? '' : 'ml4'}`}>
      <Price price={getDiscountedPrice(price, discount)} currency={currency} perPerson={perPerson} />
    </span>
    <PriceSuffix suffix={perPerson} />
  </span>;
};

const QuotePrice = ({ price, currency, perPerson, discount, showOriginalPrice, lineBreak }) => {

  const hasDiscountApplied = discount > 0;

  return (
    hasDiscountApplied
      ? <div className='text-right'>{showOriginalPrice ? renderOriginalPrice(price, currency, lineBreak) : null}
        {renderDiscountedPrice(price, discount, currency, perPerson, lineBreak)}</div>
      : <div className='text-right'><Price price={price} currency={currency} perPerson={perPerson} />
        <PriceSuffix suffix={perPerson} />
      </div>
  );
};

QuotePrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  perPerson: PropTypes.string,
  discount: PropTypes.number,
  showOriginalPrice: PropTypes.bool,
  lineBreak: PropTypes.bool,
};

QuotePrice.defaultProps = {
  perPerson: '',
  discount: 0,
  showOriginalPrice: true,
  lineBreak: false
};

export default QuotePrice;
