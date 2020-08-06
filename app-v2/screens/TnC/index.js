import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const TnCAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'tnc' */ './TnCAsync'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: () => import('./TnCAsync'),
  },
])(TnCAsync);
