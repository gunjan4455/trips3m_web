import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import packages from './packages';
import topNavigation from 'amp/modules/header/reducer';
import travelerReviews from 'modules/travelerReview/reducer';

export default {
  routing: routerReducer,
  reduxAsyncConnect,
  topNavigation,
  packages,
  travelerReviews
};
