import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import PaxIcon from '../components/PaxIcon';
import NumberFormatter from '../../preferences/components/NumberFormatterGeneric';
import Price from '../components/Price';
import BoardDetails from './BoardDetails';

import styles from './AvailableRooms.cm.scss';

class Board extends React.Component {
  static propTypes = {
    nights: PropTypes.number.isRequired,
    roomCount: PropTypes.number.isRequired,
    room: PropTypes.object.isRequired,
    boardType: PropTypes.object.isRequired,
    pax: PropTypes.object.isRequired,
    handleSelectRoom: PropTypes.func.isRequired,
    trackRoomSelection: PropTypes.func.isRequired,
    roomIndexes: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      showRoomCount: props.roomCount > 0,
      roomCount: props.roomCount > 1 ? props.roomCount : 1
    };
  }

  updateBookingDetails = (value, action = 'inc') => {
    const { pax, room, boardType, handleSelectRoom } = this.props;
    handleSelectRoom({
      details: {
        roomCode: room.roomCode,
        selectionId: boardType.selectionId,
        rateKey: boardType.rateKey,
        ...pax
      },
      price: boardType.price
    }, action);
    this.props.trackRoomSelection({
      label: 'Specific Room Clicked',
      section: 'Select Your Own Room',
      cta: 'Add Room',
      miscellaneous_type_2: 'Room counter',
      miscellaneous_id_2: value,
      miscellaneous_type_1: 'Room Type',
      miscellaneous_id_1: `${boardType.name.toLowerCase()} & ${boardType.price.rateClassName}`,
    });
  };

  handleSelectRoom = () => {
    this.setState({ showRoomCount: true, roomCount: 1 });
    this.updateBookingDetails(1, 'inc');
  };

  handleRoomCount = (value, action) => {
    if (value === 0) {
      this.setState({ showRoomCount: false });
    } else {
      this.setState({ roomCount: value });
    }

    this.updateBookingDetails(value, action);
  };

  render() {
    const { room, boardType, pax, nights, roomIndexes, } = this.props;
    const key = `${room.roomCode}_${boardType}`;

    const price = {
      ...boardType.price,
      total: boardType.price.total / nights,
      discounted: boardType.price.discounted / nights
    };

    const summaryLength = 60;

    return (<div className="pb32 mb8" key={key}>
        <div className="sbcw mb15 flex spaceBetween">
          <div className={styles.details}>
            <p className="f14 fw9 mb8 text-capitalize">{boardType.name.toLowerCase()} & {boardType.price.rateClassName}</p>
            {
              boardType.summary ?
                <p className="f12">
                  {boardType.summary.length < summaryLength ? boardType.summary :
                    `${boardType.summary.slice(0, summaryLength)}...`}
                </p>
                : null
            }
          </div>
          <div className={`text-right ${styles.priceDetail}`}>
              <ul className={`flex mb8 justifyEnd list-style-no ${styles.roomCount}`}>
              <PaxIcon pax={pax} />
            </ul>
            <div>
              <Price price={price} reverse />
              <span className="block f12 pfc4">Per night</span>
            </div>
          </div>
        </div>
        <div className="flex alignCenter">
          <div className="flexFull">
            <Modal
              trigger={<span className="fw7 sfc1">View Details</span>}
              fullView={true}
              hasCustomClose={true}
            >
              <BoardDetails
                pax={pax}
                roomIndexes={roomIndexes}
                {...boardType}
                room={room}
                checkoutMode='custom'
                boardType={boardType}
                price={price}
              />
            </Modal>
          </div>
          <div className="flexFull flex justifyEnd">
            {this.state.showRoomCount ?
              <div className={styles.numberFormatter}>
                <NumberFormatter onChange={(value, action) => this.handleRoomCount(value, action)}
                                 value={this.state.roomCount} />
              </div> :
              <button className={`btn-pri p8 pl15 pr15 ${styles.selectedRoomBtn}`} onClick={this.handleSelectRoom}>Select Room</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Board;

