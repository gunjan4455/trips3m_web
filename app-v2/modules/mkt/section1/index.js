import { connect } from 'react-redux';

import Section1 from './Section1';

const container = connect(
  state => ({ data: state.mkt.data.section1, })
)(Section1);

export default {
  container,
  actions: {},
  defaultAction: null,
};
