import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { CompareIcon, DownArrow } from 'helpers/Icon/Icon';
import { compareQuotesPath } from 'helpers/urlHelpers';
import QuotePrice from './shared/price/QuotePrice';
import Modal from 'modules/shared/GenericModal';
import QuoteListModal from './QuoteListModal';


const GAgentSelectionDiv = styled.div({
  border: '1px solid #d4d4d4',
});

const QuoteDetailHeader = ({ quotesList, currentQuoteId, tripId, location, trackSegment }) => {

  const trackSegmentEvent = (event, section, object, cta) => {
    trackSegment({
      event,
      section,
      object,
      cta
    });
  };

  const currentQuote = quotesList.filter(q => q.id === currentQuoteId)[0];

  const renderCurrentQuote = () => (
    <div className="flexFull at_quoteSwitch_actionBtn">
      <GAgentSelectionDiv className="pr8 pt8 pl8 pb8 flex flexFull alignCenter">
        <div className="flexFull">
          <p className="pfc3 f12">{currentQuote.agent.name}</p>
          <QuotePrice {...currentQuote.priceInformation} {...currentQuote.discountInformation}
                      showOriginalPrice={false} />
        </div>
        <span className="input-24 iblock p8 flex alignCenter justifyCenter"><DownArrow /></span>
      </GAgentSelectionDiv>
    </div>
  );

  return (<div className="sbcw pb8">
      <div className="row row-">
        <div className="col-xs-12">
          <p className="pfc3 f14 fw9 pt15 pb15 at_quoteReceivedMsg">You have received {quotesList.length} Quotes
            for {currentQuote.destination}</p>
        </div>
      </div>
      <div className="flex alignCenter pl8 pr8">
        <div className="flexFull">
          <Modal
            trigger={renderCurrentQuote()} hasNoClose
          >
            <QuoteListModal quotesList={quotesList} currentQuoteId={currentQuoteId} tripId={tripId} location={location}/>
          </Modal>
        </div>
        <div className="ml8 compare__btn">
          <a
            className={`btn-sec-load pt8 pl15 pb8 pr15 iblock flex alignCenter at_compareBtn ${quotesList.length > 1 ? '' : 'disabled'}`}
            onClick={() => trackSegmentEvent(ORGANISM_CLICKED, 'Compare', '', 'Compare Quotes')}
            href={compareQuotesPath(tripId)}>
            <span className="iblock input-24 mr5"><CompareIcon /></span><span>Compare</span>
          </a>
        </div>
      </div>
    </div>
  );
};

QuoteDetailHeader.propTypes = {
  quotesList: PropTypes.array.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  trackSegment: PropTypes.func
};

QuoteDetailHeader.defaultProps = {
  trackSegment: () => {}
};

export default QuoteDetailHeader;
