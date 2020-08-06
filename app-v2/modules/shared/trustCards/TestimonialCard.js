import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import Swiper from 'components/Swiper/Swiper';

import styles from './closureReview.cm.scss';

const parser = new Parser();


const testimonialSection = ({ authorName, authorLocation, text }) => (
  <div className={`radius6 p15 sbc5 ${styles.reviewCard}`}>
    <p className={`f12 mb15 ${styles.content}`}>{parser.parse(text)}</p>
    <div className="flex alignCenter">
      <div className={ `mr15 radius100 overflowh relative text-uppercase text-center sfcw fw7 ${styles.image}`}>
        <p className='absolute-center f16'>{authorName ? authorName[0] : null}</p>
      </div>
      <div>
        <p className="fw9 mb2">{authorName}</p>
        <p className={`f12 ${styles.location}`}>{authorLocation}</p>
      </div>
    </div>
  </div>
);

testimonialSection.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorLocation: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

class TestimonialCard extends PureComponent {
  render() {
    const { testimonials, id } = this.props;
    if (!testimonials.length) {
      return null;
    }
    return (
      <div className={`pt15 pb15 sbcw radius6 ${testimonials.length === 1 ? 'pr15 pl15' : 'pr0'}`}>
        <h2 className="fw9 f16a mb15 pr15 pl15">What Our Travelers Said</h2>
        {testimonials.length === 1 ?
          testimonialSection(testimonials[0])
          :
          <Swiper
            slideClass="slide"
            spaceBetween={8}
            slidesPerView="auto"
            ssrAnimation={{ width: 395, height: 100 }}
            rebuildOnUpdate
            slidesOffsetBefore={15}
            slidesOffsetAfter={8}
            id={id}
          >
            {testimonials.map((testimonial) => testimonialSection(testimonial))}
          </Swiper>
        }
      </div>
    );
  }
}

TestimonialCard.propTypes = {
  testimonials: PropTypes.array,
  id: PropTypes.string
};

TestimonialCard.defaultProps = {
  testimonials: [],
  id: 'testimonial'
};

export default TestimonialCard;
