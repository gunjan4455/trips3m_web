import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AmpCarousel.scss';

export const discountPercentage = (priceTotal, priceDiscount) => priceDiscount / (priceTotal / 100);

const AmpCarousel = ({ images, name, covers, dealsInfo, price, isDeal, isLuxury }) => {

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    preloadImages: false,
    lazy: true,
    observer: true,
    observeParents: true,
  };


  return (
    <div className="row row- relative">
      {
        isDeal || isLuxury ?
          <div className='p5 f12 pl15 pr15 flex alignCenter pfc3 wfull center highlight-deals-banner slider-amp-text'>
            {isDeal && dealsInfo.faq} {isLuxury && `Hassel Free Booking | All Inclusive | 24x7 Assistance`}
          </div>
          : null
      }
      <div className='relative'>
        <div
          className="row row- relative package-slider-img ">
          <meta itemProp="name" content="Image" />
          <div className="packageDetail">
            <div className="relative">
              <amp-carousel width="400"
                            height="240"
                            layout="responsive"
                            type="slides">
                {
                  images.length && images.map((s, i) => (
                    <div key={i}>
                      <div className="sliderImage-overlay">
                        <amp-img src={s.picture_details.imagekit_url}
                                 width="400"
                                 height="240"
                                 layout="responsive"
                                 alt="a sample image">
                        </amp-img>
                      </div>
                      <p className="sliderText">{s.picture_details.caption}</p>
                    </div>))
                }
              </amp-carousel>
            </div>
          </div>
          {
            isDeal && price.total && price.discount ?
              <div className='absolute radius2 t15 sbcw l15 z2 text-center slider-deals'>
                <p className='f12 m0 p5'>Deal of the Day</p>
                <div className='flex alignCenter pbc1 justifyCenter pt5 pb5 pl8 pr8'>
                  <h6 className='f32 sfcw fw9 m0'>{Math.round(discountPercentage(price.total, price.discount))}</h6>
                  <div className='ml2'>
                    <p className='f12 sfcw m0 center'>%</p>
                    <p className='f12 sfcw m0'>off</p>
                  </div>
                </div>
              </div> :
              null
          }
          {
            isLuxury && price.total && price.discount ?
              <div className='absolute radius2 t15 l15 z2 '>Icon</div> :
              null
          }
        </div>
      </div>
    </div>

  );
};

AmpCarousel.propTypes = {
  images: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  covers: PropTypes.object.isRequired,
  dealsInfo: PropTypes.object,
  price: PropTypes.object,
  isDeal: PropTypes.bool,
  isLuxury: PropTypes.bool
};

AmpCarousel.defaultProps = {
  dealsInfo: {},
  price: {},
  isDeal: false,
  isLuxury: false
};

export default AmpCarousel;
