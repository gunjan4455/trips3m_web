import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

export default class QdpAsync extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}

QdpAsync.propTypes = {
  location: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  currentQuote: PropTypes.object.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
};
