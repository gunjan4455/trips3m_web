/* eslint-disable prefer-spread, react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  StarIcon,
  StarIconEmpty
} from 'helpers/Icon/Icon';

import './StarRatings.scss';

const StarRatings = ({ rating, total, id }) => {
  const r = parseInt(rating);
  const t = parseInt(total);

  const starIconElements = Array.apply(null, Array(r)).map((e, index) => <li key={`${id}_${index}`}><StarIcon /></li>);
  const starIconEmptyElements = Array.apply(null, Array(t - r)).map((e, index) => <li key={`${id}_${rating + index}`}><StarIconEmpty /></li>);

  return (
    <ul className="traveler-rating-star-list">
      {starIconElements}
      {starIconEmptyElements}
    </ul>
  );
};

StarRatings.propTypes = {
  rating: PropTypes.number,
  total: PropTypes.number,
  id: PropTypes.string.isRequired
};

StarRatings.defaultProps = {
  rating: 4,
  total: 5
};

export default StarRatings;
