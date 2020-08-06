import React from 'react';
import PropTypes from 'prop-types';

import './PackageImgTitle.scss';
import Img from 'components/Common/Img';

const PackageImgTitle = ({ name, imageUrl, imagekitUrl, altText, isLargeImg }) => (
  <div className={
    isLargeImg ?
      'row row- relative box-with-layer package-image-title package-image-title-large' :
      'row row- relative box-with-layer package-image-title'
  }>
    <span className="package-img relative">
      <Img width={411} height={286}
           ikSrc={imagekitUrl}
           src={imageUrl}
           alt={altText}
           itemProp="image"
           itemType="https://schema.org/image" />
    </span>
    <h3 className="absolute z3 b10 l0 r0 fw9 f14 pl15 pr15 sfcw">{ name }</h3>
  </div>
);

PackageImgTitle.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  isLargeImg: PropTypes.bool
};

PackageImgTitle.defaultProps = {
  isLargeImg: false
};

export default PackageImgTitle;
