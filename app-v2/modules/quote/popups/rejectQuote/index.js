import React from 'react';
import PropTypes from 'prop-types';

import { GRadioInputText, GTextArea, GRejectModalWrapperDiv } from './G';
import QUOTE_EVENTS_ENUMS from 'modules/quote/EventTypes';
import ModalHeaderCustom from 'modules/shared/headers/ModalHeaderCustom';
import { rescue } from 'helpers/utils';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class RejectQuotePopup extends React.Component {
  static propTypes = {
    tripId: PropTypes.number.isRequired,
    quoteId: PropTypes.number.isRequired,
    rejectQuoteReasons: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    rejectQuoteHandler: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    trackSegment: PropTypes.func.isRequired
  };

  static defaultProps = {
    loading: false
  };

  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      reasonText: '',
      showNoSelectionErrorMsg: false
    };
    this.reasonChanged = this.reasonChanged.bind(this);
    this.reasonTextUpdated = this.reasonTextUpdated.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  reasonChanged(event) {
    this.setState({
      reason: event.currentTarget.value
    });
  }

  reasonTextUpdated(event) {
    this.setState({
      reasonText: event.target.value
    });
  }

  handleCancel = () => {
    rescue(() => {
      this.props.trackSegment(ORGANISM_CLICKED, 'Reject quote pop up', 'Cancel');
    });
    this.props.closeModal();
  };

  handleSubmit() {
    if (this.state.reason || this.state.reasonText) {
      this.props.rejectQuoteHandler(QUOTE_EVENTS_ENUMS.REJECT_QUOTE, {
        tripId: this.props.tripId,
        quoteId: this.props.quoteId,
        reason: this.state.reason,
        reasonText: this.state.reasonText,
      });
    } else {
      this.setState({ showNoSelectionErrorMsg: true });
      setTimeout(() => {
        this.setState({ showNoSelectionErrorMsg: false });
      }, 5000);
    }
  }

  render() {
    const { rejectQuoteReasons } = this.props;
    const otherId = 'reject-quote-5';
    const options = Object.keys(rejectQuoteReasons)
      .filter(rejectionId => (rejectionId !== '5'))
      .map((rejectionId, index) => {
        const id = `reject-quote-${rejectionId}${index}`;
        return (
          <div key={id}>
            <GRadioInputText
              type="radio"
              className="checkbox-round"
              name="reject-quote-rad"
              id={id}
              value={rejectionId}
              checked={this.state.reason === rejectionId}
              onChange={this.reasonChanged}
            />
            <label className="iblock wfull f14 pfc3 mb8 mt8 at_rejectreason"
                   htmlFor={id}>{rejectQuoteReasons[rejectionId]}</label>
          </div>
        );
      });
    return (
      <GRejectModalWrapperDiv className="row row-">
        <ModalHeaderCustom heading="Reject Quote:" />
        <div className="col-xs-12 sbcw z2 p0">
          <div className="col-xs-12 iblock p24 pb8">
            <p className="f14 fw9 pfc3 mb0 at_rejectheader">Please let us know the reason for rejecting this quote</p>
            {this.state.showNoSelectionErrorMsg
              ? (
                <p className="f14 fw7 mt8 mb0 at_rejecterror" style={{ color: 'red' }}>Please select a reason.</p>
              )
              : null
            }
          </div>
          <div className="col-xs-12 p24 pt8">
            {options}
            <div key={otherId}>
              <GRadioInputText
                type="radio"
                className="checkbox-round"
                name="reject-quote-rad"
                id={otherId}
                value={'5'}
                checked={this.state.reason === '5'}
                onChange={this.reasonChanged}
              />
              <label className="iblock wfull f14 pfc3 mb8 mt8 at_rejectreason"
                     htmlFor={otherId}>Others</label>
              <GTextArea
                placeholder="Enter reason for Quote Rejection"
                className="border textarea p8 mb8 at_othertextbox"
                value={this.state.reasonText}
                onChange={this.reasonTextUpdated}
              />
            </div>
          </div>
          <div className="fixed b0 l0 flex wfull bs6 z10">
            <button
              className="flexFull link-pri pfc3 fw7 wfull radius2 pl8 pr8 pt15 pb15 MB15 iblock at_rejectcancel sbcw"
              onClick={this.handleCancel}>
              Cancel
            </button>
            <button
              className="flexFull btn-filled-pri-large wfull radius2 pl8 pr8 at_rejectconfirm"
              disabled={this.props.loading}
              onClick={this.handleSubmit}>
              Reject Quote
            </button>
          </div>
        </div>
      </GRejectModalWrapperDiv>
    );
  }
}

export default RejectQuotePopup;
