import { combineReducers } from 'redux';

import packages from './packages';
import filters from './filters';
import filterCounts from './filterCounts';
import seoFooter from './seoFooter';

export default combineReducers({
  packages,
  filters,
  filterCounts,
  seoFooter
});
