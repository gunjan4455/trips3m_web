import React from 'react';
import PropTypes from 'prop-types';

import { GCompareCardContentDiv } from '../G';

const CompareCab = ({ quotes }) => {
  return (
    <GCompareCardContentDiv className="flex at_compareCardContent">
      {
        Object.keys(quotes).map(quoteId => {
          return (
            <div className="flexFull p15" key={`cab_${quoteId}`}>
              <p className="f14p">
                {
                  quotes[quoteId].cabsText
                    ? quotes[quoteId].cabsText
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

CompareCab.propTypes = {
  quotes: PropTypes.object.isRequired,
};

export default CompareCab;
