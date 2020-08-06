import React from 'react';
import PropTypes from 'prop-types';

import { GCompareCardContentDiv } from '../G';
import { currencyToSymbol } from 'helpers/parsers';

const CompareFlights = ({ quotes }) => {
  return (
    <GCompareCardContentDiv className="flex at_compareCardContent">
      {
        Object.keys(quotes).map(quoteId => {
          return (
            <div className="flexFull p15" key={`flights_${quoteId}`}>
              <p className="f14p">
                {
                  quotes[quoteId].flightsText.length
                    ? quotes[quoteId].flightsText
                    : 'Not included'
                }
              </p>
            </div>
          );
        })
      }
    </GCompareCardContentDiv>
  );
};

CompareFlights.propTypes = {
  quotes: PropTypes.object.isRequired,
};

export default CompareFlights;
