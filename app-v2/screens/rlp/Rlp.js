import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as fetchTripsData } from 'modules/trip/actions/tripList';
import { updateRequestedTripId } from 'modules/trip/actions/currentTrip';
import { tripsLoaded } from 'modules/trip/reducers/tripList';
import * as rlpReducers from 'modules/rlp/reducer';

export { rlpReducers };
const rlpActions = {
  fetchQuotesData,
  fetchTripsData,
  updateRequestedTripId,
  tripsLoaded
};
export {
  rlpActions
};

class Rlp extends Component {

  static propTypes = {
    fetchTripConstants: PropTypes.func,
    showRoster: PropTypes.func,
    fetchQuotesData: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchTripConstants();
  }

  render() {

    return (
      <Layout {...this.props} />
    );
  }
}

export default Rlp;
