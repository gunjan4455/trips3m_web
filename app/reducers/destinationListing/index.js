import { combineReducers } from 'redux';

import filters from './filter';
import destinationListing from './destinations';

export default combineReducers({
  filters,
  destinationListing
});
