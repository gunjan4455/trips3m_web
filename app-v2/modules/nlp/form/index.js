import { connect } from 'react-redux';

import NlpForm from './Form';

const container = connect(
  state => ({
    preference: state.nlp.preference,
    matchingPreferences: state.nlp.matchingPreferences,
    rtripData: state.nlp.rtripData
  }))(NlpForm);

export default container;
