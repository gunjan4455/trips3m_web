import { connect } from 'react-redux';

import Section2 from './Section2';

const container = connect(
  state => ({ data: state.mkt.data.section2, })
)(Section2);

export default {
  container,
  actions: {},
  defaultAction: null,
};
