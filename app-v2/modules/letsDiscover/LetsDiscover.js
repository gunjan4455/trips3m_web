import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Swiper from 'components/Swiper/Swiper';
import Card from './Card';
import Heading from 'modules/shared/Heading';

class LetsDiscover extends Component {
  static propTypes = {
    letsDiscover: PropTypes.array.isRequired,
    fetchLetsDiscover: PropTypes.func,
    destination: PropTypes.string
  };

  static defaultProps = {
    destination: ''
  };

  componentDidMount() {
    const { destination } = this.props;
    this.props.fetchLetsDiscover({ destination: destination });
  }

  componentDidUpdate(prevProps) {
    if(this.props.destination !== prevProps.destination){
      prevProps.fetchLetsDiscover({ destination: this.props.destination });
    }
  }

  render() {
    const { letsDiscover } = this.props;
    return letsDiscover.length > 0 ? (
      <div className="clearfix p15 sbcw wfull">
        <div className="clearfix relative">
          <Heading
            data={{
              title: "Lets Go Discover",
              heading:
                "An exclusive collection of travel blogs that will instill wanderlust in you"
            }}
          />
          <Link className="absolute t2 r0 iblock f14 fw7" to="/blog/">
            View All
          </Link>
        </div>
        <div className="clearfix">
          <div className="swiper-full-width">
          <Swiper
            id="letsdiscover"
            slideClass="slide"
            spaceBetween={15}
            slidesPerView="auto"
            ssrAnimation={{ width: 280, height: 218 }}
            rebuildOnUpdate
          >
            {letsDiscover &&
              letsDiscover.map((discover, index) => {
                return (
                  <div className="clearfix radius2 relative" key={index}>
                    <Card
                      id={discover.id}
                      title={discover.title}
                      imagePaths={discover.imagePaths}
                      thumbnailImagePaths={discover.thumbnailImagePaths}
                      date={discover.postDate}
                      url={discover.url}
                    />
                  </div>
                );
              })}
          </Swiper>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default LetsDiscover;
