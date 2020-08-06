import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MediaLogo = styled.div({
  width: '120px',
  position: 'relative',
  height: '80px',
  overflow: 'hidden',
  margin: '15px auto 0',
});

const MediaBox = styled.div({
  maxWidth: '300px',
  textAlign: 'center',
  whiteSpace: 'normal',
});

const GStoryTextP = styled.p({
  maxHeight: '36px',
  overflow: 'hidden',
});

/**
* Img component is not used as it applies min-width and min-height to 100.
* This is not desired for logo and hence using HTML img tag instead.
*/
const MediaLogoImg = styled.img({
  display: 'block',
  maxWidth: '100%',
  margin: '0 auto 48px',
});

const SlideItem = ({ newsHeading, month, year, logoPath, imageAlt }) => {
  const datePublished = `${month} ${year}`;
  return (
    <MediaBox>
      <GStoryTextP className="f14 m0">{newsHeading}</GStoryTextP>
      <p className="f10 fw9 pt5 pfc4 m0">{datePublished}</p>
      <MediaLogo>
        <MediaLogoImg src={`${logoPath}?tr=w-140,h-40,c-at_max`} alt={imageAlt} className="absolute-center" />
      </MediaLogo>
    </MediaBox>
  );
};

SlideItem.propTypes = {
  logoPath: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  newsHeading: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default SlideItem;
