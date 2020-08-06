import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getShowMoreText } from '../../helper';
import ItineraryCard from './ItineraryCard';
import ItineraryHeading from './ItineraryHeading';
import { ACTIVITY } from 'constants/activityConstant';
import ShowMore from 'modules/shared/ShowMore';

const GItineraryItemDiv = styled.div({
  '&::after': {
    content: '\' \'',
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '1px',
    background: '#F2F2F2',
    width: '100%'
  }
});

const GItineraryByDayDiv = styled.div({
  '& .itineraryday_checkbox + label': {
    '& .itineraryByDayBody': {
      height: '0',
      overflow: 'hidden'
    },
  },
  '& .itineraryday_checkbox:checked + label': {
    '& .itineraryDownArrow': {
      transform: 'rotate(180deg)',
    },
    '& .itineraryByDayBody': {
      height: 'auto',
    },
  },
});

const ItineraryByDay = ({ detail, day, defaultOpen, trackSegmentEvent }) => {

  return (
    <GItineraryByDayDiv className="sbcw radius2 mb8">
      <input
        name="quote_itinerary"
        className="nblock itineraryday_checkbox"
        defaultChecked={defaultOpen}
        type="radio"
        id={`itineraryday_${day}`}
      />
      <label className="block clearfix" htmlFor={`itineraryday_${day}`}>
        <div className="itineraryByDayData">
          {
            Object.keys(detail).map((section, i) => {
              if (detail[section].sectionType === ACTIVITY.itinerary) {
                return (
                  <div key={i} className="itineraryByDayHead">
                    <ItineraryHeading
                      item={detail[section]}
                      trackSegmentEvent={trackSegmentEvent}
                      days={day}
                    />
                  </div>
                );
              }
            })
          }
          {
            Object.keys(detail).map((sectionId) => {
              const section = detail[sectionId];
              if (section.sectionType === ACTIVITY.itinerary) {
                return (
                  section.description ? <div key={sectionId} className="itineraryByDayBody">
                    <GItineraryItemDiv className="p15 relative">
                      <ShowMore
                        {...getShowMoreText(section.description, 125)}
                        showMoreText="Read More"
                        showLessText="Read Less"
                      />
                    </GItineraryItemDiv>
                  </div> : null
                );
              } else {
                return (
                  <div key={sectionId} className="itineraryByDayBody">
                    <GItineraryItemDiv className="p15 relative">
                      <ItineraryCard
                        item={section}
                        trackSegmentEvent={trackSegmentEvent}
                        day={day}
                      />
                    </GItineraryItemDiv>
                  </div>
                );
              }
            })
          }
        </div>
      </label>
    </GItineraryByDayDiv>
  );
};

ItineraryByDay.propTypes = {
  detail: PropTypes.object,
  day: PropTypes.number,
  defaultOpen: PropTypes.bool,
  trackSegmentEvent: PropTypes.func,
  showHidePdmView: PropTypes.func,
  setPdmCategory: PropTypes.func
};

ItineraryByDay.defaultProps = {
  detail: [],
  day: '',
  defaultOpen: false,
  trackSegmentEvent: () => {},
  setPdmCategory: () => {},
  showHidePdmView: () => {}
};

export default ItineraryByDay;
