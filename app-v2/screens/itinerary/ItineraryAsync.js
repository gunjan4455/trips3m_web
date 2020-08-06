import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

export default class ItineraryAsync extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}

ItineraryAsync.propTypes = {
  layout: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  currentQuote: PropTypes.object.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
};
