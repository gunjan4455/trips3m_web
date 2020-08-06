import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TravelerReviewCard from './TravelerReviewNewCard';
import Action from 'amp/helpers/Action';

class TravelerReview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testimonials: this.props.testimonials,
      counter: 5
    };
  }

  render() {
    const {
      pagination,
      destination
    } = this.props;
    const { testimonials, counter } = this.state;
    const firstReviews = testimonials && testimonials.length > 5 ?
      testimonials.slice(0, 5) : testimonials;
    const secondReviews = firstReviews.length ? testimonials.slice(6, testimonials.length) : [];
    const renderFirstTestimonials = firstReviews.map((testimonial, i) => {
      const checkLoadMoreTestimonial = (i >= counter) ? true : false;
      return (
        <TravelerReviewCard
          key={i}
          index={i}
          testimonial={testimonial}
          pagination={pagination}
          hideTestimonial={counter < 15 && pagination && pagination.total_count >= 15 ? checkLoadMoreTestimonial
            : false}
        />);
    });

    const renderSecondTestimonials = secondReviews.map((testimonial, i) => {
      const checkLoadMoreTestimonial = (i >= counter) ? true : false;
      return (
        <div className="hide" data-amp-bind-class="showTestimonials ? '': 'hide'">
          <TravelerReviewCard
            key={i}
            index={i}
            testimonial={testimonial}
            pagination={pagination}
            hideTestimonial={counter < 15 && pagination && pagination.total_count >= 15 ? checkLoadMoreTestimonial
              : false}
          />
        </div>
      );
    });


    if (!testimonials.length) {
      return null;
    }

    const testimonialsLink = destination ?
      `/testimonials/${destination}` : '/testimonials';

    return (
      <div className="slider-overflow-buttons sbcw">
        <div className={renderFirstTestimonials.length ? 'traveler-review' : 'hide'}>
          <div className='pt15 pl15 pr15'>
            <h2 className='f20 pfc3 fwb pb8'>
              {pagination && pagination.total_count ? pagination.total_count : null} Authentic Traveler Reviews
            </h2>
            <p className='f14p pfc4 pb8'>Read on to find out why our customers love us!</p>
          </div>
          {
            renderFirstTestimonials
          }
          {
            renderSecondTestimonials
          }
          <div className="readmore-btn flex justifyCenter pt15 pb15">
            {
              pagination && pagination.total_count && pagination.total_count !== testimonials.length ?
                <Action events={{ tap: ['AMP.setState({showTestimonials : !showTestimonials})'] }}>
                  {(props) => (
                    <button className="f14 sfc1 fw7 link flex alignCenter at_readmorebtn"
                            data-amp-bind-class="showTestimonials ? 'hide' :
                            'f14 sfc1 fw7 link flex alignCenter at_readmorebtn'"
                            {...props}>
                      Load More
                    </button>)}
                </Action> :

                <Link target={'_blank'} to={testimonialsLink} className="hide"
                      data-amp-bind-class="showTestimonials ? 'show':'hide'">
                  View All Reviews
                </Link>
            }
            <Link target={'_blank'} to={testimonialsLink} className="hide"
                  data-amp-bind-class="showTestimonials ? 'show':'hide'">
              View All Reviews
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

TravelerReview.propTypes = {
  testimonials: PropTypes.array,
  pagination: PropTypes.object,
  packageId: PropTypes.number,
  location: PropTypes.object,
  destination: PropTypes.string
};

TravelerReview.defaultProps = {
  testimonials: [],
  uniqueKey: 'traveler-review',
  isSeasonalCategory: false,
  showViewAll: true,
  data: {
    title: 'Traveler Reviews',
    heading: 'Read on to find out why our customers love us!'
  },
  packageId: 0,
  location: {},
  destination: ''
};

export default TravelerReview;
