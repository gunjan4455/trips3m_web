import Loadable from 'react-loadable';
import { asyncConnect } from 'redux-connect';
import { load } from './actions';

const Mkt = Loadable({
  loader: () => import(/* webpackChunkName: 'mkt' */ './Mkt'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: ({ store: { dispatch }, match: { params: { page } }}) => {
      const TOUR_PACKAGES_URL = 'tour-packages';
      let redirectUrl = TOUR_PACKAGES_URL;

      // Only redirect to tour-packages if page url is not tour-packages. If it's tour-packages then
      // by default it should go to page-not-found page.
      // This redirectUrl will only be used if api sends 404 or breaks, else this is useless.
      if (page === TOUR_PACKAGES_URL) {
        redirectUrl = '';
      }

      if (page.startsWith('rct-')) {
        return dispatch(load(page.substring(4), redirectUrl));
      } else {
        return dispatch(load(page, redirectUrl));
      }
    }
  }
], state => ({ mkt: state.mkt.data }))(Mkt);
