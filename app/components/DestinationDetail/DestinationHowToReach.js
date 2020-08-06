import React from 'react';
import PropTypes from 'prop-types';


const DestinationHowToReach = ({ heading, subHeading, text }) => (
  <div className='row row- pb8'>
    <div className='col-xs-3 pl0 pr0'>
      <span className='fw9 block break-word'>{heading}</span>
    </div>
    <div className='col-xs-9 pl0 pr0'>
      <span className='fw3 f12 pfc4'>{subHeading}</span>
      <p className='pt8'>{text}</p>
    </div>
  </div>
);

DestinationHowToReach.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  text: PropTypes.string,
};

DestinationHowToReach.defaultProps = {
  heading: '',
  subHeading: '',
  text: '',
};

export default DestinationHowToReach;
