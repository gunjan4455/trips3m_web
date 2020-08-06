import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Img from 'components/Common/Img';

const OnHover = styled.div({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.4)',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
});

const ImgContainer = styled.div({
  width: '100%',
  minHeight: '180px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .onhoverCard': {
    display: 'flex',
  }
});

const ViewDetail = styled.span({
  border: '1px solid #fff',
  padding: '14px 35px',
});

const SmallBanner = ({ imageUrl, imagekitUrl, imageAlt, bannerStyle, urlSpotlight }) => {
  return (
    <Link to={urlSpotlight} className="block">
      <ImgContainer className="clearfix relative sbc4" style={bannerStyle}>
        <Img width={395} height={200} src={imageUrl} ikSrc={imagekitUrl} alt={imageAlt} />
        <OnHover className="onhoverCard"><ViewDetail
          className="f14 block sfcw fwb">View Details</ViewDetail></OnHover>
      </ImgContainer>
    </Link>
  );
};

SmallBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  bannerStyle: PropTypes.object,
  urlSpotlight: PropTypes.string.isRequired
};

SmallBanner.defaultProps ={
  bannerStyle: {}
};

export default SmallBanner;
