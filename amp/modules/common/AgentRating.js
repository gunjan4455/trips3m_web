import React from 'react';
import PropTypes from 'prop-types';

import './AgentRating.scss';

function getStars(starNum, keyType, starClass) {
  let i = 0;
  const stars = [];
  while (i < starNum) {
    stars.push(<li className={`${starClass} rating-span relative iblock`} key={keyType + i}></li>);
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

  stars.push(getStars(fullStarCount, `${id}_full_star`, 'fullStarClass'));
  stars.push(getStars(halfStarCount, `${id}_half_star`, 'halfStarClass'));
  stars.push(getStars(emptyStarCount, `${id}_empty_star`, 'emptyStarClass'));

  return (
    <div className="rating-stars iblock m0 at_ratingstars">
      {stars}
    </div>
  );
};

AgentRating.propTypes = {
  agentRating: PropTypes.number,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.stringg
  ])
};

AgentRating.defaultProps = {
  agentRating: 4,
  id: 'unique_identifier'
};

export default AgentRating;
