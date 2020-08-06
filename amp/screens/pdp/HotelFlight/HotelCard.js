import React from 'react';
import PropTypes from 'prop-types';

import ItineraryTags from 'amp/modules/common/ItineraryTags';
import './HotelCard.scss';
import AgentRating from 'amp/modules/common/AgentRating';

const HotelCard = ({details, images, index}) => (
  <div className="hotel-card">
    <div className="hotel-img relative box-with-layer">
      <amp-img height={140} src={images.imageUrl} alt={details.name} />
    </div>
    <div className="row row- pt8 pb8 hotel-data-box">
      <h3 className="iblock mr8 f14 mb8 fw9">{details.name}</h3>
      <div className="block mb8">
        <AgentRating agentRating={details.rating} id={`rating_${index}`} />
      </div>
      <p className="f12">{details.address}</p>
      <div className="hotel-data-box-tags">
        <ItineraryTags list={details.facilities} itineraryId={index + 200} tagId={1} />
      </div>
    </div>
  </div>
);

HotelCard.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  images: PropTypes.shape({
    imageUrl: PropTypes.string,
    imagekitUrl: PropTypes.string
  }).isRequired
};

export default HotelCard;
