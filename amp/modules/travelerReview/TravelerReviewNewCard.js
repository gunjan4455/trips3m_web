import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';

import Action from 'amp/helpers/Action';
import AgentRating from 'amp/modules/common/AgentRating';
import {
  getTravelerReviewTravCount,
  getTravelerReviewDate,
  getTravelerReviewDuration,
  getTravelerReviewCities
} from 'amp/helpers/utils';

const GDownArrowSpan = styled.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

const parser = new Parser();

const TravelerReviewNewCard = ({ testimonial, hideTestimonial, index }) => {
  const reviewBody = testimonial.body || testimonial.review_body;
  return (
    <div className={`${index} > showCounter ? bb pb15  pt15 pl15 pr15 ${hideTestimonial ? 'hide' : 'show'}`}>
      <AgentRating agentRating={testimonial.rating} id={testimonial.id} />
      <h3 className='f16 pfc3 fwb pb15  pt8'>{testimonial.title}</h3>
      {
        reviewBody ?
          <div className="pb8">
            <p className="readMoreContent f14p pfc3 block relative readMoreByHeight"
               data-amp-bind-class={`expanded${index} ? 'readMoreContent block relative pt8': 'readMoreContent block relative pt8 readMoreByHeight'`}>
            <span className="block dynamicTextInherit pfc3 f14p">
              {parser.parse(reviewBody)}
            </span>
            </p>
            <Action events={{ tap: [`AMP.setState({expanded${index}:!expanded${index}})`] }}>
              {(props) => (
                <div className="row row- right-align">
                  <button {...props}>
                    <div className="readMore-dropdown relative pr15 readMore cursorP flex alignCenter spaceBetween mt8 f12 fw9">
                      <span data-amp-bind-text={`expanded${index} ?'Read Less':' Read More'`}>Read More</span>
                      <span className={`expanded${index} ? 'rotate180 downArrow relative block' :
            'rotate0 downArrow relative block`}
                            data-amp-bind-class={`expanded${index} ? 'rotate180 downArrow relative block' :
                  'rotate0 downArrow relative block'`}
                      >
              {/*<BlueDownArrow />*/}
               </span>
                    </div>

                  </button>
                </div>
              )}
            </Action>
          </div> : null
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
  hideTestimonial: PropTypes.bool,
  index: PropTypes.number
};

export default TravelerReviewNewCard;
