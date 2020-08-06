import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import AddRoom from '../form/addRoom';
import { TravelInfoIcon } from 'helpers/Icon/Icon';
import { calculateGuests } from '../helpers';

const renderRoomsAndGuests = (data, trackRoomsAndGuest) => {
  const rooms = data && data.rooms || [];
  return <div>
    <p className="f14 fw7 mb8">Guests & Rooms</p>
    <div className="border sbcw p8 relative alignCenter flex radius2" onClick={trackRoomsAndGuest}>
      <div className="icon-24">
        <TravelInfoIcon />
      </div>
      <span className="ml8">
        {`${calculateGuests(rooms)} Guests / ${rooms.length} Rooms`}
      </span>
    </div>
  </div>;
};

class RoomsAndGuests extends Component {

  state = { modal: false };

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  trackRoomsAndGuest = () => {
    const details = {
      section: 'Traveler Preferences',
      cta: 'Guests/Rooms',
      label: 'Guests Clicked'
    };
    this.props.trackSegment(details);
  };

  render() {
    const { handleSubmit, data } = this.props;
    return (
      <div className="flex">
        <div className="flexFull">
          <Modal
            trigger={renderRoomsAndGuests(data, this.trackRoomsAndGuest)}
            isOpen={this.state.modal}
            customCloseTrigger={!this.state.modal}
            fullView={true}
            hasCustomClose={true}
          >
            <div className="flex wfull hfull flexFull">
              <AddRoom
                handleSubmit={handleSubmit}
                closeModal={this.closeModal}
                searchParams={data}
              />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

RoomsAndGuests.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
  trackSegment: PropTypes.func
};

RoomsAndGuests.defaultProps = {
  trackSegment: () => {}
};

export default RoomsAndGuests;

