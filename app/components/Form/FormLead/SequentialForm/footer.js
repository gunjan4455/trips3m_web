import React from 'react';
import PropTypes from 'prop-types';

import { RightWhiteArrow, LeftRedArrow, DisabledArrowLeft } from 'helpers/Icon/Icon';

const Footer = props => (
  <div className="form-footer p8 flex">
    {props.goBackDisabled ?
      <button className="flexFull back-button-text disabled" type="button">
        <span className="arrow-icon-container left"><DisabledArrowLeft /></span>Back
      </button> :
      <button className="flexFull back-button-text" onClick={props.goBack} type="button">
        <span className="arrow-icon-container left"><LeftRedArrow /></span>Back
      </button>
    }
    <button type="button" className={`btn-filled-pri-large flexFull ${props.goNextDisabled ? 'disabled' : ''}`}
            onClick={props.goForward}>
      {props.isLastSlide ? 'Submit' : 'Next'}
      <span className="arrow-icon-container"><RightWhiteArrow /></span>
    </button>
  </div>
);

Footer.propTypes = {
  goBack: PropTypes.func,
  goForward: PropTypes.func,
  goBackDisabled: PropTypes.bool,
  goNextDisabled: PropTypes.bool,
  isLastSlide: PropTypes.bool
};

Footer.defaultProps = {
  goBack: () => {},
  goForward: () => {},
  goBackDisabled: false,
  isLastSlide: false
};

export default Footer;
