import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import RequestCallback from './RequestCallback';
import { getRequestCallbackReasons } from 'modules/quote/reducers/constants';
import { getTripId, getCurrentQuoteId } from "modules/quote/reducers/quoteActivities";
import { getRequestCallbackSuccess } from "./reducer";
import {
  requestCallback as requestCallbackConfirm,
} from 'modules/requestCallback/action';
import { showRoster } from "modules/roster/action";

export default withRouter(
  connect(
    state => ({
      requestCallbackReasons: getRequestCallbackReasons(state),
      tripId: getTripId(state),
      quoteId: getCurrentQuoteId(state),
      successMessage: getRequestCallbackSuccess(state)
    }), {
      requestCallbackConfirm,
      showRoster
    }
  )(RequestCallback)
);
