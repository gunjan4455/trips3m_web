import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Sensor from 'react-visibility-sensor';

import { timeFromNow } from 'helpers/DateTime';
import { quoteDetailPath } from 'helpers/urlHelpers';
import { showStatusRibbon, quoteStatusClasses, quoteStatusText } from '../../helpers';
import {
  getAgentDetails,
  getPriceInformation,
  getDiscountInformation,
  getCurrentQuoteStatuses
} from 'modules/quote/reducers/quoteList';
import { ChatIconGrey } from 'helpers/Icon/Icon';
import Modal from 'modules/shared/GenericModal';
import BookNow from '../../ctas/BookNow';
import RejectQuote from '../../ctas/RejectQuote';
import ReactivateQuote from '../../ctas/ReactivateQuote';
import QuotePrice from 'modules/quote/shared/price/QuotePrice';
import AgentOnlineIndicator from 'modules/shared/agentProfile/AgentOnlineIndicator';
import AgentDetail from './AgentDetail';
import BookNowPopup from './BookNow';
import { ORGANISM_VIEWED, ORGANISM_CLICKED } from 'actions/segmentEvents';
import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';

const GQuoteBoxDiv = styled.div({
  boxShadow: '0 0 4px #f2f2f2'
});

const GQuoteStatusDiv = styled.div({
  '& .quoteStatus': {
    height: '16px',
  },
});

const GDotButton = styled.span({
  width: '4px',
  height: '4px',
});
const OpenTooltipPop = styled.div({
  ':hover > .changeIcon span': {
    backgroundColor: '#009688',
  },
  ':hover > .openTooltip': {
    display: 'block',
  },
});

const GQuoteCtasDiv = styled.div({
  boxShadow: '0 0 6px #ccc',
  minWidth: '200px',
  top: '-10px',
  display: 'none'
});

const GOfferSpan = styled.span({
  background: '#b7dfb9',
  height: '16px',
  lineHeight: '16px',
});

