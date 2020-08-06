import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Swiper from 'components/Swiper/Swiper';
import HighlightTabs from 'modules/shared/HighlightTabs';
import ReadMoreByHeight from '../shared/ReadMoreByHeight';
import Img from 'components/Common/Img';

const GDiningCusineDiv = styled.div({
  width: '360px',
  height: '220px',
  '& img': {
    minWidth: '100%',
    minHeight: '100%',
  },
});

const SliderItem = ({ src, ikSrc, alt }) => (
  <GDiningCusineDiv className="overflowh sbc5">
    <Img src={src} ikSrc={ikSrc} alt={alt} width={320} height={220} />
  </GDiningCusineDiv>
);

SliderItem.propTypes = {
  src: PropTypes.string.isRequired,
  ikSrc: PropTypes.string.isRequired,
  alt: PropTypes.string
};

const DiningCuisine = ({ cuisine, hotelDisplayName }) => (
  <div className="">
    <h2 className="m0 mb15 fwb f16">Dining & Cuisine{hotelDisplayName ? ` at ${hotelDisplayName}` : null}</h2>
    {
      cuisine.pictures ?
        <div className="mb24 swiper-full-width">
          <Swiper
            id="DiningCusineSlider"
            slideClass="slide"
            spaceBetween={15}
            slidesPerView="auto"
            ssrAnimation={{ width: 330, height: 220 }}
          >
            {
              cuisine.pictures.map(picture => (
                <div
                  key={picture.id}
                  className="swiperCustomWidth overflowh radius2"
                  style={{ minWidth: "300px" }}
                >
                  <SliderItem src={picture.url.mobile} ikSrc={picture.url.imagekitUrl} alt={picture.altText} />
                </div>
              ))
            }
          </Swiper>
        </div> : null
    }
    {
      cuisine.description ?
        <ReadMoreByHeight
          heading={cuisine.title}
          maxHeight={64}
          content={cuisine.description}
          showTitle={false}
        /> : null
    }
    {cuisine.tags ? <HighlightTabs tagList={cuisine.tags} /> : null}
  </div>
);

export default DiningCuisine;

DiningCuisine.propTypes = {
  cuisine: PropTypes.object.isRequired,
  hotelDisplayName: PropTypes.string
};
