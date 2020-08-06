import React from 'react';
import PropTypes from 'prop-types';

import { GCompareCardContentDiv } from '../G';
import { getQuotesBasicInfo } from 'modules/quote/reducers/quoteList';
import QuotePrice from 'modules/quote/shared/price/QuotePrice';

const ComparePrice = ({ quotes }) => {
  return (
    <GCompareCardContentDiv className="flex at_compareCardContent">
      {
        Object.keys(quotes).map(quoteId => {
          const quote = quotes[quoteId];
          const quoteInfo = getQuotesBasicInfo(quote);

          return (
            <div className="flexFull p15" key={`price_${quoteId}`}>
              <div className="flexFull quotePriceInfo">
                <QuotePrice {...quoteInfo.priceInformation} {...quoteInfo.discountInformation} lineBreak={true}/>
              </div>
            </div>
          );
        })
      }
    </GCompareCardContentDiv>
  );
};

ComparePrice.propTypes = {
  quotes: PropTypes.object.isRequired,
};

export default ComparePrice;
