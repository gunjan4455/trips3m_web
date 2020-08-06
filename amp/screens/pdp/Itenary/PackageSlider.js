import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import './PackageSlider.scss';

const GDiscountDiv = styled.div({
  boxShadow: '0 0 6px rgba(0,0,0,0.5)',
});

const GHighlightBannerDiv = styled.div({
  backgroundColor: '#ffc057',

});

const GLuxuryDiv = styled.div({
  width: '124px',
  height: '55px',
  left: '-3px',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  overflow:'hidden',
  top: '8px'
});

export const discountPercentage = (priceTotal, priceDiscount) => priceDiscount / (priceTotal / 100);

const PackageSlider = ({ images, name, covers, dealsInfo, price, isDeal, isLuxury, hideDiscount }) => {

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
          <GHighlightBannerDiv className='p5 f12 pl15 pr15 text-center pfc3 wfull highlight-deals-banner'>
            { isDeal && dealsInfo.faq} {isLuxury && `Hassel Free Booking | All Inclusive | 24x7 Assistance`}
          </GHighlightBannerDiv>
          : null
      }
      <div className='relative'>
        <div
        className="row row- relative package-slider-img">
        <meta itemProp="name" content="Image" />
          <amp-carousel width="400"
                        height="300"
                        layout="responsive"
                        type="slides">
          {
            images.map((s, i) => {
              return (
                <div>
                  <amp-img src={s.picture_details.imagekit_url}
                           width="411"
                           height="220"
                           layout="responsive"
                           alt={name}>
                    <p className="sfcw absolute p8 b0 l0 wfull z10 fw9 package-slider-caption">
                      {s.picture_details.caption}
                    </p>
                  </amp-img>
                </div>
              );
            })
          }
          </amp-carousel>
      </div>
        {
          isDeal && price.total && price.discount && !hideDiscount ?
          <GDiscountDiv className='absolute radius2 t15 sbcw l15 z2 text-center'>
            <p className='f12 m0 p5'>Deal of the Day</p>
            <div className='flex alignCenter pbc1 justifyCenter pt5 pb5 pl8 pr8'>
              <h6 className='f32 sfcw fw9 m0'>{Math.round(discountPercentage(price.total, price.discount))}</h6>
              <div className='ml2'>
                <p className='f12 sfcw m0'>%</p>
                <p className='f12 sfcw m0'>off</p>
              </div>
            </div>
          </GDiscountDiv> :
          null
        }
        {
          isLuxury && price.total && price.discount ?
          <GLuxuryDiv className='absolute radius2 t15 l15 z2 '>{/*<LuxuryPackageIcon />*/}</GLuxuryDiv> :
          null
        }
      </div>
    </div>
  );
};

PackageSlider.propTypes = {
  images: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  covers: PropTypes.object.isRequired,
  dealsInfo: PropTypes.object,
  price: PropTypes.object,
  isDeal: PropTypes.bool,
  isLuxury: PropTypes.bool,
  hideDiscount: PropTypes.bool
};

PackageSlider.defaultProps = {
  dealsInfo: {},
  price: {},
  isDeal: false,
  isLuxury: false,
  hideDiscount: false
};

export default PackageSlider;
