import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import { fetchCityBlockTestimonials, fetchPdpTestimonials } from './action';

import TravelerReview from './TravelerReview';

const container = withRouter(connect(
  state => ({
    testimonials: _get(state, 'travelerReviews.testimonials'),
    pagination: _get(state, 'travelerReviews.pagination'),
    packageId: _get(state, 'packages.details.data.data.seo_packages.id'),
    baseUrl: _get(state, 'packages.details.data.data.seo_packages.set_url')
  }),
  dispatch => ({
    loadMore: params => dispatch(fetchPdpTestimonials(params))
  }))(TravelerReview));


const plpContainer = withRouter(connect(
  state => ({
    testimonials: state.listing.packages.testimonials,
  }))(TravelerReview));



/**
 * Sidebar Section
 */
export default {
  container,
  plpContainer,
  actions: {
    fetchCityBlockTestimonials
  },
  defaultAction: fetchCityBlockTestimonials
};
