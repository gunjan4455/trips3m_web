import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reset as resetReduxForms } from 'redux-form';
import Loadable from "react-loadable";

import { results, applyPagination, applyFilters } from './reducer';
import { loadMoreThingsToDoCards } from 'modules/thingsToDo/reducer';

const loadableThingsToDo = Loadable({
  loader: () => import(/* webpackChunkName: 'city-block-ttd' */ './ThingsToDo'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }),
  dispatch => ({
    applyPagination: params => dispatch(applyPagination(params)),
    applyFilters: params => dispatch(applyFilters(params)),
    resetFilters: values => dispatch(resetReduxForms('cityBlockFiltersList', values)),
    loadMoreThingsToDoCards: params => dispatch(loadMoreThingsToDoCards(params))
  })
)(loadableThingsToDo));

export default container;
