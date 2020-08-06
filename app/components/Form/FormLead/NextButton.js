import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NextButton = ({ handleClick }) => (
  <Link onClick={handleClick} className="next-btn fright btn-filled-pri-large radius2 pt15 pb15 wfull at_next">
    Next
  </Link>
);

NextButton.propTypes = {
  handleClick: PropTypes.func
};

NextButton.defaultProps = {
  handleClick: () => {}
};

export default NextButton;
