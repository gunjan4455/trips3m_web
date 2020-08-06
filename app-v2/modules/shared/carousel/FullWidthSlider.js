import React from 'react';
import PropTypes from 'prop-types';

import Swiper from 'components/Swiper/Swiper';
import './FullWidthSlider.scss';

const FullWidthSlider = ({ images, name, showTag, covers }) => {
  const sliderElements = images.map(
    (image, index) => (
      <img src={image} key={index} alt={name} itemProp="image" itemType="https://schema.org/image" />
    )
  );

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  return (
    <div className="row row- relative">
      <div className="row row- relative package-slider-img" itemScope itemType="https://schema.org/Product">
        <meta itemProp="name" content="Image" />
        <Swiper {...params} >
          {sliderElements}
        </Swiper>
        <p className="sfcw absolute p8 b0 l0 wfull z2 package-slider-caption">{name}</p>
        {
          showTag
            ? <h3 className="absolute z2 r0 t8 days-tag">{`${covers.days} Days & ${covers.nights} Nights`} </h3>
            : null
        }
      </div>
    </div>
  );
};

FullWidthSlider.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  showTag: PropTypes.bool,
  covers: PropTypes.object
};

FullWidthSlider.defaultProps = {
  images: [''], // TODO: Rahul add default image
  name: '',
  showTag: false,
  covers: {
    days: 0,
    nights: 0
  }
};

export default FullWidthSlider;
