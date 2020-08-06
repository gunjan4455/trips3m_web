import React from 'react';
import PropTypes from 'prop-types';

import CancelRequest from './CancelRequest';
import {
  cancelRequestReasons,
  notGoigOpt,
  goingNotTTOpt
} from './constants';

const formSubmitHelper = values => {
  const params = {
    cancel_reason: values.cancel_reason
  };
  if (values.cancel_reason === cancelRequestReasons[0]) {
    params.reason = values.reason0;
    if (
      values.reason0 === notGoigOpt[0] ||
      values.reason0 === notGoigOpt[0]
    ) {
      params.reason = 'Canceled';
    } else if (
      values.reason0 === notGoigOpt[1] ||
      values.reason0 === notGoigOpt[1]
    ) {
      params.reason = 'Changed Destination';
      params.otherReason = values.otherReason;
    } else if (
      values.reason0 === notGoigOpt[2] ||
      values.reason0 === notGoigOpt[2]
    ) {
      params.reason = 'Postponed';
    } else {
      params.reason = 'Misc';
      params.otherReason = values.otherReason;
    }
  } else if (values.cancel_reason === cancelRequestReasons[1]) {
    params.quote_customization = values.quote_customization;
    params.not_satisfied_reason = values.reason1
      ? values.reason1
      : values.reason1;
  } else {
    params.reason = values.reason2;
    if (values.reason2 === goingNotTTOpt[0]) {
      params.reason = 'CostlyQuotes';
    } else if (values.reason2 === goingNotTTOpt[1]) {
      params.reason = 'BookedSelf';
    } else if (values.reason2 === goingNotTTOpt[2]) {
      params.reason = 'BadQuotes';
    } else if (values.reason2 === goingNotTTOpt[3]) {
      params.reason = 'DelayedResponse';
    } else {
      params.reason = 'Other';
      params.otherReason = values.otherReason;
    }
  }
  return params;
};

const CancelRequestContainer = ({ tripId, cancelBooking, closeModal }) => {
  const handleSubmit = (values) => {
    const params = formSubmitHelper(values);

    cancelBooking({ tripId: tripId, params }).then(() => {
      window.location.reload();
    });
  };

  return (<CancelRequest onSubmit={handleSubmit} closeModal={closeModal} />);
};

CancelRequestContainer.propTypes = {
  tripId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  cancelBooking: PropTypes.func,
  closeModal: PropTypes.func
};

export default CancelRequestContainer;
