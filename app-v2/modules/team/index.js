import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const Team = Loadable({
  loader: () => import(/* webpackChunkName: 'team' */ './Team'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: () => import('./Team'),
  },
])(Team);
