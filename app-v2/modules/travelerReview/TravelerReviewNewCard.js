import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import AgentRating from '../shared/agentProfile/AgentRating';
import {
  getTravelerReviewTravCount,
  getTravelerReviewDate,
  getTravelerReviewDuration,
  getTravelerReviewCities
} from 'helpers/utils';
import ShowMore from 'modules/shared/ShowMore';

const GDownArrowSpan = styled.span({ 
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

const TravelerReviewNewCard = ({ testimonial, hideTestimonial }) => {
  const reviewBody = testimonial.body || testimonial.review_body;
  return (
    <div className={`bb pb15  pt15 pl15 pr15 ${hideTestimonial ? 'hide' : 'show'}`}>
      <AgentRating agentRating={testimonial.rating} id={testimonial.id} />
      <h3 className='f16 pfc3 fwb pb15  pt8'>{testimonial.title}</h3>
      {
        reviewBody ?
          <p className='f14p pfc3 pb8'>
            <ShowMore
              wrapText={reviewBody.substring(0, 150)}
              moreText={reviewBody.substring(150)}
              showMoreText="Read More"
              showLessText="Read Less"
            />
          </p> : null
      }
      <div className='pt8'>
        <div className='flex alignCenter pb8'>
          <p className='f14 fwb pfc3'>
            {testimonial.author.author_name || testimonial.author.authorName}
            <span
              className='f12 pfc4 fw4 pl8'>  {testimonial.author.user_location || testimonial.author.userLocation}</span>
          </p>
        </div>
        {
          testimonial.quote && <p className='f12 fitalic pfc3'>
            {`Travelled ${getTravelerReviewCities(testimonial.quote.cities)} ${getTravelerReviewDate(testimonial.quote.start_date)}
          ${getTravelerReviewTravCount(testimonial.quote.adult, testimonial.quote.child)} ${getTravelerReviewDuration(testimonial.quote.days)}`}
          </p>
        }
      </div>
    </div>
  );
};

TravelerReviewNewCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
  hideTestimonial: PropTypes.bool
};

export default TravelerReviewNewCard;
