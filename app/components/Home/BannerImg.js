import React from 'react';

import './BannerImg.scss';
import Img from 'components/Common/Img';

const BannerImg = () => (
  <div className="banner-img-container">
    <Img
      src="https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,h_212/https://s3.amazonaws.com/tt-stage-docs/public-product/homepage_illustrations/heroimage.jpg"
      alt="banner" height={212}/>
  </div>
);
export default BannerImg;
