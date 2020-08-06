import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Sensor from 'react-visibility-sensor';

import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import { trackSegment } from 'actions/segmentEvents';
import common from 'app-v2/common';
import NavBar from 'modules/rlp/NavBar';
import Header from 'modules/rlp/header';
import Roster from 'modules/roster';
import { rescue } from 'helpers/utils';
import AppDownloadBanner from 'modules/rlp/appDownloadBanner';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.isEventTracked = {};
    this.quotesApiInterval = null;
    this.counter = 0;
  }

  resetCounter = () => this.counter = 0;

  checkQuoteAtInterval = (props) => {
    const { layout, fetchQuotesData, match: { params }} = props;

    this.resetCounter();
    clearInterval(this.quotesApiInterval);

    if (layout.stage === 'LEAD_CREATED') {
      this.quotesApiInterval = setInterval(() => {
        if (this.counter >= 4) {
          return clearInterval(this.quotesApiInterval);
        }
        this.counter++;
        fetchQuotesData({ tripId: params.requestedTripId });
      }, 10000);
    }
  };

  componentDidMount() {
    const { layout } = this.props;
    layout.components.map((component) => {
      this.isEventTracked[component.name] = false;
    });

    this.checkQuoteAtInterval(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.currentTripId !== nextProps.currentTripId) {
      this.isEventTracked = {};

      this.checkQuoteAtInterval(nextProps);
    }

    const prevQuotes = this.props.quotes && Object.keys(this.props.quotes) || [];
    const currentQuotes = nextProps.quotes && Object.keys(nextProps.quotes) || [];
    if (prevQuotes.length === 0 && currentQuotes.length && this.props.layout.stage === 'LEAD_CREATED') {
      this.props.showRoster({
        allowTimeOut: false,
        message: ['Dear traveler, refresh the page to view your first quote. ',
          <a onClick={() => window.location.reload()}><u>View Quote</u></a>]
      });
      clearInterval(this.quotesApiInterval);
    }
  }

  componentWillUnmount(){
    clearInterval(this.quotesApiInterval);
  }

  trackSegmentEvent = (data = {}) => {
    rescue(() => {
      trackSegment({
        event: data.event,
        category: data.category || 'RLP',
        section: data.section || '',
        object: data.object,
        cta: data.cta,
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
    });
  };

  onSensorChange = (isVisible, config) => {
    if (isVisible) {
      if (!this.isEventTracked[config.name]) {
        this.isEventTracked[config.name] = true;

        this.trackSegmentEvent({
          event: ORGANISM_VIEWED,
          section: config.name,
          cta: ''
        });
      }
    }
  };

  render() {
    const { trips, currentTripId, layout } = this.props;
    const currentTrip = trips.byId[currentTripId];

    return (
      <div className="clearfix">

        <Helmet>
          <meta name="page_fullname" content="Request Landing" />
          <meta name="page_name" content="Request Landing" />
          <meta name="name" content="Request Landing" />
          <meta name="destination" content={currentTrip.firstDestinationName} />
          <meta name="trip_stage" content={layout.stage} />
          <meta name="trip_status" content={currentTrip.status} />
        </Helmet>

        <Roster timeout={3000} />
        <div className="clearfix contentBackground sbc5">
          <div className="at_appDownloadBannerSection">
            <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, { name: 'App Banner' })}
                    partialVisibility='bottom'
                    delayedCall={true}>
              <AppDownloadBanner trackSegment={this.trackSegmentEvent} />
            </Sensor>
          </div>
          <div className="container">
            <div className="row pb48">
              <NavBar currentTripId={currentTripId} />
              <Header currentTrip={currentTrip} trackSegment={this.trackSegmentEvent} />
              {
                this.props.layout.components.map((component, $index) => {
                  const ComponentsInstance = common[component.name];
                  return (
                    <Sensor key={$index}
                            onChange={(isVisible) => this.onSensorChange(isVisible, component)}
                            partialVisibility='bottom'
                            delayedCall={true}>
                      <ComponentsInstance config={component}
                                          trackSegment={(data) => this.trackSegmentEvent(data)} />
                    </Sensor>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  layout: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  trips: PropTypes.object.isRequired,
  currentTripId: PropTypes.number.isRequired,
  showRoster: PropTypes.func,
  fetchQuotesData: PropTypes.func,
  quotes: PropTypes.object
};


export default Layout;
