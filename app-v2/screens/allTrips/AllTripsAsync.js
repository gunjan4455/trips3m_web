import React, { Component } from 'react';

import Layout from './Layout';
import * as rlpReducers from 'modules/rlp/reducer';
import { load as fetchTripsData } from 'modules/trip/actions/tripList';
import { tripsLoaded } from 'modules/trip/reducers/tripList';

const tripAction = {
  fetchTripsData,
  tripsLoaded
};

export { tripAction, rlpReducers };

const AllTripsAsync = () => (
  <Layout />
);

AllTripsAsync.propTypes = {};

export default AllTripsAsync;
