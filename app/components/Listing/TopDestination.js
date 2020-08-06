import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Img from 'components/Common/Img';
import './TopDestination.scss';
import { trackSegment, PACKAGE_LIST_CLICK, DFEAULT_VALUE } from '../../actions/segmentEvents';
import { DEFAULT_IMAGE_PATH } from 'app/constants';


class TopDestination extends Component {
  static trackSegmentEvent(destination) {
    trackSegment({
      event: PACKAGE_LIST_CLICK,
      section: 'Top Bar',
      category: `Destination: ${destination.name}`,
      cta: destination.name,
      object: `Destination/${destination.id}`,
      label: `Package Type: Destination: ${destination.name}`,
      destination_list: destination.name,
      destination_id: destination.id,
      value: DFEAULT_VALUE
    });
  };

  static getTopDestinations(destinations) {
    return (
      destinations.map(destination => (
        <div className="top-destination-data text-center" key={destination.id}>
          <Link
            onClick={() => TopDestination.trackSegmentEvent(destination)}
            to={destination.packages_path}>
            <span className="radius100 relative overflowh">
              <Img
                width={56} height={56}
                ikSrc={destination.imagekit_url}
                src={destination.picture}
                defaultSrc={DEFAULT_IMAGE_PATH}
                alt={destination.alt}
              />
            </span>
            <p className="f12 pt8 ellipsis pfc3">{destination.name}</p>
          </Link>
        </div>
      ))
    );
  };

  render () {
    const { destinations, title } = this.props;
    return (
      <div className="row row- sbcw pt15 pb15 topd">
        <h2 className="fw9 pl15">{title}</h2>
        <div className="pl15 pt15 pr15 top-destination-con">
          <div className="top-destination-inner">
            {TopDestination.getTopDestinations(destinations)}
          </div>
        </div>
      </div>
    );
  }
}

TopDestination.propTypes = {
  destinations: PropTypes.array,
  category: PropTypes.string,
  title: PropTypes.string
};

TopDestination.defaultProps = {
  destinations: [],
  category: 'tour',
  title: 'Top Destinations'
};
export default TopDestination;
