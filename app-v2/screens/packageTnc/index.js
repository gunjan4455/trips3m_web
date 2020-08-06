import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const TnCAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'package-tnc' */ './PackageTnc'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: () => import('./PackageTnc'),
  },
])(TnCAsync);
