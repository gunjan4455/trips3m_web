import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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
  height: '140px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .onhoverCard': {
    display: 'flex',
  }
});

const Img = styled.img({
  width: 'auto',
  minHeight: '100%',
  minWidth: '100%',
});

const ViewDetail = styled.span({
  border: '1px solid #fff',
  padding: '14px 35px',
});

const SmallBanner = ({ imgPath, imgAlt, bannerStyle, hoverText }) => {
  return (
    <ImgContainer className="clearfix relative" style={bannerStyle}>
      <Img src={imgPath} alt={imgAlt} />
      <OnHover className="onhoverCard"><ViewDetail className="f14 block sfcw fwb">{hoverText}</ViewDetail></OnHover>
    </ImgContainer>
  );
};


SmallBanner.propTypes = {
  imgPath: PropTypes.string,
  imgAlt: PropTypes.string,
  bannerStyle: PropTypes.object,
  hoverText: PropTypes.string,
};

SmallBanner.defaultProps = {
  imgPath: 'https://images.pexels.com/photos/158138/idaho-farm-panorama-fields-158138.jpeg?auto=compress&cs=tinysrgb&h=350',
  imgAlt: '',
  bannerStyle: {},
  hoverText: 'View Details',
};

export default SmallBanner;
