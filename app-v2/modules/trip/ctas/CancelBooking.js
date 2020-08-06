import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import CancelRequest from 'modules/trip/cancelRequest';

class CancelBooking extends Component {
  state = {
    closeModal: false
  };

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  openPopup = () => {
    this.setState({ closeModal: false });
  };

  render() {
    return (<div className="flexFull flex">
        <Modal fullView={true} hasCustomClose={true}
               trigger={<button className="wfull ripple p15 pl5 pr5" onClick={this.openPopup}>Cancel Booking</button>}
               customCloseTrigger={this.state.closeModal}>
          <div className='sbcw'>
            <CancelRequest closeModal={this.closePopup} tripId={this.props.tripId} />
          </div>
        </Modal>
      </div>
    );
  }
}

CancelBooking.propTypes = {
  tripId: PropTypes.number.isRequired,
  callbackHandler: PropTypes.func.isRequired
};

CancelBooking.defaultProps = {};

export default CancelBooking;
