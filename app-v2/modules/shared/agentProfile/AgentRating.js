import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {
StarIcon,
HalfStar,
StarIconEmpty
} from 'helpers/Icon/Icon';

const GRatingUl = styled.ul({
  minWidth: '80px',
  '& li': {
    width: '10px',
    height: '10px',
    margin: '0 3px',
  }
});

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];
  while (i < starNum) {
    stars.push(<li className="rating-span relative iblock" key={keyType + i}><Component /></li>);
    i += 1;
  }
  return stars;
}

const AgentRating = ({ agentRating, id }) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(agentRating);
  const fractionalRating = parseFloat((agentRating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = agentRating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);

  stars.push(getStars(StarIcon, fullStarCount, `${id}_full_star`));
  stars.push(getStars(HalfStar, halfStarCount, `${id}_half_star`));
  stars.push(getStars(StarIconEmpty, emptyStarCount, `${id}_empty_star`));

  return (
    <GRatingUl className="rating-stars iblock m0 at_ratingstars">
      {stars}
    </GRatingUl>
  );
};

AgentRating.propTypes = {
  agentRating: PropTypes.number,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

AgentRating.defaultProps = {
  agentRating: 4,
  id: 'unique_identifier'
};

export default AgentRating;
