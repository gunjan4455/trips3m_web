import React from 'react';
import PropTypes from 'prop-types';

import Swiper from 'components/Swiper/Swiper';
import TopInCard from './TopInCard';
import Heading from 'modules/shared/Heading';

const TopRegions = ({ topRegions, spacingCss }) => {
  return topRegions.length ? (
    <div className="clearfix p15 sbcw" style={spacingCss}>
      <Heading title="Top States In India" />
      <div className="swiper-full-width">
      <Swiper
        id="topInSlider"
        spaceBetween={15}
        slidesPerView="auto"
        ssrAnimation={{ width: 280, height: 122 }}
        rebuildOnUpdate>
        {
          topRegions.map((region, index) => (
            <div key={index} className="clearfix radius2 relative">
              <TopInCard {...region} />
            </div>
          ))
        }
      </Swiper>
      </div>
    </div>
  ) : null;
};

TopRegions.propTypes = {
  topRegions: PropTypes.array,
  spacingCss: PropTypes.object
};

TopRegions.defaultProps = {
  topRegions: [],
  spacingCss: {}
};

export default TopRegions;
