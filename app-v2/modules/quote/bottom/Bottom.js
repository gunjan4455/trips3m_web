import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getFullName } from 'helpers/utils';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import CancelBooking from 'modules/trip/ctas/CancelBooking';
import ReactivateTrip from 'modules/trip/ctas/ReactivateTrip';
import ReactivateQuote from 'modules/quote/ctas/ReactivateQuote';
import SocialShare from 'modules/quote/ctas/SocialShare';
import SwitchQuote from 'modules/quote/ctas/SwitchQuote';
import PayNow from 'modules/quote/ctas/PayNow';
import BookNow from 'modules/quote/ctas/BookNow';
import ViewInvoiceAndPay from 'modules/quote/ctas/ViewInvoiceAndPay';
import RejectQuote from 'modules/quote/ctas/RejectQuote';
import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';
import TRIP_EVENTS_ENUMS from 'modules/trip/ChildEventsType';
import Modal from 'modules/shared/GenericModal';
import BookNowPopup from 'modules/quote/popups/bookNow/index';
import { INFO_ROSTER } from 'constants/rosterTypes';
import { downloadQuoteUrl } from 'helpers/urlHelpers';
import { formatURL } from 'utils/parsers';

const GFooterDiv = styled.div({
  minHeight: '48px',
  justifyContent: 'space-between',
});

class QuoteStickyFooter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      closeModal: true
    };

    this.callbackHandler = this.callbackHandler.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.rejectQuoteSuccess && nextProps.rejectQuoteSuccess) {
      this.props.showRoster({ type: INFO_ROSTER, message: 'Quote Has Been Rejected' });
    }

    else if (!this.props.reactivateQuoteSuccess && nextProps.reactivateQuoteSuccess) {
      this.props.showRoster({ type: INFO_ROSTER, message: 'Quote Reactivated Successfully!' });
    }
  }

  trackSegmentEvent = (event, cta, object = '') => {
    this.props.trackSegment({
      event,
      section: 'Quote Status',
      object: object,
      cta
    });
  };

  callbackHandler = (type, data = {}) => {
    data.tripId = this.props.tripId;
    data.quoteId = this.props.quoteId;

    switch (type) {
      case QUOTE_EVENTS_ENUMS.BOOK_NOW:
        this.openBookNowPopup();
        this.props.bookNow(data);
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Book Now');
        break;
      case QUOTE_EVENTS_ENUMS.REJECT_QUOTE:
        this.props.rejectQuote(data);
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Reject Quote');
        break;
      case QUOTE_EVENTS_ENUMS.REACTIVATE_QUOTE:
        this.props.reactivateQuote(data);
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Reactivate Quote');
        break;
      case TRIP_EVENTS_ENUMS.REACTIVATE_TRIP:
        this.props.reactivateBooking(data);
        break;
      case TRIP_EVENTS_ENUMS.CANCEL_TRIP:
        this.props.cancelBooking(data);
        break;
      case QUOTE_EVENTS_ENUMS.PAY_NOW:
        this.openBookNowPopup();
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Proceed to Pay');
        break;
    }
  };

  openBookNowPopup = () => {
    this.setState({ openModal: true, closeModal: false });
  };

  closePopup = () => {
    this.setState({ closeModal: true, openModal: false });
  };

  render() {
    const ctas = [];
    const { tripId, quoteId, quoteStatus, currentQuote, convertedQuote, userDetails, loading } = this.props;
    const shareLink = formatURL({ path: downloadQuoteUrl(quoteId) });

    if (quoteStatus.isRejected) {
      ctas.push(<ReactivateQuote callbackHandler={this.callbackHandler} tripId={tripId} quoteId={quoteId}
                                 key="cta-reactivate-quote" loading={loading} />);
    } else if (quoteStatus.isRequestCancelled) {
      ctas.push(<ReactivateTrip callbackHandler={this.callbackHandler} tripId={tripId} key="reactivate_trip"
                                loading={loading} />);
    } else if (!(quoteStatus.isConverted || quoteStatus.isCancelled)) {
      if (quoteStatus.isInvoiceRequested) {
        ctas.push(<RejectQuote quoteRejectionReasons={this.props.quoteRejectionReasons}
                               callbackHandler={this.callbackHandler} tripId={tripId} quoteId={quoteId}
                               key="cta-reject-quote"
                               loading={loading} />);
        ctas.push(<PayNow ctaText="Proceed to Pay" disablePayNow={true}
                          callbackHandler={this.callbackHandler} key="cta-pay-now" />);
      }
      else if (!quoteStatus.isInvoiced) {
        ctas.push(<RejectQuote quoteRejectionReasons={this.props.quoteRejectionReasons}
                               callbackHandler={this.callbackHandler} tripId={tripId} quoteId={quoteId}
                               key="cta-reject-quote"
                               loading={loading} />);
        ctas.push(<BookNow callbackHandler={this.callbackHandler} tripId={tripId} quoteId={quoteId}
                           key="cta-book-now" />);
      }
    }
    if (!ctas.length) {
      return null;
    }
    return (
      <div>
        <GFooterDiv className="flex sbcw p8 bt">
          {
            ctas
          }
          <Modal
            trigger={null}
            fullView={true}
            isOpen={this.state.openModal}
            hasCustomClose={true}
            customCloseTrigger={this.state.closeModal}
            onRequestCloseCustom={this.closePopup}
          >
            <BookNowPopup
              opsDetail={this.props.currentQuote.opDetails}
              closeModal={this.closePopup}
            />
          </Modal>
        </GFooterDiv>
      </div>
    );
  }
}

QuoteStickyFooter.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  quoteStatus: PropTypes.shape({
    isRejected: PropTypes.bool,
    isInvoiced: PropTypes.bool,
    isInvoiceRequested: PropTypes.bool,
    isCancelled: PropTypes.bool,
    isConverted: PropTypes.bool,
    isRequestCancelled: PropTypes.bool
  }).isRequired,
  currentQuote: PropTypes.object.isRequired,
  convertedQuote: PropTypes.object,
  quoteRejectionReasons: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,

  bookNow: PropTypes.func.isRequired,
  rejectQuote: PropTypes.func.isRequired,
  reactivateQuote: PropTypes.func.isRequired,
  reactivateBooking: PropTypes.func.isRequired,
  cancelBooking: PropTypes.func.isRequired,

  rejectQuoteSuccess: PropTypes.bool.isRequired,
  reactivateQuoteSuccess: PropTypes.bool.isRequired,
  loading: PropTypes.bool,

  trackSegment: PropTypes.func,
  showRoster: PropTypes.func
};
QuoteStickyFooter.defaultProps = {
  loading: false,
  convertedQuote: {},
  trackSegment: () => {},
  showRoster: () => {}
};

export default QuoteStickyFooter;
