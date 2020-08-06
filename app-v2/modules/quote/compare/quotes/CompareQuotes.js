import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';

import {
  PriceRupee, TaxiCab, Flights, ItineraryIcon,
  Hotel, InclusionsNewIcon, ExclusionsRed, GreenTick, BlueDownArrow
} from 'app/helpers/Icon/Icon';
import {
  GAgentCompanyNameDiv, GAgentCompayImgSmallDiv, GCompareCardContentDiv
} from '../G';
import { ORGANISM_VIEWED, ORGANISM_CLICKED } from 'actions/segmentEvents';
import { quoteDetailPath, compareQuotesPath } from 'helpers/urlHelpers';
import RatingStar from 'modules/shared/RatingStar';
import QuoteCardHeader from 'modules/quote/shared/QuoteCardHeader';
import CompareHotel from '../components/CompareHotel';
import CompareItinerary from '../components/CompareItinerary';
import InclusionExclusion from '../components/InclusionExclusion';
import ComparePrice from '../components/ComparePrice';
import CompareCab from '../components/CompareCab';
import CompareFlights from '../components/CompareFlights';
import Header from '../components/Header';

class CompareQuotes extends Component {

  constructor(props) {
    super(props);

    this.isEventTracked = {
      Price: false,
      Hotel: false,
      Itinerary: false,
      Inclusion: false,
      Exclusion: false,
      Cabs: false,
      Flights: false
    };
  }

