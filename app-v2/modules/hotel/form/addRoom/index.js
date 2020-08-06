import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FieldsComponent from './Fields';
import ToasterComponent from 'modules/hotel/components/ToasterComponent';
import { CloseIcon, CloseWhite } from 'helpers/Icon/Icon';

const TOAST_STATES = {
  MAX_GUESTS_REACHED: 'MAX_GUESTS_REACHED',
  ROOM_DELETION_SUCCESS: 'ROOM_DELETION_SUCCESS',
};

const validate = (room) => {
  const pax = room.adults + room.children;

  return pax <= 3 && room.adults > 0 && room.children !== 3;
};

// TODO: need to make this more generic
const renderToast = (toastState, closeToast) => {
  switch (toastState) {
    case TOAST_STATES.MAX_GUESTS_REACHED:
      return (
        <ToasterComponent
          timeInMS={2000}
          callbackAction={closeToast}
          customStyle={{bottom : '80px', padding:'0 15px'}}
        >
          <div className="relative p15 pr48 radius4" style={{background: '#fde6ab'}}>
            <p className="f14 pfc3">
              Upto 3 guests are allowed per room.<br />
              Please add another room to process.
            </p>
            <div className="absolute r10 t15 p2">
              <div
                className='icon-14'
                onClick={() => closeToast()}>
                <CloseIcon />
              </div>
            </div>
          </div>
        </ToasterComponent>

      );
    case TOAST_STATES.ROOM_DELETION_SUCCESS:
      return (
        <ToasterComponent
          timeInMS={2000}
          callbackAction={closeToast}
          customStyle={{bottom : '80px', padding:'0 15px'}}
        >
          <div className="relative p15 pr48 pbc3 radius4">
            <p className="f14 sfcw">Room deleted successfully.</p>
            <div className="absolute r10 t15 p2">
              <div
                className='icon-14'
                onClick={() => closeToast()}>
                <CloseWhite />
              </div>
            </div>
          </div>
        </ToasterComponent>
      );
    default:
      return null;
  }
};

class AddRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rooms: props.searchParams.rooms,
      toast: false,
      deletedIndex: -1
    };
  }

  handleSubmit = () => {
    this.props.handleSubmit({
      rooms: this.state.rooms
    });
    this.props.closeModal();
  };

  updateRoom = (room, index) => {
    if (!validate(room)) {
      room.adults > 0 && this.setState({ toast: TOAST_STATES.MAX_GUESTS_REACHED });
      return;
    }
    const rooms = [...this.state.rooms];
    rooms[index] = room;
    this.setState({ rooms });
  };

  addRoom = () => {
    this.setState({ rooms: [...this.state.rooms, { adults: 2, children: 0 }] });
    this.setState({deletedIndex: -1});
  };

  removeRoom = (index) => {
    const rooms = [...this.state.rooms];
    this.setState({deletedIndex: index});
    setTimeout(() => {
      rooms.splice(index, 1);
      this.setState({deletedIndex: -1});
      this.setState({ rooms });
    }, 350);
  };

  closeToast = () => {
    this.setState({ toast: null });
  };

  render() {
    const { trackSegmentEvent } = this.props;
    const { toast } = this.state;
    return (
      <div className="sbcw wfull">
        <div className='absolute wfull t0 l0'>
          <div className="p8 flex bb wfull fixed z5 sbcw">
            <div className="p4 flexFull">
              <p className="f16 flex alignCenter fw7 pl8 flexFull ellipsis ml24">Guests & Rooms</p>
            </div>
          </div>
        </div>
        <div className="flex flexDColumn">
          <div className="p15 pt24 pb64 flex flexDColumn">
            <div className="flexFull">
              <FieldsComponent
                {...this.state}
                updateRoom={this.updateRoom}
                addRoom={this.addRoom}
                removeRoom={this.removeRoom}
                trackSegmentEvent={trackSegmentEvent}
                deletedIndex={this.state.deletedIndex}
              />
            </div>
          </div>
          <div>
            {renderToast(toast, this.closeToast)}
          </div>

          <div className="fixed b0 l0 r0 bs4 z10 p8 bt sbcw">
            <button type="button" onClick={this.handleSubmit} className="btn-filled-pri-large wfull ripple">
              <div className="wave" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AddRoom.propTypes = {
  searchParams: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  trackSegmentEvent: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

AddRoom.defaultProps = {};

export default AddRoom;

