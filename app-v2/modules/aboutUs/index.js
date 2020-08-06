import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const AboutUs = Loadable({
  loader: () => import(/* webpackChunkName: 'aboutus' */ './AboutUs'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: () => import('./AboutUs'),
  },
])(AboutUs);
