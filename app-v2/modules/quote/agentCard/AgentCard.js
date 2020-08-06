import React from 'react';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';

import { CallUs, ChatIcon } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import RequestCallback from 'modules/requestCallback';
import AgentChatButton from 'modules/quote/shared/AgentChatButton';
import BasicInfo from './components/BasicInfo';
import DiscountOffer from 'modules/discountEngine';
import AgentDetail from './components/AgentDetail';
import QuoteBottom from 'modules/quote/bottom';
import DealPrice from 'modules/quote/dealPrice';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import { checkIsTripStatusBeforeInvoiced } from 'helpers/utils';

const AgentCard = ({
                     tripId, quoteId, agent, userDetails, destination, tripStatus, priceInformation,
                     discountInformation, downloadQuote, showRoster, trackSegment
                   }) => {

  const trackSegmentEvent = (event, section, object, cta) => {
    trackSegment({
      event,
      section: section || 'Agent',
      object: object || `Agent/${agent.id}`,
      cta
    });
  };

  const onSensorChange = (isVisible) => {
    if(isVisible) {
      trackSegment({ event: ORGANISM_VIEWED, section: 'Price Matching' });
    }
  };

  const hasDiscountApplied = discountInformation.discount > 0;
  const isTripStatusBeforeInvoiced = checkIsTripStatusBeforeInvoiced(tripStatus);
  return (<div className="sbcw mt8 mb2">
      <div className="p15 at_agentDetailCard">
        <AgentDetail userDetails={userDetails} agent={agent} />
        <div className="mt15 flex alignCenter spaceBetween at_agentActionCTA_section">
          <a href={`tel:${agent.phoneNumber}`} onClick={() => trackSegmentEvent(ORGANISM_CLICKED, 'Agent', '', 'Call')}
             className="iblock flex alignCenter pfc3 fw7 at_call_CTA">
            <span className="input-24 mr8"><CallUs /></span><span className="pfc3">Call</span>
          </a>
          <RequestCallback />
          <Link to="" className="iblock flex alignCenter pfc3 fw7 at_message_CTA">
            <span className="input-24 mr8"><ChatIcon /></span>
            <AgentChatButton textClassName={'pfc3, fw7'} name="Message"
                             handleChatClick={() => trackSegmentEvent(ORGANISM_CLICKED, 'Agent', '', 'Message')} />
          </Link>
        </div>
      </div>
      <BasicInfo tripId={tripId} quoteId={quoteId} destination={destination}
                 priceInformation={priceInformation} downloadQuote={downloadQuote}
                 discountInformation={discountInformation} showRoster={showRoster}
                 tripStatus={tripStatus} trackSegment={trackSegmentEvent} />

      <QuoteBottom.container trackSegment={trackSegment}/>
      <div className="pt8 sbc5" />
      {
        hasDiscountApplied
          ? <DiscountOffer discountInformation={discountInformation}
                           tripId={tripId}
                           renderAppliedCoupon={true} />
          : null
      }
    { isTripStatusBeforeInvoiced &&
      <Sensor onChange={(isVisible) => onSensorChange(isVisible) }
              partialVisibility='bottom'
              delayedCall={true}>
        <DealPrice trackSegment={trackSegmentEvent}/>
      </Sensor>}
    </div>
  );
};

AgentCard.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  agent: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tripsSold: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    star: PropTypes.number,
    reviewsCount: PropTypes.number,
    reviewLink: PropTypes.string
  }),
  userDetails: PropTypes.object.isRequired,
  destination: PropTypes.string.isRequired,
  tripStatus: PropTypes.string.isRequired,
  priceInformation: PropTypes.object.isRequired,
  discountInformation: PropTypes.object,
  downloadQuote: PropTypes.func.isRequired,
  showRoster: PropTypes.func,
  trackSegment: PropTypes.func
};

AgentCard.defaultProps = {
  agent: {
    star: 0,
    reviewsCount: 0,
    reviewLink: ''
  },
  discountInformation: {},
  showRoster: () => {},
  trackSegment: () => {}
};

export default AgentCard;
