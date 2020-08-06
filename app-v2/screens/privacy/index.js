import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const PrivacyAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'privacy' */ './PrivacyAsync'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: () => import('./PrivacyAsync'),
  },
])(PrivacyAsync);
