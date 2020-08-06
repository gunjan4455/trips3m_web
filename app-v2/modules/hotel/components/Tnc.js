import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tnc extends PureComponent {
  static propTypes = {
    rooms: PropTypes.array.isRequired
  };

  render() {
    if (!this.props.rooms.length) {
      return null;
    }

    return (
      <div className="p15">
        <h2 className="f16 fw9 mb24">Cancellation & Refund Policy</h2>
        {
          this.props.rooms.map((room, index) =>
            <div key={`room_index_${index}`} className={this.props.rooms && index !== this.props.rooms-1 && this.props.rooms > 1 ? 'mb32' : ''}>
              <p className="f14 fw9">{room.roomName}</p>
              <p className="f12 pfc4">{`${room.boardName} & ${room.price.rateClassName}`}</p>
              <p className="f12 mt8">{room.cancellationPolicy && room.cancellationPolicy.description}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default Tnc;
