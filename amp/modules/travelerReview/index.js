import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import { fetchPdpTestimonials } from './action';
import TravelerReview from './TravelerReview';

const container = withRouter(connect(
  state => ({
    testimonials: _get(state, 'travelerReviews.testimonials'),
    pagination: _get(state, 'travelerReviews.pagination'),
    packageId: _get(state, 'packages.details.data.data.seo_packages.id')
  }),
  dispatch => ({
    loadMore: params => dispatch(fetchPdpTestimonials(params))
  }))(TravelerReview));

export default {
  container,
};
