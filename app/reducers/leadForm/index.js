import { combineReducers } from 'redux';

import sliderQuestions from './sliderQuestions';
import formOneLead from '../formOneLead';
import common from './common';

export default combineReducers({
  sliderQuestions,
  formOneLead,
  common
});