class QuoteBox extends React.Component {
  static propTypes = {
    tripId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string]).isRequired,
    cardIndex: PropTypes.number.isRequired,
    quote: PropTypes.object.isRequired,
    comments: PropTypes.object,
    userDetails: PropTypes.object.isRequired,
    callbackHandler: PropTypes.func,
    bookNow: PropTypes.func.isRequired,
    quoteRejectionReasons: PropTypes.object,
    trackSegment: PropTypes.func
  };

  static defaultProps = {};

  static renderQuoteStatus(status) {
    return showStatusRibbon(status) ?
      (<span className='pl5 pr5'>{quoteStatusText(status)}</span>) :
      null;
  }

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      closeModal: true,
    };
    this.isEventTracked = false;
  }

  closePopup = () => {
    this.setState({ closeModal: true, openModal: false });
  };

  openPopup = () => {
    this.props.trackSegment(ORGANISM_CLICKED, 'Quotes section', 'Book now', '', '', this.props.quote.id, 'quote id');
    this.setState({ openModal: true, closeModal: false });
  };

  handleBookNow = () => {
    const { tripId, quote, callbackHandler } = this.props;

    callbackHandler(QUOTE_EVENTS_ENUMS.BOOK_NOW, { tripId: tripId, quoteId: quote.id });
    this.closePopup();
  };

  onSensorChange = (isVisible) => {
    if (isVisible && !this.isEventTracked) {
      this.isEventTracked = true;
      this.props.trackSegment(ORGANISM_VIEWED, 'Quotes section', '', '', 'card index::days::agent rating::package price', '', 'quote id');
    }
  };

  renderQuoteCta(quoteStatus) {
    const { tripId, quote, callbackHandler, quoteRejectionReasons, trackSegment } = this.props;
    if (quoteStatus.isRejected) {
      return <ReactivateQuote callbackHandler={callbackHandler} tripId={tripId} quoteId={quote.id}
                              key="cta-reactivate-quote" isQuoteCardCta={true} />;
    } else if (quoteStatus.isInvoiced || quoteStatus.isInvoiceRequested) {
      return <RejectQuote quoteRejectionReasons={quoteRejectionReasons}
                          trackSegment={trackSegment}
                          callbackHandler={callbackHandler} tripId={tripId} quoteId={quote.id}
                          key="cta-reject-quote" isQuoteCardCta={true} />;
    } else {
      return <div>
        <RejectQuote quoteRejectionReasons={quoteRejectionReasons}
                     trackSegment={trackSegment}
                     callbackHandler={callbackHandler} tripId={tripId} quoteId={quote.id}
                     key="cta-reject-quote" isQuoteCardCta={true} />
        <BookNow callbackHandler={this.openPopup} tripId={tripId} quoteId={quote.id}
                 key="cta-book-now" isQuoteCardCta={true} />
      </div>;
    }
  }

  handleQuoteClick = () => {
    const { quote, cardIndex } = this.props;
    const agentDetails = getAgentDetails(quote);

    this.props.trackSegment(ORGANISM_CLICKED, 'Quotes section', 'View quote',
      `${cardIndex + 1}::${quote.days}::${agentDetails.star}::${quote.pricingInfo.totalPrice}`,
      'card index::days::agent rating::package price', quote.id, 'quote id');
  };

  render() {
    const { tripId, quote, userDetails, comments } = this.props;

    const agentDetails = getAgentDetails(quote);
    const priceInformation = getPriceInformation(quote);
    const discountInformation = getDiscountInformation(quote);
    const qdpPath = quoteDetailPath(tripId, quote.id);
    const commentsCount = comments && comments.commentsCount;
    const quoteStatus = getCurrentQuoteStatuses(quote);

    return (
      <Sensor onChange={this.onSensorChange}
              partialVisibility='bottom'
              delayedCall={true}>
        <GQuoteBoxDiv className="sbcw m8 pl15 pr15 pt8 pb8 radius2 relative at_quoteCard">
          {(quoteStatus.isRequestCancelled || quoteStatus.isCancelled || quoteStatus.isConverted) ?
            null :
            <OpenTooltipPop className='iblock icon-18 fright z10 text-center'>
              <div className="z10 icon-18 changeIcon at_tooltip">
                <GDotButton className="pbc4 absolute radius100" />
                <GDotButton className="pbc4 t8 b1 absolute radius100" />
                <GDotButton className="pbc4 t15 absolute radius100" />
              </div>
              <GQuoteCtasDiv className={`at_tooltipPopup absolute r0 sbcw z2 openTooltip`}>
                {this.renderQuoteCta(quoteStatus)}
              </GQuoteCtasDiv>
            </OpenTooltipPop>
          }
          <div className='flex alignCenter mb15'>
            <AgentOnlineIndicator
              showPresenceMessage={true}
              userId={quote.agent.id}
              userDetails={userDetails}
            />
            {
              commentsCount ?
                (
                  <span
                    className="flex ml8 at_messagesNew f12 pfc4"><span
                    className='icon-18 mr4 iblock'><ChatIconGrey /></span> {commentsCount} chat message{commentsCount > 1 ? 's' : ''}</span>
                ) : ''
            }
          </div>
          <Link to={qdpPath} className='at_agentDetails' onClick={this.handleQuoteClick}>
            <AgentDetail agent={agentDetails} userDetails={userDetails} />
          </Link>
          <div>
            <Modal
              trigger={null}
              isOpen={this.state.openModal}
              customCloseTrigger={this.state.closeModal}
              onRequestCloseCustom={this.closePopup}
            >
              <BookNowPopup agent={agentDetails} priceInfo={priceInformation} closeModal={this.closePopup}
                            bookNow={this.handleBookNow} />
            </Modal>
          </div>

          <GQuoteStatusDiv className="flexFull bt pt15 mt8 mb8">
            <p className={`quoteStatus radius20 pbc4 iblock  sfcw f12 pl15 pr15 at_quoteStatus ${quoteStatusClasses(quote.status)}`}>
              {QuoteBox.renderQuoteStatus(quote.status)}
            </p>
            {discountInformation.discount > 0 ?
              <GOfferSpan className='fright radius20 iblock  sfc6 f10 pl15 pr15'>Offer Applied</GOfferSpan> : ''}
          </GQuoteStatusDiv>
          <div className='flex spaceBetween alignCenter'>
            <div className='f12 pfc4 at_updatedHours'>{`Updated ${timeFromNow(quote.updatedAt)}`}</div>
            <div>
              <QuotePrice {...priceInformation} {...discountInformation} />
              <p className='pfc4 f12 text-right mt3'>Excl. of Convenience Fee</p>
            </div>
          </div>
        </GQuoteBoxDiv>
      </Sensor>
    );
  }
}

export default QuoteBox;
