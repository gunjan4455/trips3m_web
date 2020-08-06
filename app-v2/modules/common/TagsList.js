import React from 'react';
import PropTypes from "prop-types";

const TagsList = ({ tags }) => {

  const tagsData = tags.map((tag, i) =>
    <li key={i} className="f10 iblock">{tag}</li>
  );

  return(
    <ul className="tagsList m0 p0 clearfix">
      {tagsData}
    </ul>
  );
};

TagsList.propTypes = {
  tags: PropTypes.array,
};

TagsList.defaultProps = {
  tags: ['Nature', 'Beach', 'Backwaters', 'House Boat']
};

export default TagsList;
