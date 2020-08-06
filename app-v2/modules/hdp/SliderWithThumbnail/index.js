import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import styled from '@emotion/styled';

import Swiper from 'components/Swiper/Swiper';
import { GSwiperContainerDiv, GSwiperItemDiv, GImageCreditsDiv } from './G';
import { HotelEmptyState } from 'helpers/Icon/Icon';

const parser = new Parser();

const GHotelPlaceholderDiv = styled.div({
  'width': '100%',
  'height': '240px',
  '& svg': {
    width: '105px',
    height: '69px',
  }
});

const renderImageSlider = (image, key, hotelName) => (
  <GSwiperItemDiv key={key} id={key} className="relative">
    <img width={320} height={200}
      data-src={image.picture.imagekitUrl}
      alt={image.altText ? image.altText : hotelName} className="swiper-lazy" />
    {
      image.captionLink ?
        <GImageCreditsDiv className="l0 sfcw dynamicTextInherit f10 b0 p8 absolute">
          {parser.parse(image.captionLink)}
        </GImageCreditsDiv> : null
    }
  </GSwiperItemDiv>
);

export default class SliderWithThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySwiper: null,
    };

    this.galleryRef = this.galleryRef.bind(this);
  }

  galleryRef(ref) {
    if (ref) {
      this.setState({ gallerySwiper: ref.swiper });
    }
  }

  render() {
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next .hide',
        prevEl: '.swiper-button-prev .hide',
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      }
    };

    const { images, hotelName } = this.props;

    return (
      <GSwiperContainerDiv className="relative">
        <div className="swiper-full-width">
        {
          images.length ?
            <Swiper
              {...gallerySwiperParams}
              ref={this.galleryRef}
              slideClass="slide"
              spaceBetween={15}
              slidesPerView="auto"
              ssrAnimation={{ width: 280, height: 200 }}
            >
              {
                images.map((image, index) => (
                  <div
                    key={index}
                    className={
                      images.length === 1
                        ? "radius2 overflowh swiperSingleChild"
                        : "radius2 overflowh swiperCustomWidth"
                    }
                  >
                    <div className="sbc5 sliderHotel radius4 ">
                      {renderImageSlider(image.pictureDetails, index, hotelName)}
                    </div>
                  </div>
                ))
              }
            </Swiper> :
            <GHotelPlaceholderDiv>
              <div className="relative sbc5 wfull hfull flex alignCenter justifyCenter">
                <HotelEmptyState />
              </div>
            </GHotelPlaceholderDiv>
        }
        </div>
      </GSwiperContainerDiv>
    );
  }
}

SliderWithThumbnail.propTypes = {
  images: PropTypes.array.isRequired,
  hotelName: PropTypes.string.isRequired
};

SliderWithThumbnail.defaultProps = {};
