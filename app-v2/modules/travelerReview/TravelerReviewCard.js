import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import AgentRating from '../shared/agentProfile/AgentRating';
import ReviewerDetails from '../shared/packages/ReviewerDetails';

const TravelerReviewBox = styled.div({
  '& .trav-container': {
    border: '1px solid #ccc',
  }
});

const TestimonialText = styled.div({
  whiteSpace: 'normal',
  fontSize: '14px',
  lineHeight: '20px',
  overflow: 'hidden',
  height: '80px',
});

const GTestimonialHeaderDiv = styled.div({
  height: '36px',
  overflow: 'hidden',
});

const TravelerReviewCard = ({ testimonial, isSeasonalCategory }) => (
  <TravelerReviewBox className="traveler-review clearfix at_traveler_reviewcard relative">
    <div className="clearfix border p15 trav-container">
      <GTestimonialHeaderDiv className="flex">
        <h3 className="pfc1 fw9 f14 at_testi_title mr5">{testimonial.title}</h3>
        <AgentRating agentRating={testimonial.rating} id={testimonial.id} />
      </GTestimonialHeaderDiv>
      <div className="clearfix">
        <TestimonialText
          className={`pfc3 at_testi_text rev-text ${isSeasonalCategory ? 'h120' : ''}`}>{testimonial.body || testimonial.review_body}</TestimonialText>
      </div>
      <div className="clearfix container-fluid pt15 author-info">
        <div className="row">
          <div className="col-xs-12">
            <ReviewerDetails author={testimonial.author} postDate={testimonial.last_updated || testimonial.lastUpdated} />
          </div>
          <div className="col-xs-12 pt5 text-right">
            <div className="readmore-btn">
              {(testimonial.allowReadMore === undefined || testimonial.allowReadMore !== false)
                ? <Link to={`/testimonials/${testimonial.id}`} className="f14 fw7 at_readmorebtn">
                  Read More
                </Link>
                : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </TravelerReviewBox>
);

TravelerReviewCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
  isSeasonalCategory: PropTypes.bool.isRequired,
};

export default TravelerReviewCard;
