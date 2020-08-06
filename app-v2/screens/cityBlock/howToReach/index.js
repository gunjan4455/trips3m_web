import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// import HowToReachTemplate from './HowToReachTemplate';
// import HowToReachFromTemplate from './HowToReachFromTemplate';
import { results } from './reducer';

const loadableContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'How-to-reach' */ './HowToReach'),
  loading: () => null
});

const container = withRouter(connect(
  state => ({
    data: results(state)
  }))(loadableContainer));

const loadableTemplateContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'How-to-reach-template' */ './HowToReachTemplate'),
  loading: () => null
});

const templateContainer = connect(
  state => ({
    data: results(state)
  }))(loadableTemplateContainer);


const loadableFromContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'How-to-reach-from' */ './HowToReachFromTemplate'),
  loading: () => null
});

const fromTemplateContainer = withRouter(connect(
  state => ({
    data: results(state)
  }))(loadableFromContainer));

export default {
  container,
  templateContainer,
  fromTemplateContainer
};
