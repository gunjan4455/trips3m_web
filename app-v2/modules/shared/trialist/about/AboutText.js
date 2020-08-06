import React from 'react';
import PropTypes from 'prop-types';

const AboutText = ({ text }) => (
  <p className="f16a fw4 m0 at_about_text">{text}</p>
);

AboutText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AboutText;
