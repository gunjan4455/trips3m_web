import React from 'react';
import PropTypes from 'prop-types';
import _get from "lodash/get";

import { HotelDefaulImg } from 'helpers/Icon/Icon';
import { getAdultChildAsString } from '../helpers';
import Modal from 'modules/shared/GenericModal';
import FullWidthSlider from 'modules/shared/carousel/FullWidthSlider';
import ShowMore from 'modules/shared/ShowMore';
import Board from './Board';

import styles from './AvailableRooms.cm.scss';

class AvailableRooms extends React.Component {
  static propTypes = {
    nights: PropTypes.number.isRequired,
    all: PropTypes.object.isRequired,
    searchParams: PropTypes.object.isRequired,
    checkOutDetails: PropTypes.object.isRequired,
    updateCheckOutDetails: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    trackRoomSelection: PropTypes.func.isRequired
  };

  state = {
    showRoomCount: false
  };

  handleSelectRoom = (room, action) => {
    const rooms = [...this.props.checkOutDetails.rooms];
    const price = {};

    price.total = this.props.checkOutDetails.price.total || 0;
    price.discounted = this.props.checkOutDetails.price.discounted || 0;
    price.currency = room.price.currency;
    price.unit = room.price.unit;
    price.rateClassCode = room.price.rateClassCode;
    price.rateClassName = room.price.rateClassName;

    if (action === 'inc') {
      rooms.push(room.details);
      price.total += room.price.total;
      price.discounted += room.price.discounted;
    } else if (action === 'dec') {
      const firstMatchingIndex = rooms.findIndex(r => r.selectionId === room.details.selectionId);
      rooms.splice(firstMatchingIndex, 1);
      price.total -= room.price.total;
      price.discounted -= room.price.discounted;
    }

    this.props.updateCheckOutDetails({ rooms, price });
  };

  renderRoom = (room, roomIndexes) => {
    const { trackRoomSelection } = this.props;
    const imageList = room.images && room.images.length ? room.images.map(image =>
      _get(image, 'pictureDetails.picture.imagekitUrl', '')
    ) : [];
    return <div key={room.roomName}>
      <div className="sbcw">
        <div className="flex alignCenter mb32">
          <div className={`mr8 ${styles.hotelRoomCard}`}>
            {
              imageList.length ?
                <Modal
                  trigger={<img className={styles.selectedRoom} alt={room.roomName || 'selectedRoom'} src={imageList[0]} />}
                  fullView={true}
                  hasCustomClose={true}
                >
                  <div>
                    <p className="flex p15 fw9 f16 ml24 ">{`Room ${roomIndexes.join(' & ')}`}</p>
                    <FullWidthSlider images={imageList} name={room.roomName}/>
                  </div>
                </Modal> :
                <div className="icon-24 absolute-center">
                  <HotelDefaulImg />
                </div>
            }
          </div>
          <div className="flexFull">
            <span className="block fw9 f16">{room.roomName}</span>
            {/*<span className="block pfc4">{room.bed && room.area ? `${room.bed} | ${room.area}` : ''}</span>*/}
            <span className="pfc4 f14 block">{`${Object.keys(room.boards).length} Options Available`}</span>
          </div>
        </div>
        {/*do not remove below commented code*/}
        {/*
        <div className="flex bb">
          <div className={`mt15 mb24 ${styles.amentiesCard}`}>
            <ul className="flex list-style-no">
              {room.inclusions.map(i => <li className="text-center mr8 ml8">
                <span className="iblock" />
                <p className={`f12 ${styles.amentiesName}`}>Room Service</p>
              </li>)}
              <li className="text-center mr8 ml8">
                <p className="f18 sfc1 fw7 mb2">4+</p>
                <p className="f12 sfc1 fw7">More</p>
              </li>
            </ul>
          </div>
        </div>
        */}
        <div>
          {
            Object.keys(room.boards).map(selectionId => {
              const rooms = this.props.checkOutDetails.rooms.filter(room => room.selectionId === selectionId);
              return <Board room={room} boardType={room.boards[selectionId]}
                            nights={this.props.nights} roomCount={rooms.length}
                            pax={room.pax} handleSelectRoom={this.handleSelectRoom} roomIndexes={roomIndexes}
                            trackRoomSelection={trackRoomSelection} />;
            })
          }
        </div>
      </div>
    </div>;
  };

  renderRooms = (rooms, roomIndexes) => {
    const roomCodes = rooms && Object.keys(rooms) || [];

    if (!roomCodes.length) {
      return null;
    }

    const wrapData = roomCodes.slice(0, 1);
    const moreData = roomCodes.slice(1);

    const wrapText = wrapData.map(roomCode => this.renderRoom(rooms[roomCode], roomIndexes));
    const moreText = moreData.map(roomCode => this.renderRoom(rooms[roomCode], roomIndexes));

    const key = roomIndexes.join('&');
    return <div key={key}>
      <p className="f16 fw9 mb24 pfc5 break-all">{`Select Room ${key}`} <span
        className="f12 pfc4 fw4 ml4">{getAdultChildAsString(rooms[roomCodes[0]].pax)}</span></p>
      <ShowMore
        wrapText={wrapText}
        moreText={moreText}
        showMoreText="Show More Rooms"
        showLessText="Show Less"
        alignCenter={true}
        noOverwrite
      />
    </div>;
  };

  render() {
    const { all, searchParams, push } = this.props;
    const rooms = all.rooms;

    if (!rooms) {
      return null;
    }

    const requestIds = {};
    searchParams.rooms.forEach((room, index) => {
      const requestId = `${room.adults}@${room.children}`;
      if (requestIds[requestId]) {
        requestIds[requestId].push(index + 1);
      } else {
        requestIds[requestId] = [index + 1];
      }
    });

    return (<div className="pr15 pl15 pb64">
        <div className="flexFull">
          {
            Object.keys(requestIds).map((requestId) => this.renderRooms(rooms[requestId], requestIds[requestId]))
          }
        </div>
      </div>
    );
  }
}

export default AvailableRooms;

