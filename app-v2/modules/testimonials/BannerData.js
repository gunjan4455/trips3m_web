import React from 'react';
import PropTypes from 'prop-types';

export const getReviewsPercentage = (positiveReview, totalReview) => (positiveReview / totalReview) * 100;

const BannerDataLeft = ({ positiveReview, totalReview, title }) => (
  <div className="absolute l15 b20 sfcw">
    <h1 className='m0 f32 sfcw'>{title}</h1>
    <p className="at_positivePercentage fw7 f24">
      <span className='f24 m0'>{getReviewsPercentage(positiveReview, totalReview).toFixed(2)}%{' '}</span>
      <span className="f16 fw4">Positive Reviews</span>
    </p>
    <p className='fw7 f16a'>Based On {totalReview} Ratings</p>
  </div>
);

BannerDataLeft.propTypes = {
  positiveReview: PropTypes.number.isRequired,
  totalReview: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default BannerDataLeft;
