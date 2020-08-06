import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swiper from 'components/Swiper/Swiper';
import Card from './components/Card';
import Heading from 'modules/shared/Heading';

export default class TravellerStory extends Component {
  static propTypes = {
    travellerStories: PropTypes.array,
    config: PropTypes.object,
    loaded: PropTypes.bool,
    errors: PropTypes.array,
    trackSegmentEvent: PropTypes.func,
    fetchTravellerStories: PropTypes.func,
    data: PropTypes.object,
    spacingCss: PropTypes.object,
    subHeading: PropTypes.string,
    heading: PropTypes.string,
    destination: PropTypes.string,
    viewAll: PropTypes.string,
    from: PropTypes.oneOf(['blog', 'search']).isRequired
  };

  static defaultProps = {
    config: {
      variant: 'FULL',
      order: 10
    },
    trackSegmentEvent: () => {
    },
    spacingCss: {},
    heading: 'Read Our Interesting Traveler Stories',
    subHeading: 'They traveled. They experienced. They shared.',
    viewAll: '/blog/travelogues?referer=travelogue_rlp'
  };

  trackSegment = (cta, cardId, miscType1, miscId1) => {
    this.props.trackSegmentEvent({
      cta,
      object: cardId ? `Traveler stories/${cardId}` : 'Traveler stories',
      miscType1,
      miscId1
    });
  };

  componentDidMount() {
    this.fetchTravellerStories(this.props);
  }

  fetchTravellerStories = (props) => {
    const { config, fetchTravellerStories, destination } = props;
    if (config && config.csr) {
      fetchTravellerStories({
        destination: destination,
      });
    }
  };

  render() {
    const { travellerStories = [], viewAll, errors, data, from } = this.props;
    if (errors && errors.length) {
      return null;
    }

    return travellerStories && travellerStories.length ? (
      <div className="clearfix wfull p15 sbcw">
        <div className="flex spaceBetween relative">
          {data && data.title ? (
            <div className="flexFull relative">
              <Heading data={data} />
              {viewAll && (
                <Link
                  to={viewAll}
                  className="absolute t2 r0 iblock f14 fw7"
                >
                  View All
                </Link>
              )}
            </div>
          ) : (
            <div className="flexFull mb15">
              <h6 className="f16 m0 pfc3 fw7 pr64">
                {this.props.heading}
                {viewAll && (
                  <Link
                    to={viewAll}
                    className="absolute t2 r0 iblock f14 fw7"
                  >
                    View All
                  </Link>
                )}
              </h6>
              <p className="f14 m0 mt4 pfc4">{this.props.subHeading}</p>
            </div>
          )}
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
              /* This is a shared file used from app-v2/screens/search/travellerStories/index.js (search) and
               * app-v2/modules/travellerStory/index.js (blog). Each of them sends different type of data for the
               * travellerStories prop. Both files in addition also sends a *from* prop that accepts if
               * this is used from *search* or *blog*. To see what kind of data each file sends check
               * app-v2/screens/search/Search.js (former search file) and
               * app-v2/modules/travellerStory/reducer.js (later blog file).
               *
               * This is the reason we are checking if what type of image property to use to send
               * to the Card component.
               * */
              travellerStories && travellerStories.map((travelStory, index) => {
                return (
                  <div className="clearfix radius2 relative" key={index}>
                    <Card
                      id={travelStory.id}
                      title={travelStory.title}
                      imagekitUrl={
                        from === 'search' ?
                          travelStory.imagekitUrl :
                          travelStory.thumbnailImagePaths.imagekitUrl
                      }
                      thumbnailImagePath={
                        from === 'search' ?
                          travelStory.thumbnailImagePath :
                          travelStory.thumbnailImagePaths.src
                      }
                      url={travelStory.url}
                      trackSegment={this.trackSegment}
                      index={index}
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
