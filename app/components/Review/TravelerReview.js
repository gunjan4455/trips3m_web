import React from 'react';
import PropTypes from 'prop-types';

import ReviewText from './ReviewText';
import StarRatings from './StarRatings';
import TravelerImg from './TravelerImg';
import TravelerDetails from './TravelerDetails';
import TravelerInitials from './TravelerInitials';
import { getListingItemsHeading } from 'helpers/utils';
import Swiper from 'components/Swiper/Swiper';

import './TravelerReview.scss';

const ReviewContainer = ({ id, reviewText, starRating, userPic, userName, destination, postDate }) => (
  <div>
    <div className="row row- pt15 mb15 text-center limit">
      <ReviewText text={reviewText} />
    </div>
    <div className="row row-">
      <StarRatings rating={starRating} id={`star_${id}`} />
    </div>
    <div className="mt15 mb15 traveler-img-details">
      <div className="traveler-img-left">
        {
          (userPic)
          ? <TravelerImg imagePath={userPic} />
          : <TravelerInitials userName={userName} />
        }
      </div>
      <div className="traveler-detail-left">
        <div className="absolute-center-v traveler-detail-left-inner">
          <TravelerDetails name={userName} destination={destination} postTime={postDate} />
        </div>
      </div>
    </div>
  </div>
);

ReviewContainer.propTypes = {
  id: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  userPic: PropTypes.string,
  userName: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  postDate: PropTypes.string,
};

ReviewContainer.defaultProps = {
  userPic: null,
  postDate: '',
};

const TravelerReview = ({ reviews, destination, isMultiDestination }) => {
  const reviewContainers = reviews.map(review => (
    <div key={review.id}>
      <ReviewContainer
        id={review.id}
        reviewText={review.body}
        starRating={review.rating}
        userPic={review.author && review.author.author_pic}
        userName={review.author && review.author.author_name}
        destination={review.destination}
        postDate={review.last_updated}
      />
    </div>
  ));

  return (
    <div className="row row-">
      <div className="row row- sbcw p15 pb8 review-con-main">
        <h2 className="text-center pfc1 f16 pb8">{getListingItemsHeading('Authentic Traveler Reviews', destination, isMultiDestination)}</h2>
        <p className="text-center f12 pfc4">Read on to find out why our customers love us!</p>
        <Swiper isFullWidthSwiper={true}  ssrAnimation={{ width: 314, height: 257 }} pagination={{ el: '.swiper-pagination', clickable: true }} rebuildOnUpdate>
          {reviewContainers}
        </Swiper>
      </div>
    </div>
  );
};

TravelerReview.propTypes = {
  reviews: PropTypes.array,
  destination: PropTypes.string,
  isMultiDestination: PropTypes.bool
};

TravelerReview.defaultProps = {
  reviews: [],
  destination: '',
  isMultiDestination: false
};

export default TravelerReview;
