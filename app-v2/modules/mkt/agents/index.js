import { connect } from 'react-redux';

import Agents from './Agents';

const container = connect(
  state => ({ data: state.mkt.data.agents, })
)(Agents);

export default {
  container,
  actions: {},
  defaultAction: null,
};
