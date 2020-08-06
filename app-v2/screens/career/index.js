import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import { load as jobApply } from 'screens/career/action';
import { load } from 'modules/shared/trialist/jobDescription/action';

const CareerAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'career' */ './CareerAsync'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: () => import('./CareerAsync'),
    },
    {
      promise: ({ store: { dispatch } }) => dispatch(load())
    },
  ],
  state => ({
    jobDescription: _get(state, 'career.jobDescription.data', {}),
    loaded: _get(state, 'career.jobDescription.loaded', false),
  }),
  {
    jobApply
  }
)(CareerAsync);
