import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {
  StarIcon,
  HalfStar,
  StarIconEmpty
} from 'helpers/Icon/Icon';

const GRatingUl = styled.div({
  margin: '0',
  padding: '0',
  display: 'inline-block',
  '& li': {
    display: 'inline-block',
    marginRight: '6px',
    width: '10px',
    height: '10px',
    '&:last-child': {
      marginRight: '0',
    },
    '& svg': {
      width: '10px',
      height: '10px',
      display: 'block',
    }
  }
});

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];
  while (i < starNum) {
    stars.push(<li key={keyType + i}><Component /></li>);
    i += 1;
  }
  return stars;
}

const RatingStar = ({ rating, isEmptyStarsHidden }) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(rating);
  const fractionalRating = parseFloat((rating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = rating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);

  stars.push(getStars(StarIcon, fullStarCount, 'full_star'));
  stars.push(getStars(HalfStar, halfStarCount, 'half_star'));
  // stars.push(getStars(StarIconEmpty, emptyStarCount, 'empty_star'));
  if (!isEmptyStarsHidden) {
    stars.push(getStars(StarIconEmpty, emptyStarCount, 'empty_star'));
  }

  return (
    <GRatingUl className="rating-star-list at_rating">
      <ul className="flex justifyCenter">
        {
          stars
        }
      </ul>
    </GRatingUl>
  );
};

RatingStar.propTypes = {
  rating: PropTypes.number,
  isEmptyStarsHidden: PropTypes.bool
};

RatingStar.defaultProps = {
  rating: 0,
  isEmptyStarsHidden: false
};

export default RatingStar;
