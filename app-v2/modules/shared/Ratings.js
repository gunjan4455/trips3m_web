import React from 'react';
import PropTypes from 'prop-types';
import {
  StarIcon,
  HalfStar,
  StarIconEmpty
} from 'helpers/Icon/Icon';
import Cities from './Cities';

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];
  while (i < starNum) {
    stars.push(<li key={keyType + i}><Component /></li>);
    i += 1;
  }
  return stars;
}

export default class Ratings extends React.Component {
  static propTypes = {
    rating: PropTypes.number,
  };
  static defaultProps = {
    rating: 0,
  };

  render() {
    const { rating } = this.props;

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
    stars.push(getStars(StarIconEmpty, emptyStarCount, 'empty_star'));

    return (
      <ul className="rating-star-list at_rating">
        {
          stars
        }
      </ul>
    );
  }
}
