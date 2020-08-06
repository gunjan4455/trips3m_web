import React from 'react';

import Swiper from 'components/Swiper/Swiper';
import EmployeeStoryItem from './EmployeeStoryItem';
import teamStory from '../data/employeeStory';

const EmployeeStoryCard = () => (
  <div className="clearfix">
    <Swiper id="team-story" spaceBetween={15} slidesPerView="auto">
      {teamStory.map((item, index) => (
        <div key={index} style={{ width: '100%' }} className={`at_subtext${index}`}>
          <EmployeeStoryItem {...item} />
        </div>
      ))}
    </Swiper>
  </div>
);

export default EmployeeStoryCard;
