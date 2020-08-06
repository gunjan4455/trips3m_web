import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reset as resetReduxForms } from 'redux-form';
import Loadable from "react-loadable";

import { results, applyPagination, applyFilters, resetPath } from './reducer';
import { loadMoreCards } from 'modules/placesToVisit/reducer';

const loadablePlacesToVisit = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-ptv' */ './PlacesToVisit'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }),
  dispatch => ({
    applyFilters: params => dispatch(applyFilters(params)),
    applyPagination: params => dispatch(applyPagination(params)),
    resetFilters: values => dispatch(resetReduxForms('cityBlockFiltersList', values)),
    resetPath: url => dispatch(resetPath(url)),
    loadMoreCards: params => dispatch(loadMoreCards(params))
  })
)(loadablePlacesToVisit));

export default container;

