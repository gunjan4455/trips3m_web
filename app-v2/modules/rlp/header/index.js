import React from 'react';
import { connect } from 'react-redux';

import { reactivateBooking } from 'modules/trip/actions/tripActivities';
import Header from './Header';

export default connect(
  null, {
    reactivateBooking
  }
)(Header);
