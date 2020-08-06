import { combineReducers } from 'redux';

import jobDescription from './jobDescription/reducer';
import apply from 'screens/career/reducer';

export default combineReducers({
  jobDescription,
  apply
});
