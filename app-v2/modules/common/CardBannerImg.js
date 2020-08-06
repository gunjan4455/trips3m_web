import React from 'react';
import PropTypes from "prop-types";

import Img from 'components/Common/Img';
import './CardBannerImg.scss';

const CardBannerImg = ({ url, alt }) => (
  <div className="cardBannerContainer">
    <Img src={url} alt={alt} />
  </div>
);

CardBannerImg.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};

CardBannerImg.defaultProps = {
  url: 'https://www.hlimg.com/images/places2see/738X538/kerala-tours3.jpg',
  alt: '',
};

export default CardBannerImg;
