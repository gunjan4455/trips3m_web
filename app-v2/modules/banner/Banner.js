import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import BannerContent from './BannerContent';
import Img from 'components/Common/Img';
import { createHelmetBanner } from 'helpers/seoHelpers';

const BannerContainer = styled.div(({ isLargeBanner }) => ({
  position: 'relative',
  height: isLargeBanner ? '270px' : '150px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    minWidth: 'auto',
    maxWidth: 'none',
    minHeight: '100%'
  },
  '&:after': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    top: '0',
    left: '0',
    content: '\' \'',
    zIndex: '1',
  }
}));

const Banner = ({ banner, isLargeBanner, canonicalUrl, isCityBlock, location }) => (
  <div className="clearfix">
    <Helmet>
      {createHelmetBanner(banner.metaTags, canonicalUrl, location.pathname)}
    </Helmet>
    <div className="clearfix sbc5 relative">
      <BannerContainer
        isLargeBanner={isLargeBanner}
        className="clearfix">
        {
          isCityBlock ?
            <Img
              width={500} height={270}
              src={banner.image} ikSrc={banner.imagekitUrl} alt={banner.altText} /> :
            <Img
              width={500} height={270}
              src={banner.image && banner.image.mobile}
              alt={banner.altText}
            />
        }
      </BannerContainer>
      <div className="absolute p15 l0 r0 b0 z2">
        <BannerContent banner={banner} />
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  banner: PropTypes.object.isRequired,
  metaTags: PropTypes.array,
  location: PropTypes.object,
  showExploreForm: PropTypes.bool,
  showDuration: PropTypes.bool,
  bannerStyle: PropTypes.object,
  isLargeBanner: PropTypes.bool,
  canonicalUrl: PropTypes.string,
  isCityBlock: PropTypes.bool
};

Banner.defaultProps = {
  metaTags: [],
  showExploreForm: false,
  showDuration: false,
  bannerStyle: {},
  isLargeBanner: false,
  canonicalUrl: '',
  isCityBlock: false
};

export default Banner;
