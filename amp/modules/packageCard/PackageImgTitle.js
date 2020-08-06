import React from 'react';
import PropTypes from 'prop-types';

import './PackageImgTitle.scss';

const PackageImgTitle = ({ name, imageUrl, imagekitUrl, altText, isLargeImg }) => (
    <div className="package-img relative">
      <amp-img
        src={imagekitUrl}
        width="385"
        height="193"
        alt={altText}
        itemProp="image"
        itemType="https://schema.org/image"
      ></amp-img>
      <h3 className="absolute z10 b10 l0 r0 fw9 f14 pl15 pr15 sfcw">{ name }</h3>
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
