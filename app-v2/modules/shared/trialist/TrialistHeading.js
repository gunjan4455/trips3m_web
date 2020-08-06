import React from 'react';
import PropTypes from 'prop-types';

const TrialistHeading = ({ heading, extraStyle }) => (
  <p className="fw9 f24 m0" style={extraStyle}>{heading}</p>
);

TrialistHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  extraStyle: PropTypes.object
};

TrialistHeading.defaultProps = {
  extraStyle: {}
};

export default TrialistHeading;
