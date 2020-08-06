import React from 'react';
import PropTypes from 'prop-types';

const ReviewText = ({ text }) => (
  <p>{text}</p>
);

ReviewText.propTypes = {
  text: PropTypes.string,
};

ReviewText.defaultProps = {
  text: ''
};

export default ReviewText;
