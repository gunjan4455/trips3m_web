import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as formReducer } from 'redux-form';
import listing from './listing/index';
import home from './home';
import destinationListing from './destinationListing';
import auth from './auth';
import formOneLead from './formOneLead';
import slider from './leadForm/index';
import formTwoLead from './formTwoLead';
import packages from './packages';
import search from './search';
import destinationDetail from './destinationDetail';
import requestCallBack from './requestCallBack';
import forgotPassword from './forgotPassword';
import blogs from './blogs';
import breadcrumbs from './breadcrumbs';
import citySearch from './citySearch';
// import banner from './animatedBanner';
import comparePackages from './comparePackages';
import welcomeCarousel from './welcomeCarousel';
import leadFormData from 'containers/FormOneLead/reducer';

export default {
  comparePackages,
  routing: routerReducer,
  reduxAsyncConnect,
  form: formReducer,
  search,
  listing,
  home,
  formOneLead,
  formTwoLead,
  destinationListing,
  auth,
  packages,
  destinationDetail,
  requestCallBack,
  forgotPassword,
  blogs,
  breadcrumbs,
  citySearch,
  // banner,
  slider,
  welcomeCarousel,
  leadFormData
};
