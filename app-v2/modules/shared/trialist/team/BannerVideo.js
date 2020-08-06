import React from 'react';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';
import config from 'appConfig';

const AboutUsVideoBox = styled.div({
  height: 'auto',
  position: 'relative',
  overflow: 'hidden',
});

const BannerVideo = () => (
  <AboutUsVideoBox>
    <Img
      width={411} height={160}
      ikSrc={`${config.assets.images}/public-product/Trialist/Culture/Our+Team_Cover.jpg`}
      alt="our-team"
    />
  </AboutUsVideoBox>
);

export default BannerVideo;
