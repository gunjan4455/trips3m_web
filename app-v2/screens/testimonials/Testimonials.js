import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import TravelerReview from 'modules/travelerReview/TravelerReview';
import RatingBar from 'modules/testimonials/RatingBar';
import HeaderHome from 'modules/header/HeaderHome';
import Footer from 'modules/shared/Footer';
import ReviewCard from 'modules/testimonials/ReviewCard';
import Banner from 'modules/testimonials/Banner';
import DestinationAndFilters from 'modules/testimonials/DestinationAndFilters';
import LoadMorePackages from 'modules/shared/loadMorePackages';
import Breadcrumb from 'modules/shared/Breadcrumb';
import PopularPackages from 'modules/packages/popular/index';
import TravelerStories from 'modules/travellerStory';
import { createHelmet } from 'helpers/seoHelpers';
import { testimonialsFilter } from './reducer';
import { useQuery } from 'containers/Listing/parseFilters';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.pageNumber = 1;
  }

  loadMoreCards = () => {
    const query = useQuery(this.props.location.search);
    this.pageNumber += 1;
    this.props.loadCards(
      this.props.match.params.destination,
      testimonialsFilter(query, 'query').filters,
      this.pageNumber,
    );
  };

  render() {
    const { data, location, history, packages, match: { params }} = this.props;
    const {
      bannerImage, totalRating, positiveRating, overall, topTestimonials,
      filters, testimonials, htmlTags, breadcrumbs
    } = data;

    topTestimonials.map(testimonial => testimonial.allowReadMore = false);

    const overallRatting = {
      'Excellent': overall.excellent || 0,
      'Very Good': overall.veryGood || 0,
      'Good': overall.good || 0,
      'Poor': overall.poor || 0,
      'Bad': overall.bad || 0
    };

    const totalReview = overallRatting.Excellent + overallRatting['Very Good'] +
      overallRatting.Good + overallRatting.Poor + overallRatting.Bad;
    const query = useQuery(location.search);
    return (
      <div className="sbc5">
        <Helmet>
          <meta charSet="utf-8" />
          {createHelmet(htmlTags, '', location.pathname)}
        </Helmet>
        <div className='absolute t0 l0 r0 z5'>
          <HeaderHome isTransparent={true} />
        </div>
        <div className='relative mb8'>
          <Banner positiveRating={positiveRating} bannerPath={bannerImage.src} totalRating={totalReview}
                bannerAlt={bannerImage.title} />
        </div>
        <div className='p24 sbcw mb8'>
          <RatingBar reviewNumbers={overallRatting} totalReviews={totalReview} />
        </div>
        <DestinationAndFilters
          filters={filters} location={location} updateUrl={history.push}
          totalRating={totalRating} breadcrumbs={breadcrumbs}
          testimonialDisplay={testimonials.length}
          params={params}
        />
        <div className='sbcw mb8'>
          <ReviewCard testimonials={testimonials} params={params} location={location} />
        </div>
        <div className="row row- mb8">
          <LoadMorePackages
            packagesRemaining={totalRating - testimonials.length}
            loadMorePackages={this.loadMoreCards}
            currentPage={query.page && query.page || 1}
            title={`packages remaining)`}
          />
        </div>

        {
          packages && packages.length ?
            <div className="container">
              <div className="row" id="packages-sec">
                <PopularPackages.container
                  title={'Plan For Your Next Holiday'}
                  heading={'Browse Packages, Choose Your Next Destination'}
                />
              </div>
            </div> : null
        }
        <div className='mb8 overflowh pl15 pr15 '>
          <div className='row'>
            <TravelerStories.container
              spacingCss={{ marginBottom: '48px' }}
              config={{ csr: true }}
              viewAll='/blog/travelogues?referer=travelogue_testimonial'
            />
          </div>
        </div>
        <div className="p8 pt0">
          <Breadcrumb breadcrumbs={breadcrumbs} />
        </div>
        <Footer />
      </div>
    );
  }
}

Testimonials.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadCards: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  packages: PropTypes.array
};

export default Testimonials;
