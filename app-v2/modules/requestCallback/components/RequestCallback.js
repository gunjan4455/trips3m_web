import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  IllusRequestCallback
} from 'helpers/Icon/Icon';
import {
  RadioInputText,
  TextArea,
  ReqCallBackPopUp,
} from '../G';
import ModalHeaderCustom from "../../shared/headers/ModalHeaderCustom";
import { snakeCase } from 'helpers/stringHelpers';

class RequestCallbackPopup extends Component {
  static propTypes = {
    tripId: PropTypes.number.isRequired,
    quoteId: PropTypes.number.isRequired,
    requestCallbackReasons: PropTypes.object.isRequired,
    requestCallbackConfirm: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      reasonText: '',
    };
  }

  reasonChanged = (event) => {
    this.setState({
      reason: event.currentTarget.value
    });
  };

  reasonTextUpdated = (event) => {
    this.setState({
      reasonText: event.target.value
    });
  };

  handleSubmit = () => {
    // collect the reasons and dispatch
    this.props.requestCallbackConfirm({
      tripId: this.props.tripId,
      quoteId: this.props.quoteId,
      reason: snakeCase(this.state.reason),
      reasonText: this.state.reasonText
    });

    // close the popup
    this.props.closeModal();
  };

  render() {
    const { requestCallbackReasons } = this.props;
    const options = Object.keys(requestCallbackReasons).map((rejectionId) => {
      const id = `reject-quote-${rejectionId}`;
      return (
        <div key={id}>
          <RadioInputText
            type="radio"
            className="checkbox-round"
            name="reject-quote-rad"
            id={id}
            value={rejectionId}
            checked={this.state.reason === rejectionId}
            onChange={this.reasonChanged}
          />
          <label className="iblock wfull f14 pfc3 mb8 mt8 at_requestCB-reasons"
                 htmlFor={id}>{requestCallbackReasons[rejectionId]}</label>
          {
            (requestCallbackReasons[rejectionId] === 'Others' || requestCallbackReasons[rejectionId] === 'Other')
              ? <TextArea
                placeholder="Enter reason for Quote Rejection"
                className="textarea"
                value={this.state.reasonText}
                onChange={this.reasonTextUpdated}
              />
              : null
          }
        </div>
      );
    });

    return (
      <ReqCallBackPopUp className="flex hfull flexDColumn overflowa">
        <ModalHeaderCustom handleCrossClick={this.props.closeModal} heading='Request a Call Back' />
        <div className="col-xs-12 sbcw z2 p0 flex flexDColumn pb64 flexFull">
          <div className="p24 pb15">
            <p className="f14p pfc3 mb0 fw7 at_requestCB-text">Our Travel Agent will get in touch with you.</p>
          </div>
          <div className="flexFull pt0 p24 at_requestCB-reason">
            {options}
          </div>

          <div className="fixed b0 l0 r0 bs6">
            <button className="btn-filled-pri-large wfull radius2 pl8 pr8 at_requestCB-confirm"
                    onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </ReqCallBackPopUp>
    );
  }
}

export default RequestCallbackPopup;
