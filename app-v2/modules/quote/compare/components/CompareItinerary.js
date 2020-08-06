import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BlueDownArrow } from 'app/helpers/Icon/Icon';
import { GCompareCardContentDiv, GItineraryTimeLineDiv, GCardViewActionDiv } from '../G';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class CompareItinerary extends Component {
  state = {
    showMore: false,
    text: 'View More'
  };

  showAndHideItinerary = () => {
    this.props.trackSegment({
      event: ORGANISM_CLICKED,
      section: 'Itinerary',
      cta: this.state.showMore ? 'View Less' : 'View More',
      miscId1: Object.keys(this.props.quotes).join('::'),
      miscType1: 'quote_id_left::quote_id_right'
    });

    if (this.state.showMore) {
      this.setState({ showMore: !this.state.showMore, text: 'View More' });
    } else {
      this.setState({ showMore: !this.state.showMore, text: 'View Less' });
    }
  };

  renderQuoteItinerary = (quote, isViewMore) => {
    let tripDays = quote.newFormatTripDays;
    if (isViewMore && !this.state.showMore) {
      tripDays = tripDays.slice(0, 5);
    }

    return tripDays.map((dayItinerary, idx) => {
      const dayInfoIndex = Object.keys(dayItinerary).find(d => dayItinerary[d].sectionType === 'itinerary');

      return <GItineraryTimeLineDiv key={idx}>
        <h3 className="f14 pfc2">{`Day ${idx + 1}`}</h3>
        <p className="f14p pfc3 m0 mt8">
          {dayItinerary[dayInfoIndex] && dayItinerary[dayInfoIndex].title}
        </p>
      </GItineraryTimeLineDiv>;
    });
  };

  render() {
    const { quotes } = this.props;
    let isViewMore = false;

    return (
      <div>
        <GCompareCardContentDiv className="flex at_compareCardContent">
          {
            Object.keys(quotes).map((id) => {
              const quote = quotes[id];
              if (quote.newFormatTripDays.length > 5) {
                isViewMore = true;
              }

              return (
                <div className="flexFull p15" key={`itinerary_${id}`}>
                  {this.renderQuoteItinerary(quote, isViewMore)}
                </div>);
            })
          }
        </GCompareCardContentDiv>
        {
          isViewMore
            ? <GCardViewActionDiv className="clearfix">
              <button
                className={`f14 fw7 sfc1 mr15 mb15 fright flex alignCenter at_qcp_viewMore ${this.state.showMore ? 'cardViewLess' : ''}`}
                onClick={this.showAndHideItinerary}>
                {this.state.text}
                <span className="relative iblock icon-14 ml8">
                    <BlueDownArrow />
                  </span>
              </button>
            </GCardViewActionDiv>
            : null
        }
      </div>
    );
  }
}

CompareItinerary.propTypes = {
  quotes: PropTypes.object.isRequired,
  trackSegment: PropTypes.func.isRequired
};

export default CompareItinerary;
