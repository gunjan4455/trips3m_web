import React from 'react';
import PropTypes from 'prop-types';

const ItineraryTags = ({ list, itineraryId, tagId }) => {
  const categoryElements = list.map(
    (value, key) => (
      <li
        key={`category_${itineraryId}_${tagId}_${key}`}  // eslint-disable-line react/no-array-index-key
        className="itinerary-tags-box-item"
      >
        { value }
      </li>
    )
  );

  return (
    <ul className="list-style-no">
      {categoryElements}
    </ul>
  );
};

ItineraryTags.propTypes = {
  list: PropTypes.array,
  itineraryId: PropTypes.number.isRequired,
  tagId: PropTypes.number.isRequired
};

ItineraryTags.defaultProps = {
  list: []
};

export default ItineraryTags;
