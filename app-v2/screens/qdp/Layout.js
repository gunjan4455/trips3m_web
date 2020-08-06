import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Sensor from 'react-visibility-sensor';

import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import { trackSegment } from 'actions/segmentEvents';
import { getCookie, setCookie } from 'helpers/FormDataFormatter';
import PriceMatchingPopup from 'modules/quote/cheaperDeal';
import common from 'app-v2/common';
import { getQuotesList, getDestination } from 'modules/quote/reducers/quoteList';
import Header from 'modules/quote/Header';
import QuoteDetailHeader from 'modules/quote/QuoteDetailHeader';
import QuoteTimer from 'modules/quote/QuoteTimer/QuoteTimer';
import QuoteStickyFooter from 'modules/quote/footer';
import Roster from 'modules/roster';
import ChatIcon from 'modules/quote/shared/ChatIcon';
import ThingsToCheck from './thingsToCheck/ThingsToCheck';
import GrowingMarket from './growingMarket/GrowingMarket';
import { checkIsTripStatusBeforeInvoiced } from 'helpers/utils';
import { checkIfQuoteActiveOrChosen } from 'modules/quote/reducers/quoteList';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.isEventTracked = {};
    this.state = { pricePopup: false };
  }

  componentDidMount() {
    this.props.layout.components.map((component) => {
      this.isEventTracked[component.name] = false;
    });
  }

  UNSAFE_componentWillReceiveProps(props, nextProps) {
    if (props.currentQuoteId !== nextProps.currentQuoteId) {
      this.isEventTracked = {};
    }
  }

  trackSegmentEvent = (data = {}) => {
    const { tripId, currentQuote, currentQuoteId } = this.props;

    if (!currentQuote) {
      return;
    }

    trackSegment({
      event: data.event,
      category: data.category || 'QDP',
      section: data.section || '',
      object: data.object || `Quote/${currentQuoteId}`,
      cta: data.cta,
      trip_id: tripId || (getCookie(TRIP_ID_COOKIE_KEY), 10) || 0,
      quote_id: currentQuoteId,
      invoice_id: currentQuote.invoiceDetails.id || 0,
      destination_id: currentQuote.destinationsList.length ? currentQuote.destinationsList[0].id : 0,
      agent_id: currentQuote.agent.id || 0,
      trip_status: currentQuote.tripStatus || '',
      quote_status: currentQuote.status || '',
      // no_of_installments: currentQuote.installmentInfo && currentQuote.installmentInfo.installmentsReceived,
      // invoice_amount: currentQuote.invoiceDetails && currentQuote.invoiceDetails.price,
      // next_installment: currentQuote.installmentInfo && currentQuote.installmentInfo.nextScheduledDate,
      // invoice_curr: currentQuote.pricingInfo && currentQuote.pricingInfo.currency,
      misc_id_1: data.miscId1,
      misc_type_1: data.miscType1,
      misc_id_2: data.miscId2,
      misc_type_2: data.miscType2,
      misc_id_3: data.miscId3,
      misc_type_3: data.miscType3,
      misc_id_4: data.miscId4,
      misc_type_4: data.miscType4,
      misc_id_5: data.miscId5,
      misc_type_5: data.miscType5
    });
  };

  onSensorChange = (isVisible, config) => {
    if (isVisible) {
      if (!this.isEventTracked[config.name]) {
        this.isEventTracked[config.name] = true;
        if (config.name === 'Cabs') {
          const { currentQuoteId, quotes } = this.props;
          const currentQuote = quotes[currentQuoteId];
          if (checkIsTripStatusBeforeInvoiced(currentQuote.tripStatus)) {
            this.checkForPopup();
          }
        }
        this.trackSegmentEvent({
          event: ORGANISM_VIEWED,
          section: config.name,
          cta: ''
        });
      }
    }
  };

  checkForPopup = () => {
    let popupViewedTrips = getCookie('pmpop_trips');
    popupViewedTrips = popupViewedTrips ? JSON.parse(popupViewedTrips) : [];
    if (!popupViewedTrips.includes(this.props.tripId)) {
      popupViewedTrips.push(this.props.tripId);
      setCookie('pmpop_trips', JSON.stringify(popupViewedTrips));
      this.setState({ pricePopup: true });
    }
  }

  closePopup = () => {
    this.setState({ pricePopup: false });
  }

  render() {
    const { currentQuoteId, quotes, userDetails, quoteTimeRemaining } = this.props;
    const QuoteStickyFooterContainer = QuoteStickyFooter.container;
    const quotesList = getQuotesList(quotes);
    const currentQuote = quotes[currentQuoteId];
    const destination = getDestination(currentQuote);
    const allQuotesActiveOrChosen = quotesList.every(quote => checkIfQuoteActiveOrChosen(quote));

    return (
      <div className="clearfix">

        <Helmet>
          <meta name="page_fullname" content="Quote Detail" />
          <meta name="page_name" content="Quote Detail" />
          <meta name="name" content="Quote Detail" />
          <meta name="destination" content={destination} />
          <meta name="trip_status" content={currentQuote.tripStatus} />
          <meta name="quote_status" content={currentQuote.status} />
        </Helmet>

        <Roster timeout={3000} />

        <div className="clearfix contentBackground sbc5">
          <div className="container">
            <div className="row pb48">
              <Header
                tripId={this.props.tripId}
                currentQuoteId={currentQuoteId}
                userDetails={userDetails}
                trackSegment={(data) => this.trackSegmentEvent(data)}
              />
              {
                quoteTimeRemaining > 0 && allQuotesActiveOrChosen ?
                  <QuoteTimer
                    totalTimeInSeconds={quoteTimeRemaining}
                    trackSegment={(data) => this.trackSegmentEvent(data)}
                  /> : null
              }
              <QuoteDetailHeader
                quotesList={quotesList}
                currentQuoteId={this.props.currentQuoteId}
                tripId={this.props.tripId}
                location={this.props.location}
              />
              {
                this.props.layout.components.map((component, $index) => {
                  const ComponentsInstance = common[component.name];
                  return (
                    <Sensor key={$index}
                            onChange={(isVisible) => this.onSensorChange(isVisible, component)}
                            partialVisibility='bottom'
                            delayedCall={true}>
                      <div key={`comp_${$index}`}>
                        <ComponentsInstance config={component} destination={destination.split(',')[0]}
                                            trackSegment={(data) => this.trackSegmentEvent(data)} />
                      </div>
                    </Sensor>

                  );
                })
              }
              {/*end of quote*/}
              <div className="row row-">
                <div className="col-xs-12">
                  <p className="fw9 pfc4 text-center p24">End of Quote</p>
                </div>
              </div>
              {
                this.state.pricePopup ?
                  <PriceMatchingPopup
                    closePopup={this.closePopup}
                    trackSegment={(data) => this.trackSegmentEvent(data)}
                  /> : null
              }

              {/* faq*/}

              {/*to check*/}
              <ThingsToCheck />
              <div className="row row-">
                <div className="col-xs-12">
                  <p className="sfc8 pb24 pt24 pl15 pr15 ">We, at Travel Triangle make sure that the you enjoy the
                    inclusions promised by our agents.</p>
                </div>
              </div>

              {/*growing market*/}
              <GrowingMarket />
              <ChatIcon />
              <QuoteStickyFooterContainer trackSegment={(data) => this.trackSegmentEvent(data)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  layout: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  quoteTimeRemaining: PropTypes.number,
  currentQuote: PropTypes.object.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  userDetails: PropTypes.object.isRequired
};


export default Layout;