  componentDidMount() {
    this.agentCompanyName.style.top = '48px';
    this.compareQuoteRef.style.paddingTop = `${this.agentCompanyName.clientHeight + 48}px`;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  handleScroll = () => {
    if (this.agentCompanyName) {
      this.agentCompanyName.style.boxShadow = window && window.pageYOffset ? '0 2px 6px 0 rgba(0,0,0,0.4)' : '';
    }
  };

  trackSegmentEvent = (quoteId, section, cta) => {
    this.props.trackSegment({
      event: ORGANISM_CLICKED,
      section,
      cta,
      miscType1: 'quote_id',
      miscId1: quoteId
    });
  };

  onSensorChange = (isVisible, section) => {
    const { trackSegment, quoteIds } = this.props;
    if (isVisible) {
      if (!this.isEventTracked[section]) {
        this.isEventTracked[section] = true;

        trackSegment({
          event: ORGANISM_VIEWED,
          section,
          cta: '',
          miscId1: quoteIds.join('::'),
          miscType1: 'quote_id_left::quote_id_right'
        });
      }
    }
  };

  renderAgentCompany(quote) {
    const { match: { params }, quoteIds } = this.props;
    const tripId = params.requestedTripId;
    const queryString = quoteIds.reduce((finalString, quoteId) =>
      (`${finalString}&qIds=${quoteId}`), '?'
    );

    return (<Link to={`${compareQuotesPath(tripId)}${queryString}`}
                  onClick={() => this.trackSegmentEvent(quote.id, 'Agent Info', 'Agent Name')}>
      <GAgentCompanyNameDiv className="radius4 p8 pt5 border pr32 relative">
        <h3 className="f15 fw9 pfc3 at_agentCompanyName">{quote.agent.companyName}</h3>
        <div className="absolute-center-v r8">
          <div className="icon-14">
            <BlueDownArrow />
          </div>
        </div>
      </GAgentCompanyNameDiv>
    </Link>);
  }

  render() {
    const { quoteIds, match: { params }, goBack, trackSegment } = this.props;
    const quotes = Object.keys(this.props.quotes)
      .filter(quoteId => quoteIds.includes(quoteId))
      .reduce((obj, key) => {
        obj[key] = this.props.quotes[key];
        return obj;
      }, {});
    const tripId = params.requestedTripId;

    return (
      <div className="sbc5" ref={(ref) => this.compareQuoteRef = ref}>
        <div className="fixed t0 l0 r0 z10">
          <Header goBack={goBack} />
        </div>
        <div ref={(ref) => this.agentCompanyName = ref}
             className="sbcw mb8 flex alignTop fixed l0 r0 z10 at_compareCard_agentDetail">
          {
            Object.keys(quotes).map(quoteId => {
              const quote = quotes[quoteId];
              return (
                <div className="flexFull p15" key={`agent_${quoteId}`}>
                  {this.renderAgentCompany(quote)}
                </div>
              );
            })
          }
        </div>
        <div className="sbcw mb8 flex alignTop at_compareCard_agentDetail">
          {
            Object.keys(quotes).map(quoteId => {
              const quote = quotes[quoteId];
              return (
                <div className="flexFull p15 pt0" key={`agent_${quoteId}`}>
                  <div className="flex">
                    <GAgentCompayImgSmallDiv className="mr8 border at_agentCompanyImage">
                      <img src={quote.agent.profilePicture} alt={quote.agent.displayName} />
                    </GAgentCompayImgSmallDiv>
                    <div className="flexFull">
                      <RatingStar rating={quote.agent.displayRating} />
                      <p
                        className="f12 mt4 pfc3 at_agentsConvertedTrips">{quote.agent.agentsConvertedTrips} Trips
                        Sold</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Price')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_compareCard_price">
              <div className="bb">
                <QuoteCardHeader heading='Price' icon={<PriceRupee />} />
              </div>
              <ComparePrice quotes={quotes} />
            </div>
          </Sensor>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Hotel')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_compareCard_hotel">
              <div className="bb">
                <QuoteCardHeader heading='Hotels'
                                 icon={<Hotel />} />
              </div>
              <CompareHotel quotes={quotes} />
            </div>
          </Sensor>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Itinerary')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_compareCard_itinerary">
              <div className="bb">
                <QuoteCardHeader heading='Itinerary'
                                 icon={<ItineraryIcon />} />
              </div>
              <CompareItinerary quotes={quotes} trackSegment={trackSegment} />
            </div>
          </Sensor>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Inclusion')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_inclusionCompareCard">
              <div className="bb">
                <QuoteCardHeader heading='Inclusions'
                                 icon={<InclusionsNewIcon />} />
              </div>
              <InclusionExclusion quotes={quotes} trackSegment={trackSegment} isExclusion={false} />
            </div>
          </Sensor>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Exclusion')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_exclusionCompareCard">
              <div className="bb">
                <QuoteCardHeader heading='Exclusions'
                                 icon={<ExclusionsRed />} />
              </div>
              <InclusionExclusion quotes={quotes} trackSegment={trackSegment} isExclusion={true} />
            </div>
          </Sensor>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Cabs')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_compareCard_cab">
              <div className="bb">
                <QuoteCardHeader heading='Cab'
                                 icon={<TaxiCab />} />
              </div>
              <CompareCab quotes={quotes} />
            </div>
          </Sensor>
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Flights')}
                  partialVisibility='bottom' delayedCall={true}>
            <div className="sbcw mb8 at_compareCard_flight">
              <div className="bb">
                <QuoteCardHeader heading='Flights'
                                 icon={<Flights />} />
              </div>
              <CompareFlights quotes={quotes} />
            </div>
          </Sensor>
          <div className="sbcw bt at_viewQuoteCTASection">
            <div className="flex alignTop ">
              {
                Object.keys(quotes).map(quoteId => {
                  return (
                    <div className="flexFull p15" key={`view_quote_${quoteId}`}>
                      <Link to={quoteDetailPath(tripId, quoteId)}
                            onClick={() => this.trackSegmentEvent(quoteId, 'View Quote', 'View Quote')}
                            className="btn-filled-pri-large wfull at_viewQuoteCTA">View Quote</Link>
                    </div>
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

CompareQuotes.propTypes = {
  quotes: PropTypes.object,
  match: PropTypes.object,
  quoteIds: PropTypes.array,
  goBack: PropTypes.func.isRequired,
  trackSegment: PropTypes.func.isRequired
};

export default CompareQuotes;
