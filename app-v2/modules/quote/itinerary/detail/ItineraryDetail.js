import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { CloseDark } from 'helpers/Icon/Icon';
import { PDM_CATEGORY_ITINERARY } from 'helpers/pdmHelpers';
import { quoteDetailPath } from 'helpers/urlHelpers';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import RequestCallback from 'modules/requestCallback/index';
import ItineraryByDay from './components/ItineraryByDay';
import AgentChatButton from 'modules/quote/shared/AgentChatButton';
import { useQuery } from 'containers/Listing/parseFilters';

const GItineraryDetailDiv = styled.div({
  height: 'calc(100vh - 100px)',
  overflowY: 'auto',
});

const ItineraryDetail = ({
                           tripId,
                           quoteId,
                           itineraryInfo,
                           trackSegment,
                           setPdmCategory,
                           showHidePdmView,
                           location
                         }) => {
  const trackSegmentEvent = (event, cta, object) => {
    trackSegment({
      event,
      section: 'itinerary',
      object: object || '',
      cta
    });
  };

  const handleChatClick = () => {
    setPdmCategory(PDM_CATEGORY_ITINERARY);
    showHidePdmView(true);
    trackSegmentEvent(ORGANISM_CLICKED, 'Edit Package', 'Main');
  };

  const query = useQuery(location.search);
  const daySelected = parseInt(query.day) || 1;

  return (
    <Element name="itinerary-sec">
      <div>
        <div className="sbcw p15 flex relative pl48 bs6">
          <Link
            to={quoteDetailPath(tripId, quoteId)}
            className="absolute-center-v l10 mr8 input-24 p5 iblock"
          >
            <CloseDark />
          </Link>
          <p className="f16a m0 fw9 pfc3 flexFull flex alignCenter ellipsis">
            Itinerary
          </p>
          <div className="absolute-center-v r10">
            <RequestCallback isIcononly={true} isWhiteIcon={false} />
          </div>
        </div>
        <GItineraryDetailDiv>
          <div className="m8">
            {itineraryInfo.map((item, i) => (
              <ItineraryByDay
                detail={item}
                day={i + 1}
                defaultOpen={i + 1 === daySelected}
                trackSegmentEvent={trackSegmentEvent}
                setPdmCategory={setPdmCategory}
                showHidePdmView={showHidePdmView}
                key={i}
              />
            ))}
          </div>
          <div className="fixed z5 b0 l0 wfull">
            <AgentChatButton name="Edit Package" textClassName="btn-filled-pri-large wfull radius2 pl8 pr8"
                             handleChatClick={handleChatClick} />
          </div>

        </GItineraryDetailDiv>
      </div>
    </Element>
  );
};

ItineraryDetail.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  itineraryInfo: PropTypes.array,
  location: PropTypes.object.isRequired,
  trackSegment: PropTypes.func,
  showHidePdmView: PropTypes.func,
  setPdmCategory: PropTypes.func
};
ItineraryDetail.defaultProps = {
  itineraryInfo: [],
  tracksegment: () => {},
  setPdmCategory: () => {},
  showHidePdmView: () => {}
};
export default ItineraryDetail;
