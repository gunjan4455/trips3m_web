import React from 'react';
import PropTypes from 'prop-types';

import PrefilledBanner from './PrefilledBanner';
import PostfilledBanner from './PostFilledBanner';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';


const Banner = ({ flightsData, trackSegment }) => {
  const trackSegmentEvent = (cta, object, miscType1) => {
    trackSegment({
      event: ORGANISM_CLICKED,
      section: 'Flights',
      cta,
      object,
      miscType1
    });
  };

  return(
    <div className="flex flexFull" style={{ maxWidth: '100%', minWidth: '100%' }}>
      {
        flightsData.length ?
          <PostfilledBanner trackSegmentEvent={trackSegmentEvent} />
          : <PrefilledBanner trackSegmentEvent={trackSegmentEvent} />
      }
    </div>
  );
};

Banner.propTypes = {
  flightsData: PropTypes.array.isRequired,
  trackSegment: PropTypes.func.isRequired
};

export default Banner;
