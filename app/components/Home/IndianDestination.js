import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  TajMahalIcon,
} from 'helpers/Icon/Icon';
import { trackSegment, DESTINATION_LIST_CLICK, DFEAULT_VALUE } from '../../actions/segmentEvents';
import './DestinationType.scss';

const IndianDestination = (props) => {
  const ctaText = 'Explore Destinations In India';
  const trackClickEvent = () => {
    const destination = 'Indian';
    trackSegment({
      event: DESTINATION_LIST_CLICK,
      section: 'Theme List/Indian',
      object: '',
      cta: ctaText,
      category: `Destination List: ${destination}`,
      destination_list: destination,
      destination_id: destination,
      value: DFEAULT_VALUE,
      label: 'Destination Type: Indian'
    });
  };

  return (
    <div className="flexFull text-center sbcw p8 destination-type-box">
      <Link onClick={trackClickEvent} to="/All-Places?is_international=false">
        <div className="relative flexCenter destination-type-logo">
          <TajMahalIcon className="absolute-center indian" />
        </div>
        <h3 className="pt8 pb4 pfc3 fw4">Explore Destinations<span className="block">In India</span></h3>
      </Link>
    </div>
  );
};

IndianDestination.propTypes = {
};

IndianDestination.defaultProps = {
};

export default IndianDestination;
