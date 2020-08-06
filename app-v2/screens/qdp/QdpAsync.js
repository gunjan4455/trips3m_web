import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import { useQuery } from 'containers/Listing/parseFilters';

export default class QdpAsync extends Component {
  constructor(props) {
    super(props);

    if (!props.quotes.hasOwnProperty(props.currentQuoteId)) {
      throw new Error('404');
    }
  }

  componentDidMount() {
    this.updateQuoteStatus(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.currentQuoteId !== nextProps.currentQuoteId) {
      this.updateQuoteStatus(nextProps);
    }
  }

  updateQuoteStatus = (props) => {
    const query = useQuery(props.location.search);
    const source = query.from_tt_mailer || '0';

    props.updateQuoteStats({ tripId: props.tripId, quoteId: props.currentQuoteId, source });
  };

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}

QdpAsync.propTypes = {
  layout: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  quotes: PropTypes.object.isRequired,
  quoteTimeRemaining: PropTypes.number.isRequired,
  currentQuote: PropTypes.object.isRequired,
  currentQuoteId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  updateQuoteStats: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired
};
