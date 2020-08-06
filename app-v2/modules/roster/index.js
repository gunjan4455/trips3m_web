import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { showRoster, hideRoster } from './action';
import Roster from './Roster';

export default withRouter(connect(
  state => ({
    type: state.roster.type,
    message: state.roster.message,
    isRosterOpen: state.roster.isRosterOpen,
    allowTimeOut: state.roster.allowTimeOut
  }),
  {
    hideRoster
  }
)(Roster));
