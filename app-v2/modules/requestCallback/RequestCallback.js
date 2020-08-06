import React from 'react';
import PropTypes from 'prop-types';

import { HeadphoneIcon, HeadphoneIconWhite } from 'helpers/Icon/Icon';
import Modal from 'modules/shared/GenericModal';
import RequestCallbackPopup from './components/RequestCallback';
import { INFO_ROSTER } from 'constants/rosterTypes';

class RequestCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      closeModal: true,
      message: ''
    };
  }

  openPopup = () => {
    this.setState({ openModal: true, closeModal: false });
  };

  closePopup = () => {
    this.setState({ openModal: false, closeModal: true });
    this.props.showRoster({ type: INFO_ROSTER, message: this.state.message });
  };

  handleRequestCallback = () => {
    this.props.requestCallbackConfirm({
      tripId: this.props.tripId,
      quoteId: this.props.quoteId
    });
    this.openPopup();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Request callback called twice but we have to show toaster message only when user closed the popup
    if (!this.props.successMessage && nextProps.successMessage) {
      if (this.state.openModal) {
        this.setState({...this.state, message: nextProps.successMessage});
      }
      else {
        this.props.showRoster({ type: INFO_ROSTER, message: nextProps.successMessage });
      }
    }
  }

  render() {
    const { isIcononly, isWhiteIcon } = this.props;
    return (
      <div className="iblock flex alignCenter pfc3 fw7 at_requestCallback_CTA">
        <span className="iblock" onClick={() => this.handleRequestCallback()}>
          <span className="input-24 iblock relative mr8">
            {isWhiteIcon ? <HeadphoneIconWhite /> : <HeadphoneIcon />}</span>
          {isIcononly ? null : <span className="iblock" style={{ verticalAlign: '6px' }}>Request Call</span>}
          </span>
        <Modal
          trigger={null}
          fullView={true}
          isOpen={this.state.openModal}
          hasCustomClose={true}
          customCloseTrigger={this.state.closeModal}
          onRequestCloseCustom={this.closePopup}
        >
          <RequestCallbackPopup
            tripId={this.props.tripId}
            quoteId={this.props.quoteId}
            requestCallbackReasons={this.props.requestCallbackReasons}
            requestCallbackConfirm={this.props.requestCallbackConfirm}
            closeModal={this.closePopup} />
        </Modal>
      </div>
    );
  }
}

RequestCallback.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  requestCallbackReasons: PropTypes.object,
  requestCallbackConfirm: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
  trackSegment: PropTypes.func,
  showRoster: PropTypes.func,
  isIcononly: PropTypes.bool,
  isWhiteIcon: PropTypes.bool
};

RequestCallback.defaultProps = {
  requestCallBack: {},
  successMessage: '',
  trackSegment: () => {},
  showRoster: () => {},
  isIcononly: false,
  isWhiteIcon: false
};

export default RequestCallback;
