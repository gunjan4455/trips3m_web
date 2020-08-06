import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';

import RatingStar from 'modules/shared/RatingStar';
import { timeFromNow } from 'helpers/DateTime';

const parser = new Parser();

const GReviewTextDiv = styled.div({
  height: '50px',
});

const GReadMoreDiv = styled.div({
  height: '18px',
  justifyContent: 'flex-end',
});

class HotelImagesReview extends Component {
  constructor() {
    super();
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }

  handleScrollTo(e) {
    e.preventDefault();
    scroller.scrollTo('testimonials', {
      duration: 600,
      smooth: true,
      offset: -70
    });
  }

  render() {
    const { testimonial } = this.props;
    return(<div className="p15">
      <div className="flex spaceBetween mb8">
        <div className="flexFull">
          <p className="f12 fwb m0 ellipsis">{testimonial.author.authorName}</p>
          <p className="f10 m0 fw4">
            {testimonial.lastUpdated && timeFromNow(testimonial.lastUpdated)}
          </p>
        </div>
        <RatingStar rating={testimonial.rating} />
        </div>
        {
          testimonial.body ?
            <GReviewTextDiv className="dynamicTextInherit overflowh f12">
              {parser.parse(testimonial.body)}
            </GReviewTextDiv> : null
        }
        <GReadMoreDiv className="fleft wfull mt3 flex iblock relative">
          <a href="" className="f12" onClick={this.handleScrollTo}>Read More</a>
        </GReadMoreDiv>
      </div>
    );
  }
}

export default HotelImagesReview;

HotelImagesReview.propTypes = {
  testimonial: PropTypes.object.isRequired
};
