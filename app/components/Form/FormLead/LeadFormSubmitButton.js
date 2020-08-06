import React from 'react';
import PropTypes from 'prop-types';

const LeadFormSubmitButton = ({ handleClick }) => (
    <button onClick={handleClick} type="submit"
      className="submit-btn fright btn-filled-pri-large radius2 pt15 pb15 wfull at_leadformsubmitbtn">Submit
    </button>
);

LeadFormSubmitButton.propTypes = {
  handleClick: PropTypes.func
};

LeadFormSubmitButton.defaultProps = {
  handleClick: () => {}
};

export default LeadFormSubmitButton;
