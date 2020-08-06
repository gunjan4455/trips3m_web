import React from 'react';
import PropTypes from 'prop-types';
import TestimonialsData from './TestimonialsData';
import TestimonialsUser from './TestimonialsUser';

import { GTestimonialDiv } from './G';
import RatingStar from "../RatingStar";


const TestimonialsItem = ({ testimonial }) => (
  <GTestimonialDiv className="row p15">
    <div className="flex spaceBetween">
    <div className="flexFull">
      <TestimonialsUser author={testimonial.author} time={testimonial.lastUpdated} />
    </div>
    <div className="ml8">
      { testimonial.rating > 0 ? <RatingStar rating={testimonial.rating} /> : null }
    </div>
    </div>
    <TestimonialsData content={testimonial.body} />
  </GTestimonialDiv>
);

TestimonialsItem.propTypes = {
  testimonial: PropTypes.object.isRequired
};

const ReviewCard = ({ testimonials }) => (
  <div>
    {
      testimonials.map((testimonial, index) =>
        <TestimonialsItem key={index} testimonial={testimonial}/>
      )
    }
  </div>
);

ReviewCard.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default ReviewCard;
