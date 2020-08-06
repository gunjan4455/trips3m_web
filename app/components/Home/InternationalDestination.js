import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  IntentExplore,
  BlueDownArrow
} from 'helpers/Icon/Icon';

import './DestinationType.scss';
import { DESTINATION_LIST_CLICK, DFEAULT_VALUE, trackSegment } from '../../actions/segmentEvents';

const InternationalDestination = (props) => {
  const ctaText = 'Explore International Destinations';
  const trackClickEvent = () => {
    const destination = 'International';
    trackSegment({
      event: DESTINATION_LIST_CLICK,
      section: 'Theme List/International',
      object: '',
      cta: ctaText,
      category: `Destination List: ${destination}`,
      destination_list: destination,
      value: DFEAULT_VALUE,
      label: 'Destination Type: International'
    });
  };

  return (
    <div className="flexFull text-center sbcw p8 destination-type-box">
      <Link onClick={trackClickEvent} to="/All-Places?is_international=true">
        <div className="relative flexCenter destination-type-logo">
            <IntentExplore className="absolute-center international" />
        </div>
        <h3 className="pt8 pb4 pfc3 fw4">Explore International <span className="block">Destinations</span></h3>
      </Link>
    </div>
  );
};

InternationalDestination.propTypes = {
};

InternationalDestination.defaultProps = {
};

export default InternationalDestination;
