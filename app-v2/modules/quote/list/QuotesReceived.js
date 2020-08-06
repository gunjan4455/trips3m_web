import React from 'react';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';

import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';
import QuoteBox from './components/QuoteBox';
import Modal from 'modules/shared/GenericModal';
import RequestMoreQuote from 'modules/quote/popups/requestMoreQuote';
import { ORGANISM_VIEWED, ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import { INFO_ROSTER } from 'constants/rosterTypes';

export default class QuotesReceived extends React.Component {
  static propTypes = {
    currentTripId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    quotes: PropTypes.object,
    quotesComments: PropTypes.object,
    userDetails: PropTypes.object.isRequired,
    layout: PropTypes.object,
    sortOrder: PropTypes.array,
    moreQuotesRequested: PropTypes.bool,
    location: PropTypes.object,
    quoteRejectionReasons: PropTypes.object,
    constants: PropTypes.object,

    fetchQuotes: PropTypes.func,
    fetchQuotesConstants: PropTypes.func.isRequired,
    fetchQuotesComments: PropTypes.func.isRequired,
    bookNow: PropTypes.func.isRequired,
    rejectQuote: PropTypes.func.isRequired,
    reactivateQuote: PropTypes.func.isRequired,
    fetchDiscountOffers: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    trackSegment: PropTypes.func,
    showRoster: PropTypes.func,
    requestMoreQuotes: PropTypes.func
  };

  static defaultProps = {
    loaded: false,
    layout: {},
    quotesComments: {},
    trackSegment: () => {
    }
  };

  constructor(props) {
    super(props);
    this.callbackHandler = this.callbackHandler.bind(this);
    this.state = {
      openModal: false,
      closeModal: true
    };
    this.isEventTracked = false;
  }

  componentDidMount() {
    this.fetchQuotesComments(this.props);
    this.props.fetchQuotesConstants();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.moreQuotesRequested && nextProps.moreQuotesRequested) {
      this.props.showRoster({
        type: INFO_ROSTER,
        message: 'Thank you for your feedback! Our agent shall be get back to you with more quotes soon.'
      });
    }
  }

  openPopup = () => {
    this.setState({ openModal: true, closeModal: false });
  };

  closePopup = () => {
    this.setState({ closeModal: true, openModal: false });
  };

  handleSubmit = (values) => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Request more quotes pop up', 'Request quotes');
    this.props.requestMoreQuotes(this.props.currentTripId,
      values, {}, this.props.location.search);
    this.closePopup();
  };

  fetchQuotesComments = (props) => {
    const quoteIds = Object.keys(props.quotes).map((quoteId) => {
      return quoteId;
    });

    props.fetchQuotesComments({ tripId: props.currentTripId, quoteIds });
  };

  callbackHandler = (type, data = {}) => {

    switch (type) {
      case QUOTE_EVENTS_ENUMS.BOOK_NOW:
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Book now pop up', 'Continue', '', '', data.quoteId, 'quote id');
        this.props.bookNow(data);
        break;
      case QUOTE_EVENTS_ENUMS.REJECT_QUOTE:
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Reject quote pop up', 'Reject quote',
          `${data.reason}::${data.reasonText}`, 'reason index::reason text', data.quoteId, 'quote id');
        this.props.rejectQuote(data);
        break;
      case QUOTE_EVENTS_ENUMS.REACTIVATE_QUOTE:
        this.trackSegmentEvent(ORGANISM_CLICKED, 'Quotes section', 'Reactivate quote', '', '', data.quoteId, 'quote id');
        this.props.reactivateQuote(data);
        break;
    }
  };

  handleRequestMore = () => {
    this.openPopup();
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Request more quotes section', 'Request more quotes');
  };

  handleCancel = () => {
    this.closePopup();
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Request more quotes pop up', 'Cancel');
  };

  trackSegmentEvent = (event, section, cta, miscId1, miscType1, miscId2, miscType2) => {
    rescue(() => {
      this.props.trackSegment({
        event,
        section,
        object: '',
        cta,
        miscId1,
        miscType1,
        miscId2,
        miscType2,
      });
    });
  };

  onSensorChange = (isVisible) => {
    if (isVisible && !this.isEventTracked) {
      this.isEventTracked = true;
      this.trackSegmentEvent(ORGANISM_VIEWED, 'Request more quotes section', '');
    }
  };

  render() {
    const {
      currentTripId, quotes, sortOrder, userDetails,
      quotesComments, bookNow, quoteRejectionReasons, trackSegment
    } = this.props;

    if (!Object.keys(quotes).length) {
      return null;
    }

    return (
      <div>
        {
          sortOrder && sortOrder.map((quoteId, index) => <QuoteBox key={quoteId}
                                                      cardIndex={index}
                                                      tripId={currentTripId}
                                                      quote={quotes[quoteId]}
                                                      comments={quotesComments[quoteId]}
                                                      userDetails={userDetails}
                                                      bookNow={bookNow}
                                                      quoteRejectionReasons={quoteRejectionReasons}
                                                      callbackHandler={this.callbackHandler}
                                                      trackSegment={this.trackSegmentEvent} />)
        }
        <Sensor onChange={this.onSensorChange}
                partialVisibility='bottom'
                delayedCall={true}>
          <div className='sbcw p15 at_requestMore_section'>
            <p className='f14 mb5 pfc3 text-center'>
              Not satisfied with the quote?
            </p>
            <div className='btn-sec-load wfull at_requestMore' onClick={this.handleRequestMore}>Request More Quotes</div>
            <Modal
              trigger={null}
              isOpen={this.state.openModal}
              customCloseTrigger={this.state.closeModal}
              onRequestCloseCustom={this.closePopup}
            >
              <RequestMoreQuote
                constants={this.props.constants.requestMoreQuotesOptions}
                handleCancel={this.handleCancel}
                onSubmit={this.handleSubmit}
                trackSegment={this.trackSegmentEvent}
              />
            </Modal>
          </div>
        </Sensor>
      </div>

    );
  }
}
