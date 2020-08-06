import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';

const GPackageImgDiv = styled.div({
  height: '220px',
  overflow: 'hidden'
});

const PackageImgTitleDeals = ({ imageUrl, imagekitUrl, altText }) => (
  <GPackageImgDiv className='sbc5'>
    <Img src={imageUrl}
         ikSrc={imagekitUrl}
         alt={altText}
         height={200}
         itemProp="image"
         itemType="https://schema.org/image" />
  </GPackageImgDiv>
);

PackageImgTitleDeals.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  isLargeImg: PropTypes.bool
};

PackageImgTitleDeals.defaultProps = {
  isLargeImg: false
};

export default PackageImgTitleDeals;
