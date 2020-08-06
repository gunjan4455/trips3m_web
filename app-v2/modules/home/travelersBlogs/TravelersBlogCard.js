import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Img from 'components/Common/Img';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const TravelersBlogCard = ({ link, imgPath, storyHeading, index, trackSegmentEvent }) => {
  const trackClickEvent = (storyHeading) => {
    trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Featured Blogs',
      object: 'Blog Card',
      cta: storyHeading.replace(/ /g,'_'),
    });
  };

  const renderChild = () => (
    <>
      <div className="overflowh radius6 sbc5 mb15 " style={{height: '140px' }}>
        <Img
          //className="wfull hfull"
          ikSrc={imgPath}
          alt={storyHeading}
          preventJerkOnLoad={false}
          width={320}
          height={240}
        />
      </div>
      <p className="m0 pfc3 f14 fwb traveler-story-heading">{storyHeading}</p>
    </>
  );
  
  return (
    __SERVER__ ?
      <a
        href={link}
        target="_blank"
        onClick={() => trackClickEvent(storyHeading)}
      >
        { renderChild() }
      </a> :
      <Link
        to={link}
        target="_blank"
        onClick={() => trackClickEvent(storyHeading)}
      >
        { renderChild() }
      </Link>
  );
};

TravelersBlogCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  storyHeading: PropTypes.string.isRequired,
  index:  PropTypes.number.isRequired,
  trackSegmentEvent: PropTypes.func.isRequired
};

export default TravelersBlogCard;
