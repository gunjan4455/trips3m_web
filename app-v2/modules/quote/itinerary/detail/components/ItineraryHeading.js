import React from 'react';
import PropTypes from 'prop-types';

import { DownArrow } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const ItineraryHeading = ({ item, days, trackSegmentEvent }) => {
  return (
    <div className='flex alignCenter spaceBetween p15 bb'>
      <div className='flexFull'>
        <div className='flex alignCenter'>
          <h4 className='f16 fw9 m0 mr8 mb5 at_itineraryHeading'>{`Day ${days}`}</h4>
          {item.eventTime ? (
            <p className='f12 pfc4 m0 at_eventTime'>{item.eventTime}</p>
          ) : null}
        </div>
        <p className='f14'>{item.title}</p>
      </div>
      <span
        className='itineraryDownArrow input-24 block p5 flex alignCenter justifyCenter'
        onClick={() =>
          trackSegmentEvent(ORGANISM_CLICKED, 'drop down', `Day<${days}>`)
        }>
          <DownArrow />
        </span>
    </div>
  );
};

export default ItineraryHeading;

ItineraryHeading.propTypes = {
  item: PropTypes.shape({
    sectionType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eventTime: PropTypes.string,
    imagesUrl: PropTypes.array
  }).isRequired,
  trackSegmentEvent: PropTypes.func,
  days: PropTypes.number.isRequired
};
