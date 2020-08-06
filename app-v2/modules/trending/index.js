import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Swiper from 'components/Swiper/Swiper';

// import {  } from './G';
import TrendingCard from './TrendingCard';

export default class Trending extends React.Component {
  static propTypes = {
    destinations: PropTypes.array,
    title: PropTypes.string
  };
  static defaultProps = {
    destinations: [],
    title: 'Trending Destinations'
  };

  render() {
    const {title, destinations} = this.props;
    return (
      <div>
        <div className="flex mb15 spaceBetween alignCenter">
          <h6 className="f18 fwb m0 flexFull">{title}</h6>
          <Link to="" className="fw7 f14">View All</Link>
        </div>
        <Swiper id="trendingDestinations">
          {destinations && destinations.length && destinations.map((destination, index) =>
            <div key={index}>
              <TrendingCard {...destination} isSlider={true} />
            </div>
          )}
        </Swiper>
      </div>
    );
  }
}
