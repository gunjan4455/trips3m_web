import { connect } from 'react-redux';

import Conclusion from './Conclusion';

const container = connect(
  state => ({ data: state.mkt.data.conclusion, })
)(Conclusion);

export default {
  container,
  actions: {},
  defaultAction: null,
};
