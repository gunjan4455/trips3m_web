import React from 'react';

import './TravelerImg.scss';
import PropTypes from 'prop-types';
import Img from 'components/Common/Img';

const TravelerImg = ({ imagePath }) => (
  <div className="traveler-img radius100">
    <Img src={imagePath} height={100}/>
  </div>
);

TravelerImg.propTypes = {
  imagePath: PropTypes.string,
};

TravelerImg.defaultProps = {
  imagePath: 'https://www.highvalueinfotech.com/images/person-flat.png'
};

export default TravelerImg;
