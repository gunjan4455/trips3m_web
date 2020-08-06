import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';

import TestimonialsUser from './TestimonialsUser';
import TestimonialsCard from './TestimonialsCard';
import { parseDestinationId } from 'screens/testimonials/reducer';
import 'theme/testimonial.scss';

class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: -1
    };
  }

  scrollPage = (props) => {
    const id = parseDestinationId(props.params.destination);

    if (isNaN(id)) {
      this.setState({ activeItem: -1 });
    } else {
      this.setState({ activeItem: id }, () => {
        scroller.scrollTo(`${id}`, {
          duration: 1000,
          smooth: true,
          offset: -60
        });
      });
    }
  };



  componentDidMount() {
    this.scrollPage(this.props);
  }

  render() {
    const { testimonials, params, location } = this.props;
    return (
      <div className="review-card-container">
        {
          testimonials.map(review => (
            <div
              key={review.id} id={`${review.id}`}
              className={`user-testimonial-card sbcw p15 bb mb1 ${this.state.activeItem === review.id ? ' active' : ''}`}
            >
              <TestimonialsCard
                rating={review.rating}
                testimonialBody={review.body}
                title={review.title}
                id={review.id}
                destination={review.destination}
                params={params}
                location={location}
              />
              <div className='mt8 pr64 mr24'>
                <TestimonialsUser
                  author={review.author}
                  lastUpdated={review.lastUpdated}
                />
              </div>

              {
                Object.keys(review.agentComment).length ?
                  <div className="sbc5 p15 mt15 testimonial-comment radius2 relative">
                    <div className="fw7 pfc1 f16 m0 mr8 mb8 _title iblock">Response from the agent</div>
                    <div className="f14 pfc3">{review.agentComment.body}</div>
                    <div className="f16 pfc3 fw9 at_agentComment">
                      {review.agentComment.title}
                    </div>
                  </div> : null
              }
            </div>
          ))
        }
      </div>
    );
  }
}

ReviewCard.propTypes = {
  testimonials: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default ReviewCard;

