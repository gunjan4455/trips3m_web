import { connect } from 'react-redux';

import Faq from './Faq';

const container = connect(
  state => ({ data: state.mkt.data.faqs, })
)(Faq);

export default {
  container,
  actions: {},
  defaultAction: null,
};
