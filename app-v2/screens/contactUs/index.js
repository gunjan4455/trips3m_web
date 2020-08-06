import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const ContactUs = Loadable({
  loader: () => import(/* webpackChunkName: 'contact-us' */ './ContactUs'),
  loading: () => null
});

export default asyncConnect([{
  promise: () => import('./ContactUs')
}],
)(ContactUs);
