import { combineReducers } from 'redux';

import quoteList from './quoteList';
import quoteActivities from './quoteActivities';
import quoteConstants from './constants';
import pdmReducer from 'modules/pdm/reducer';
import quoteComments from './quoteComments';

export default combineReducers({
  list: quoteList,
  actions: quoteActivities,
  constants: quoteConstants,
  pdms: pdmReducer,
  comments: quoteComments
});
