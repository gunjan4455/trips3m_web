import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../shared/Slider';
import Heading from '../shared/Heading';
import DiscoverCard from './DiscoverCard';

const Discover = ({ letsGoDiscover }) => {
  return (
    <div className="clearfix">
      <Heading
        title={letsGoDiscover.title}
        heading={letsGoDiscover.description}
      />
      <Slider id="topInSlider" ssrAnimation={{ width: 276, height: 217 }}>
        {letsGoDiscover.letsGoDiscover.map((letsgo, index) => (
          <div key={index} style={{ width: "360px" }}>
            <DiscoverCard {...letsgo} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

Discover.propTypes = {
  letsGoDiscover: PropTypes.array,
};

Discover.defaultProps = {
  letsGoDiscover: []
};

export default Discover;
