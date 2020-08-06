import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';

import { parsePrice, capitalizeFirstLetter } from 'helpers/parsers';
import { DESTINATION_VIEWED, trackSegment, ORGANISM_CLICKED } from 'actions/segmentEvents';

import Img from 'components/Common/Img';

const SlideItem = ({ imagePath, imagekitUrl, name, packageCount, startingPrice, link, id }) => {
  let isComponentViewed = false;
  const onSensorChange = (isVisible) => {
    if (!isComponentViewed && isVisible) {
      isComponentViewed = isVisible;
      trackSegment({
        event: DESTINATION_VIEWED,
        category: `Destination:${name}`,
        section: 'Best Seller Destinations',
        object: `Destination/${id}`,
        cta: '',
        destination_id: id,
        value: startingPrice,
      });
    }
  };

  const trackSegmentEvent = () =>{
    trackSegment({
      event: ORGANISM_CLICKED,
      category: `HOME PAGE`,
      section: 'Explore Bestselling Packages',
      object: `Package Card`,
      cta: capitalizeFirstLetter(name)
    });
  };

  const renderChild = () => (
    <>
      <div className="radius4 overflowh" style={{ width: '120px', height: '150px' }}>
        <Img ikSrc={imagekitUrl} src={imagePath} alt={name} width={120} height={150} />
      </div>
      <Sensor onChange={onSensorChange} intervalDelay={3000} />
      <p className="f14p fw9 pfc3 mt8" style={{ width: '120px' }}>{capitalizeFirstLetter(name)}</p>
      <p className="f10 pfc3 mt4">Starting at: {parsePrice({ price: startingPrice, appendOnly: false })}</p>
    </>
  );

  return (
    <div>
      {
        __SERVER__ ?
          <a
            href={link}
            onClick={() => trackSegmentEvent()}
          >
            { renderChild() }
          </a> :
          <Link
            to={link}
            onClick={() => trackSegmentEvent()}
          >
            { renderChild() }
          </Link>
      }
    </div>
  );
};

SlideItem.propTypes = {
  link: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  packageCount: PropTypes.number.isRequired,
  startingPrice: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  bestTimeToVisit: PropTypes.array.isRequired
};

export default SlideItem;
