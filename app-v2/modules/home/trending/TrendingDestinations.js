import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Img from 'components/Common/Img';
import LastTrending from './LastTrending';
import { DEFAULT_IMAGE_PATH } from 'app/constants';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class TrendingDestinations extends Component {

  trackSegmentEvent(destination) {
    this.props.trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Explore Destinations by Theme',
      object: 'Theme',
      cta: destination
    });
  };

  getDestinations(data) {
    return (
      data.map((item, index) => (
        <div className={`pr24 text-center ${index < 1 ? 'pl24': ''}`} key={item.id}>
          <Link
            onClick={() => this.trackSegmentEvent(item.location)}
            to={item.link}
          >
            <span className="radius100 relative overflowh block" style={{ width: '72px', height: '72px' }}>
              <Img
                width={72}
                height={72}
                ikSrc={item.imagekitUrl}
                defaultSrc={DEFAULT_IMAGE_PATH}
                alt={item.location}
              />
            </span>
            <span className="f14 pfc3 mt8 iblock overflowh">{item.location}</span>        
          </Link>
        </div>
      ))
    );
  };

  render() {
    const { data, heading, showLastCard } = this.props;
    const lastCard = showLastCard ? [<div
      key={`bestseller_destinations_trending_last`}
      style={{ width: '148px', paddingRight: '24px' }}
    >
    <LastTrending destCount={'View All'}
           TrendingpkgCount={''} lastCardLink={'/All-Places'} />
  </div>] : [];
    return (
      <div className="sbcw pt24 at_exploreDestinationByTheme">
        <div className="common-heading-sliders mb15 pl24 pr24">
          <h2 className="f20 fw9">{heading}</h2>
        </div>
        <div className="pb24 overflowXscroll flex">
          {[...this.getDestinations(data),
            ...lastCard
          ]}
        </div>
      </div>
    );
  }
}

TrendingDestinations.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string,
  showLastCard: PropTypes.bool,
  trackSegmentEvent: PropTypes.func
};

TrendingDestinations.defaultProps = {
  data: [],
  trackSegmentEvent: ()=>{},
  showLastCard: false
};
export default TrendingDestinations;
