import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OverAllRating from 'modules/shared/OverAllRating';
import ExpertsReview from 'modules/shared/ExpertsReview';
import Heading from "modules/shared/Heading";

class HotelReview extends Component {
  constructor() {
    super();
    this.state = {
      offset: 2
    };
  }
  render() {
    const {testimonials, userRating, testimonialChangeHandler, hotelDisplayName} = this.props;
    const {totalEntries, testimonialList, currentPage, hasMore} = testimonials;
    return (
      <div className="clearfix">
        <div className="flex alignCenter mb15 spaceBetween">
          <Heading title={testimonials.title} heading={testimonials.heading} data={{forHeading:hotelDisplayName}}/>
          <div className="iblock hide">
            {
              userRating && userRating.length ? <OverAllRating customStyleRating={{fontSize: '16px', fontWeight: '400'}} isLarge isAlignedLeft overallRating={userRating}/> : null
            }
          </div>
        </div>
        {
          testimonialList && testimonialList.length ? <ExpertsReview expertReviews={testimonialList[0]} /> : null
        }

      </div>
    );
  }
}

HotelReview.propTypes = {
  testimonials: PropTypes.object.isRequired,
  userRating: PropTypes.object,
  testimonialChangeHandler: PropTypes.func.isRequired,
  hotelDisplayName: PropTypes.string
};

HotelReview.defaultProps = {
  userRating: {}
};

export default HotelReview;

