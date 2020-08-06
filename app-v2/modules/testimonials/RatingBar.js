import React from 'react';
import PropTypes from 'prop-types';

import {
  GRatingRowDiv,
  GRatingBarDiv,
  GFeedbackTypeP,
  GRatingCountP
} from './G';

export const getWidth = (reviewNumbers, category, totalReviews) => {
  return reviewNumbers[category] / totalReviews * 100;
};

const RatingBar = ({ reviewNumbers, totalReviews }) => (
  <div className="bannerDataReviews sbcw">
    {
      Object.keys(reviewNumbers).map((category, i) => {
        return (
          <div key={i}>
            <GRatingRowDiv className="clearfix mb8 flex alignCenter spaceBetween">
              <GFeedbackTypeP className="m0 f14">{category}</GFeedbackTypeP>
              <GRatingBarDiv className="pbc4 ml15 mr15 relative">
                <div
                  className="actualRatings absolute l0 t0 b0 pbc1"
                  style={{ width: getWidth(reviewNumbers, category, totalReviews) + '%', }}
                />
              </GRatingBarDiv>
              <GRatingCountP className="m0 f14">
                {reviewNumbers[category]}
              </GRatingCountP>
            </GRatingRowDiv>
          </div>
        );
      })
    }
  </div>
);

RatingBar.propTypes = {
  reviewNumbers: PropTypes.shape({
    bad: PropTypes.number,
    poor: PropTypes.number,
    good: PropTypes.number,
    veryGood: PropTypes.number,
    excellent: PropTypes.number
  }).isRequired,
  totalReviews: PropTypes.number.isRequired
};

export default RatingBar;
