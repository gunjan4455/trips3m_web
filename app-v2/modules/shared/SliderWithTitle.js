import React from 'react';
import PropTypes from 'prop-types';

import Card from 'modules/shared/card/Card';
import Swiper from 'components/Swiper/Swiper';
import Title from 'modules/shared/Title';

const SliderWithTitle = ({ data, overflow }) => {
  return (
    <div>
      <Title data={data} />
      <div className="clearfix swiper-full-width">
        <Swiper
          slideClass="slide"
          spaceBetween={15}
          slidesPerView="auto"
          rebuildOnUpdate
          ssrAnimation={{ width: 280, height: 267 }}
          overflow={overflow}
        >
          {data.destinationSchemes &&
          data.destinationSchemes.map((item, index) => (
            <div className="clearfix radius2 relative" key={index}>
              <Card item={item} />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

SliderWithTitle.propTypes = {
  data: PropTypes.object.isRequired,
  config: PropTypes.object,
  link: PropTypes.string,
  overflow: PropTypes.string
};

SliderWithTitle.defaultProps = {
  config: {},
  overflow: 'hidden'
};

export default SliderWithTitle;
