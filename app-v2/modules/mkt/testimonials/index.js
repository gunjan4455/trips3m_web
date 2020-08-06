import { connect } from 'react-redux';

import Testimonials from './Testimonials';

const container = connect(
  state => ({ data: state.mkt.data.testimonials, })
)(Testimonials);

export default {
  container,
  actions: {},
  defaultAction: null,
};
