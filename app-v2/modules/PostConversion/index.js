
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import PostConversion from './PostConversion';
import { getInvoiceStatus, fetchPostConversionData } from './action';
import { showRoster } from 'modules/roster/action';

const container = withRouter(connect(
  state => ({
    quotes: _get(state, 'quote.list.data.quotes', {}),
    postConversionData: _get(state, 'postConversion.data'),
    currentQuoteId: _get(state, 'quote.actions.currentQuoteId', 0),
  }),
  {
    getInvoiceStatus,
    fetchPostConversionData,
    showRoster
  }
)(PostConversion));

export default {
  container,
  actions: {},
};
