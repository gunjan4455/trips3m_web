import { connect } from 'react-redux';

import Section4 from './Section4';

const container = connect(
  state => ({ data: state.mkt.data.section4, })
)(Section4);

export default {
  container,
  actions: {},
  defaultAction: null,
};
