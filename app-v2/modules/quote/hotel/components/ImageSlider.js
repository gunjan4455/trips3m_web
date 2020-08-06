import React from 'react';
import PropTypes from 'prop-types';

import FullWidthSlider from 'modules/shared/carousel/FullWidthSlider';

const ImageSlider = ({ images, name }) => {

  const imagesUrl = images.map(i => i.url);
  return (
    <div>
      <FullWidthSlider images={imagesUrl} name={name} />
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
};

ImageSlider.defaultProps = {
  images: [],
  name: '',
};

export default ImageSlider;
