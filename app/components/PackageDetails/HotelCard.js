import React from 'react';
import PropTypes from 'prop-types';

import ItineraryTags from 'components/Itinerary/ItineraryTags';
import Img from 'components/Common/Img';
import StarRatings from '../Review/StarRatings';

import './IncExclusion/HotelCard.scss';

const HotelCard = ({details, images, index}) => (
  <div className="hotel-card">
    <div className="hotel-img relative box-with-layer">
      <Img width={316} height={140} src={images.imageUrl} ikSrc={images.imagekitUrl} alt={details.name} />
    </div>
    <div className="row row- pt8 pb8 hotel-data-box">
      <h3 className="iblock mr8 f14 mb8 fw9">{details.name}</h3>
      <div className="block mb8">
        <StarRatings
          id={`rating_${index}`}
          rating={details.rating}
        />
      </div>
      <p className="f14p ellipsis-two">{details.address}</p>
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
