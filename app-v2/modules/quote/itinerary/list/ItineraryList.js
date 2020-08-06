import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { DownArrow, ItineraryIcon } from 'helpers/Icon/Icon';
import { PDM_CATEGORY_ITINERARY } from 'helpers/pdmHelpers';
import { itineraryPath } from 'helpers/urlHelpers';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { ACTIVITY } from "constants/activityConstant";
import QuoteCardHeader from "modules/quote/shared/QuoteCardHeader";

const GItineraryArrowSpan = styled.span({
  transform: 'rotateZ(-90deg)'
});

const ItineraryList = ({
                         tripId,
                         quoteId,
                         itineraryInfo,
                         trackSegment,
                         setPdmCategory,
                         showHidePdmView
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

  const renderListItems = (item, index) => {
    const itineraryUrl = itineraryPath(tripId, quoteId);
    const day = index + 1;

    return <Link to={`${itineraryUrl}?day=${day}`} key={index}>
      <div className='flex alignCenter spaceBetween p15 bt at_itinerarylist'>
        <div className='flexFull'>
          <div className='flex alignCenter'>
            <h4 className='f16 fw9 pfc3 m0 mr8'>{`Day ${day}`}</h4>
            {item.eventTime ? (
              <p className='f12 pfc4 m0 at_eventTime'>{item.eventTime}</p>
            ) : null}
          </div>
          <p className='f14 pfc3 mt5'>{item.title}</p>
        </div>
        <GItineraryArrowSpan className='input-24 block p5 flex alignCenter justifyCenter'>
          <DownArrow />
        </GItineraryArrowSpan>
      </div>
    </Link>;
  };

  return (
    <Element name='itinerary-sec'>
      <div className="pfc3 f14 sbcw mt8">
        <QuoteCardHeader
          heading='Itinerary'
          chatButtonName='Edit Package'
          handleChatClick={handleChatClick}
          icon={<ItineraryIcon />}
        />
        <div>
          {itineraryInfo.map((item, index) => (
            Object.keys(item).map((section) => {
              if (item[section].sectionType === ACTIVITY.itinerary) {
                return renderListItems(item[section], index);
              }
            })
          ))}
        </div>
      </div>
    </Element>
  );
};

ItineraryList.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  itineraryInfo: PropTypes.array,
  trackSegment: PropTypes.func,
  showHidePdmView: PropTypes.func,
  setPdmCategory: PropTypes.func
};
ItineraryList.defaultProps = {
  itineraryInfo: [],
  tracksegment: () => {},
  setPdmCategory: () => {},
  showHidePdmView: () => {}
};
export default ItineraryList;
