import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Sensor from 'react-visibility-sensor';

import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import { trackSegment } from 'actions/segmentEvents';
import Itinerary from 'modules/quote/itinerary/detail/index';
import Roster from 'modules/roster';

class Layout extends Component {

  constructor(props) {
    super(props);
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

  onSensorChange = (isVisible) => {
    if (isVisible) {
      this.trackSegmentEvent({
        event: ORGANISM_VIEWED,
        section: 'Itinerary',
        cta: ''
      });
    }
  };

  render() {
    const ItineraryContainer = Itinerary.container;

    return (
      <div className="clearfix">

        <Helmet>
          <meta name="page_fullname" content="Quote Detail" />
          <meta name="page_name" content="Quote Detail" />
          <meta name="name" content="Quote Detail" />
        </Helmet>

        <Roster timeout={3000} />

        <div className="clearfix contentBackground sbc5">
          <div className="container">
            <div className="row pb48">
              <Sensor onChange={(isVisible) => this.onSensorChange(isVisible)}
                      partialVisibility='bottom'
                      delayedCall={true}>
                <ItineraryContainer trackSegment={(data) => this.trackSegmentEvent(data)} />
              </Sensor>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  layout: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  currentQuote: PropTypes.object.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired
};


export default Layout;
