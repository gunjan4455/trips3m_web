import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Heading from 'modules/shared/Heading';
import Swiper from 'components/Swiper/Swiper';
import Card from './components/Card';
import { getDestinationBlogs } from 'helpers/blog';

export default class DestinationBlogs extends Component {
  static propTypes = {
    destinationBlogs: PropTypes.object,
    loaded: PropTypes.bool,
    errors: PropTypes.array,
    trackSegment: PropTypes.func.isRequired,
    fetchDestinationBlogs: PropTypes.func,
    destination: PropTypes.string,
  };

  trackSegmentEvent = (event, cta, object) => {
    this.props.trackSegment({
      event,
      section: 'DestinationBlogs',
      cta,
      object
    });
  };

  componentDidMount() {
    this.fetchDestinationBlogs(this.props);
  }

  fetchDestinationBlogs = (props) => {
    const { fetchDestinationBlogs, destination } = props;
    fetchDestinationBlogs({
      destination: destination
    });
  };

  render() {
    const { destinationBlogs = [], destination, errors } = this.props;
    if (errors && errors.length) {
      return null;
    }

    const blogs = getDestinationBlogs(destinationBlogs);

    return blogs && blogs.length ? (
      <div className="clearfix wfull p15 sbcw mt8">
        <div className="flex spaceBetween relative">
          <div className="flexFull relative">
            <Heading title={`Best Blog about ${destination}`} />
          </div>
        </div>
        <div className="clearfix swiper-full-width">
          <Swiper
            id="thingstodo"
            slideClass="slide"
            spaceBetween={15}
            slidesPerView="auto"
            ssrAnimation={{ width: 276, height: 217 }}
            rebuildOnUpdate
          >
            {
              blogs.map((travelStory, index) => {
                return (
                  <div className="clearfix radius2 relative" key={index}>
                    <Card
                      id={travelStory.id}
                      title={travelStory.title}
                      heading={travelStory.heading}
                      imagekitUrl={
                        travelStory.thumbnailImagePaths.imagekitUrl
                      }
                      thumbnailImagePath={
                        travelStory.thumbnailImagePaths.src
                      }
                      url={travelStory.url}
                      trackSegment={this.trackSegmentEvent}
                      index={index}
                      content={travelStory.content ? travelStory.content.substring(0, 70) : ''}
                    />
                  </div>
                );
              })
            }
          </Swiper>
        </div>
      </div>
    ) : null;
  }
}
