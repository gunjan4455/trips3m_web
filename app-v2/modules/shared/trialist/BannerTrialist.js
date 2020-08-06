import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';

const BannerTrialistBox = styled.div({
  height: 'auto',
  position: 'relative',
  overflow: 'hidden',
  '& > img': {
    minWidth: '100%',
    minHeight: '100%',
    maxWidth: '100%',
    width: 'auto',
  },
});

const BannerTrialist = ({ bannerPath, bannerAlt }) => (
  <BannerTrialistBox>
    <Img width={411} height={154} ikSrc={bannerPath} alt={bannerAlt} />
  </BannerTrialistBox>
);

BannerTrialist.propTypes = {
  bannerPath: PropTypes.string,
  bannerAlt: PropTypes.string,
};

BannerTrialist.defaultProps = {
  bannerPath: '',
  bannerAlt: '',
};

export default BannerTrialist;
