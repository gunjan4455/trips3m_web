import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SlideItem from '../common/SlideItem';
import Swiper from 'components/Swiper/Swiper';
import mediaTalk from 'modules/shared/trialist/data/mediaTalk';

const Anchor = styled.a({
  color: '#3e3e3e',
  ':hover': {
    color: '#3e3e3e',
  },
});

const SwiperPaginationBox = styled.div({
  '& .swiper-pagination': {
    position: 'relative',
    bottom: '0',
  },
});

const GcardDiv = styled.div({
  border: '1px solid #d4d4d4',
  padding: '15px',
  borderRadius: '2px',
});

const MediaTalk = ({ Swiperkey }) => (
  <div className="clearfix">
    <div className="clearfix pr24">
      <h3 className="f16 fw9">
        Our Growth Story covered by all leading media publications
      </h3>
      <a href="/press-releases" className="block text-right f14 fw7">
        View All
      </a>
    </div>
    <SwiperPaginationBox className="pt8 at_mediaslider">
      <Swiper
        ssrAnimation={{ width: 300, height: 147 }}
        key={Swiperkey}
        spaceBetween={15}
        slidesPerView="auto"
        id="media-talk"
        type="DOTS"
      >
        {mediaTalk.map((item, index) => (
          <GcardDiv key={index}>
            <Anchor rel="nofollow" href={item.link}>
              <SlideItem {...item} />
            </Anchor>
          </GcardDiv>
        ))}
      </Swiper>
    </SwiperPaginationBox>
  </div>
);

MediaTalk.propTypes = {
  Swiperkey: PropTypes.string,
};

MediaTalk.defaultProps = {
  Swiperkey: 'about-us',
};

export default MediaTalk;
