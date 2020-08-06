import React from 'react';
import PropTypes from 'prop-types';

import TraveloguesCard from './TraveloguesCard';
import { shuffleFY } from './reducer';
import travelogues from './data';
import Swiper from 'modules/shared/Swiper';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class Travelogues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traveloguesData: []
    };
    this.TILES_COUNT = 7;
    this.setInitialTripIdForHomeType = this.setInitialTripIdForHomeType.bind(this);
    this._slideNumber = this._slideNumber.bind(this);
  }

  componentDidMount() {
    this.setInitialTripIdForHomeType();
  }

  setInitialTripIdForHomeType() {
    this.setState(state => ({
      ...state,
      traveloguesData: shuffleFY(travelogues).slice(0, this.TILES_COUNT)
    }));
  }

  _slideNumber() {
    return Math.floor(Math.random() * this.TILES_COUNT);
  }

  trackClickEvent = (heading) => {
    this.props.trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Traveler Reviews',
      object: 'Review Card',
      cta: heading.replace(/ /g,'_')
    });
  };

  render() {
    const selectedContent = this.state.traveloguesData.find(d => d.tripId === this.state.selectedTripId);

    return (
      <div className="at_travelogues">
        <div className="pl24 pr24 at_travelogues_heading">
          <h2 className="f20 fw9 m0 mb8">Over 40 Lac+ Happy Travelers</h2>
          <p className="f14 pfc4 m0 mb24 clearfix">
            Real travelers. Real stories. Real opinions to help you make the right choice. <a className="f14 fw7 at_Travelogues_viewall fright ml15" target="_blank" rel="noopener noreferrer" href="https://traveltriangle.com/blog/travelogues/">View All</a>
          </p>
        </div>
        <Swiper
          ssrAnimation={{ width: 312, height: 240}}
          slideClass="slide"
          spaceBetween={15}
          slidesPerView="auto"
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          id="travelogues">
          {
           this.state.traveloguesData.map((item,i)=> (
             <div key={i}>
              <TraveloguesCard
                trackSegmentEvent={this.trackClickEvent}
                {...item}
              />
             </div>
           )) 
          }
        </Swiper>
      </div>
    );
  }
}


export default Travelogues;

Travelogues.propTypes = {
  trackSegmentEvent: PropTypes.func
};

Travelogues.defaultProps = {
  trackSegmentEvent: () => {}
};
