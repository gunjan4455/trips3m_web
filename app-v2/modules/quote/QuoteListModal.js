import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { compareQuotesPath } from 'helpers/urlHelpers';
import QuotePrice from './shared/price/QuotePrice';
import { quoteDetailPath } from 'helpers/urlHelpers';

const GQuoteListDiv = styled.div({
  '& a': {
    marginBottom: '15px',

    '&:last-child': {
      marginBottom: '0',
      '& label': {
        border: '0',
      }
    },
  },
  '& .checkbox-round +  label': {
    border: '1px solid #d4d4d4',
    '&:before': {
      top: '50%',
      left: '15px',
      transform: 'translateY(-50%)',
    },
    '&:after': {
      left: '19px',
    },
  },
});

const QuoteListModal = ({ quotesList, currentQuoteId, tripId, location }) => {

  return (
    <div className="sbcw radius2">
      <GQuoteListDiv>
        {
          quotesList.map((quote, index) => (
            <Link className="block wfull m0 at_quoteSwitchLink" key={index} to={`${quoteDetailPath(tripId, quote.id)}${location.search}`}>
              <input name="destinationdata-radio"
                     defaultChecked={quote.id === currentQuoteId}
                     type="radio" id="Highlights" className="nblock checkbox-round checkbox-round--center" />
              <label htmlFor="Highlights" className="block p15 bb pl48">
                <div>
                  <p className="pfc3 f12">{quote.agent.name}</p>
                  <QuotePrice {...quote.priceInformation} {...quote.discountInformation}
                              showOriginalPrice={false} />
                </div>
              </label>
            </Link>
          ))
        }
      </GQuoteListDiv>
    </div>
  );
};

QuoteListModal.propTypes = {
  quotesList: PropTypes.array.isRequired,
  tripId: PropTypes.number.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  trackSegment: PropTypes.func
};

QuoteListModal.defaultProps = {
  trackSegment: () => {}
};

export default QuoteListModal;
