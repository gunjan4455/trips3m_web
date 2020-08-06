import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import CancelBooking from 'modules/trip/ctas/CancelBooking';
import SwitchQuote from '../ctas/SwitchQuote';
import ExplainTheQuote from '../ctas/ExplainTheQuote';
import ViewInvoiceAndPay from '../ctas/ViewInvoiceAndPay';
import RejectQuote from '../ctas/RejectQuote';
import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';
import TRIP_EVENTS_ENUMS from 'modules/trip/ChildEventsType';
import Modal from 'modules/shared/GenericModal';
import BookNowPopup from '../popups/bookNow/index';
import { INFO_ROSTER } from 'constants/rosterTypes';
import { downloadQuoteUrl } from 'helpers/urlHelpers';
import { formatURL } from 'utils/parsers';
import { PDM_CATEGORY_EXPLAINQUOTE } from 'helpers/pdmHelpers';

const GFooterDiv = styled.div({
  minHeight: '48px',
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  justifyContent: 'space-between',
  zIndex: '9'
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
      section: 'Bottom Sticky ',
      object: object,
      cta
    });
  };

  callbackHandler = (type, data = {}) => {
    data.tripId = this.props.tripId;
    data.quoteId = this.props.quoteId;

    switch (type) {
      case TRIP_EVENTS_ENUMS.CANCEL_TRIP:
        this.props.cancelBooking(data);
        break;
      case QUOTE_EVENTS_ENUMS.PAY_NOW:
        this.openBookNowPopup();
        this.trackSegmentEvent(ORGANISM_CLICKED, 'View Invoice & Pay');
        break;
      case QUOTE_EVENTS_ENUMS.REJECT_QUOTE:
        this.props.rejectQuote(data);
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Reject Quote');
        break;
    }
  };

  openBookNowPopup = () => {
    this.setState({ openModal: true, closeModal: false });
  };

  closePopup = () => {
    this.setState({ closeModal: true, openModal: false });
  };

  handleChatClick = () => {
    const { setPdmCategory, showHidePdmView } = this.props;
    setPdmCategory(PDM_CATEGORY_EXPLAINQUOTE);
    showHidePdmView(true);
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Explain the Quote');
  };

  render() {
    const ctas = [];
    const { tripId, quoteId, quoteStatus, currentQuote, convertedQuote, userDetails } = this.props;
    const shareLink = formatURL({ path: downloadQuoteUrl(quoteId) });
    if (quoteStatus.isRejected) {
      ctas.push(<ExplainTheQuote handleChatClick={this.handleChatClick} key="explain-the-quote" />);
    } else if (quoteStatus.isRequestCancelled) {
      ctas.push(<ExplainTheQuote handleChatClick={this.handleChatClick} key="explain-the-quote" />);
    } else if (quoteStatus.isCancelled) {
      if (convertedQuote.id) {
        ctas.push(<SwitchQuote tripId={tripId} quoteId={convertedQuote.id} key="switch_quote" />);
      }
    } else if (quoteStatus.isConverted) {
      if (currentQuote.installmentInfo.isAllPaymentReceived) {
        if (currentQuote.invoiceShowUrl) {
          ctas.push(<ViewInvoiceAndPay invoiceUrl={currentQuote.invoiceShowUrl} ctaText='View Invoice'
                                       key="cta-view-invoice" />);
        }
      } else {
        ctas.push(<CancelBooking callbackHandler={this.callbackHandler} tripId={tripId} key="cta-cancel-booking" />);
        ctas.push(<ViewInvoiceAndPay invoiceUrl={currentQuote.invoiceShowUrl} key="cta-view-invoice" />);
      }
    } else if (quoteStatus.isInvoiced) {
      ctas.push(<RejectQuote quoteRejectionReasons={this.props.quoteRejectionReasons}
                             callbackHandler={this.callbackHandler} tripId={tripId} quoteId={quoteId}
                             key="cta-reject-quote" />);
      ctas.push(<ViewInvoiceAndPay invoiceUrl={currentQuote.invoiceShowUrl} key="cta-view-invoice" />);
    }
    else {
      ctas.push(<ExplainTheQuote handleChatClick={this.handleChatClick} key="explain-the-quote" />);
    }

    if (!ctas.length) {
      return null;
    }

    return (
      <div>
        <GFooterDiv className="flex sbcw p8 bs6 at_quoteFooterSection">
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

  trackSegment: PropTypes.func,
  showRoster: PropTypes.func,
  setPdmCategory: PropTypes.func.isRequired,
  showHidePdmView: PropTypes.func.isRequired
};
QuoteStickyFooter.defaultProps = {
  convertedQuote: {},
  trackSegment: () => {},
  showRoster: () => {}
};

export default QuoteStickyFooter;
