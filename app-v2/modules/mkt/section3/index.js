import { connect } from 'react-redux';

import Section3 from './Section3';

const container = connect(
  state => ({ data: state.mkt.data.section3, })
)(Section3);

export default {
  container,
  actions: {},
  defaultAction: null,
};
