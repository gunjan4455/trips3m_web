import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import TravelerReviewCard from './TravelerReviewNewCard';
import { BlueDownArrow } from 'helpers/Icon/Icon';

const GDownArrowSpan = styled.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

class TravelerReview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testimonials: this.props.testimonials,
      counter: 5
    };
  }

  loadMore = () => {
    const { counter } = this.state;
    if(counter < 15)
    {
      this.setState(prevState => {
        return { counter: prevState.counter + 5 };
      });
    }
    else{
      const { pagination: { page }, packageId, baseUrl } = this.props;
      const pageNo = parseInt(page);
      const queryParams = {
        page: pageNo === 1 ? 4 : pageNo + 1,
        per_page: 5,
        base_url: baseUrl
      };
      this.props.loadMore({ id: packageId, queryParams });
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { location, packageId } = this.props;
    const { testimonials } = this.state;

    if (testimonials.length !== nextProps.testimonials.length &&
      location.pathname === nextProps.location.pathname && packageId === nextProps.packageId) {
      this.setState({ testimonials: [...testimonials, ...nextProps.testimonials] });
    } else {
      this.setState({ testimonials: nextProps.testimonials });
    }
  }

  render() {
    const {
      pagination,
      destination
    } = this.props;
    const { testimonials, counter } = this.state;

    const rendertestimonials = testimonials.map((testimonial , i) =>
    {
      const checkLoadMoreTestimonial =  (i >= counter) ? true : false;
      return (
        <TravelerReviewCard
          key={i}
          testimonial={testimonial}
          pagination={pagination}
          hideTestimonial={counter < 15 && pagination && pagination.total_count >= 15 ? checkLoadMoreTestimonial
            : false}
        />);
    });


    if (!testimonials.length) {
      return null;
    }

    const testimonialsLink = destination  ?
      `/testimonials/${destination}` : '/testimonials';

    return (
      <div className="slider-overflow-buttons sbcw">
        <div className="traveler-review">
          <div className='pt15 pl15 pr15'>
            <h2 className='f20 pfc3 fwb pb8'>
              {pagination && pagination.total_count ? pagination.total_count : null} Authentic Traveler Reviews
            </h2>
            <p className='f14p pfc4 pb8'>Read on to find out why our customers love us!</p>
          </div>
          {
           rendertestimonials
          }

          <div className="readmore-btn flex justifyCenter pt15 pb15">
            {
              pagination && pagination.total_count && pagination.total_count !== testimonials.length ?
                <button className="f14 sfc1 fw7 flex alignCenter at_readmorebtn" onClick={this.loadMore}>
                  Load More
                  <GDownArrowSpan className="flex ml8 relative alignCenter justifyCenter">
                    <BlueDownArrow /></GDownArrowSpan>
                </button> :

                <Link target={'_blank'} to={testimonialsLink}>
                  <button className="f14 sfc1 fw7 flex alignCenter at_readmorebtn">
                    View All Reviews
                  </button>
                </Link>

            }
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
  loadMore: PropTypes.func,
  location: PropTypes.object,
  destination: PropTypes.string,
  baseUrl: PropTypes.string
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
  loadMore: () => {
  },
  location: {},
  destination: '',
  baseUrl: ''
};

export default TravelerReview;
