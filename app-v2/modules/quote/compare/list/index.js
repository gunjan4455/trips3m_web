import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { goBack } from 'react-router-redux';
import _get from 'lodash/get';

import { showRoster } from 'modules/roster/action';
import QuoteList from './QuoteList';

export default withRouter(connect(
  state => ({
    quotes: _get(state, 'quote.list.data.quotes', {}),
  }), {
    showRoster,
    goBack
  }
)(QuoteList));
