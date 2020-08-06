import React from 'react';
import styled from '@emotion/styled';
import CoreTeamItem from './CoreTeamItem';
import coreTeam from '../data/coreTeam';
import Swiper from 'components/Swiper/Swiper';

const GCoreTeamSliderDiv = styled.div({
  '& .swiperCustomWidth': {
    minWidth: '200px !important',
    maxWidth: '200px !important',
  },
});

const CoreTeam = () => (
  <div className="container pl0 pr0">
    <GCoreTeamSliderDiv className="clearfix">
      <Swiper id="coreteam-story" slidesPerView="auto">
        {coreTeam.map((item, index) => (
          <div key={index} className={`at_team${index}`}>
            <CoreTeamItem {...item} />
          </div>
        ))}
      </Swiper>
    </GCoreTeamSliderDiv>
  </div>
);

export default CoreTeam;
