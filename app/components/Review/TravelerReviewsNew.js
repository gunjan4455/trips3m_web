import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import ReviewText from './ReviewText';
import StarRatings from './StarRatings';
import TravelerImg from './TravelerImg';
import TravelerDetails from './TravelerDetails';
import TravelerInitials from './TravelerInitials';
import './TravelerReview.scss';
import Swiper from 'components/Swiper/Swiper';
import { Link } from 'react-router-dom';

const GRevieContainerDiv = styled.div({
  border: '1px solid #d4d4d4'
});

const GTravelerDiv = styled.div({
  minWidth: '60px'
});

const ReviewContainer = ({
  id,
  reviewText,
  starRating,
  userPic,
  userName,
  destination,
  postDate
}) => (
  <GRevieContainerDiv className='radius2 p15'>
    <div className='flex spaceBetween mb8'>
      <h6 className='f16 fw9 pfc1 m0 mr8 flexFull'>Trip to {destination}</h6>
      <StarRatings rating={starRating} id={`star_${id}`} />
    </div>
    <div className='mb15 limit-3'>
      <ReviewText text={reviewText} />
    </div>

    <div className='flex alignCenter'>
      <GTravelerDiv className='mr8'>
        {userPic ? (
          <TravelerImg imagePath={userPic} />
        ) : (
          <TravelerInitials userName={userName} />
        )}
      </GTravelerDiv>
      <div className='flexFull'>
        <TravelerDetails
          name={userName}
          destination={destination}
          postTime={postDate}
        />
      </div>
    </div>
  </GRevieContainerDiv>
);

ReviewContainer.propTypes = {
  id: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  userPic: PropTypes.string,
  userName: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  postDate: PropTypes.string
};

ReviewContainer.defaultProps = {
  userPic: null,
  postDate: ''
};

const TravelerReviewsNew = ({ reviews, title }) => {
  const {destination} = reviews[0];
  const reviewContainers = reviews.map(review => (
    <div
      key={review.id}
      className='clearfix radius2 relative'
    >
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
        <div className="mb15">
          <div className="relative">
            <h2 className="pfc3 f16 flexFull pr64">{title}</h2>
            <Link
              to={"/testimonials/" + destination}
              className="absolute t2 r0 iblock f14 fw7"
            >
              View All
            </Link>
          </div>
          <p className="f14 m0 mt4 pfc4">
            Read on to find out why our customers love us!
          </p>
        </div>
        <div>
          <Swiper
            slideClass="slide"
            spaceBetween={15}
            slidesPerView="auto"
            rebuildOnUpdate
            isFullWidthSwiper={false}
            ssrAnimation={{ width: 280, height: 195 }}
          >
            {reviewContainers}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

TravelerReviewsNew.propTypes = {
  reviews: PropTypes.array,
  title: PropTypes.string
};

TravelerReviewsNew.defaultProps = {
  reviews: [],
  title: 'Traveler Review'
};

export default TravelerReviewsNew;
