import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { goBack } from 'react-router-redux';
import _get from 'lodash/get';

import CompareQuotes from './CompareQuotes';

export default withRouter(connect(
  state => ({
    quotes: _get(state, 'quote.list.data.quotes', {}),
  }), {
    goBack
  }
)(CompareQuotes));
