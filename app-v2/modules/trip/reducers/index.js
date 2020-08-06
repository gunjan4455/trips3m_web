import { combineReducers } from 'redux';

import tripList from './tripList';
import tripConstants from './tripConstants';
import currentTrip from './currentTrip';
import preferences from 'modules/preferences/reducer';
import tripActivities from './tripActivities';

export default combineReducers({
  list: tripList,
  constants: tripConstants,
  currentTrip: currentTrip,
  preferences: preferences,
  activities: tripActivities
});
