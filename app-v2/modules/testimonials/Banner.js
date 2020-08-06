import React from 'react';
import PropTypes from 'prop-types';

import BannerData from './BannerData';
import styled from '@emotion/styled';

const GImgDiv = styled.div({
  height: '270px',
  '& img': {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none',
  }
});

const GOverlayDiv = styled.div({
  background: 'rgba(0,0,0,0.4)',
});

const Banner = ({ bannerPath, bannerAlt, totalRating, positiveRating }) => {
  return (
    <div className='relative'>
      <GImgDiv className='overflowh relative'>
        <img src={bannerPath} alt={bannerAlt} className='absolute-center' />
      </GImgDiv>
      <GOverlayDiv className='absolute b0 l0 r0 p15 t0'>
        <BannerData
          totalReview={totalRating}
          title={bannerAlt}
          positiveReview={positiveRating}
        />
      </GOverlayDiv>
    </div>
  );
};

Banner.propTypes = {
  bannerPath: PropTypes.string.isRequired,
  bannerAlt: PropTypes.string.isRequired,
  totalRating: PropTypes.number.isRequired,
  positiveRating: PropTypes.number.isRequired,
};

export default Banner;
