import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'helpers/parsers';
import { getAdultChildAsString } from '../helpers';

const RoomDetail = ({ room, nights, index }) => {
  const price = room.price.discounted || room.price.total;

  return <div className="pb24" key={`${room.roomName}_${index}`}>
    <div className="flex spaceBetween">
      <p className="f14 fw7 mb8">{`Room ${index + 1}`}
        <span className="f12 pfc4 fw4 ml4">
          {getAdultChildAsString({ adults: room.adults, children: room.children })}</span>
      </p>

      {room.price.discounted ?
        <p className="f14 fw7">
          {parsePrice({
            price: room.price.discounted,
            currency: room.price.currency,
            appendOnly: false
          })}
        </p> :
        <p className="f14 fw7 sfc3">
          {parsePrice({
            price: room.price.total,
            currency: room.price.currency,
            appendOnly: false
          })}
        </p>
      }

    </div>

    <div className="sbcw flex spaceBetween">
      <div>
        <p className="f12 pfc3 mb4">{room.roomName}</p>
        <p className="f12 pfc4 mb4 text-lowercase first-letter-caps">{room.boardName} & {room.price.rateClassName}</p>
        <p className="f12 pfc4">{`${parsePrice({
          price: price / nights,
          currency: price.cubeEffect,
          appendOnly: false
        })} x ${nights} nights`}</p>
      </div>
    </div>
  </div>;
};

RoomDetail.propTypes = {
  room: PropTypes.object.isRequired,
  nights: PropTypes.number,
  index: PropTypes.number
};

RoomDetail.defaultProps = {};

export default RoomDetail;
