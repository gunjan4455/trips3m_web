import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BackButton = ({ handleClick }) => (
  <Link className="wfull back-btn fleft btn-pri-large radius2 pt15 pb15 wfull at_back" onClick={handleClick}>
    Back
  </Link>
);

BackButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default BackButton;
