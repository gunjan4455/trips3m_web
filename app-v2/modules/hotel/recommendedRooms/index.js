import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import PaxIcon from '../components/PaxIcon';
import PriceFooter from './PriceFooter';
import Img from 'components/Common/Img';
import Modal from 'modules/shared/GenericModal';
import FullWidthSlider from 'modules/shared/carousel/FullWidthSlider';
import BoardDetails from 'modules/hotel/availableRooms/BoardDetails';
import { HotelDefaulImg, TTRecommendedIcon } from 'helpers/Icon/Icon';
import { calculateAdultsAndChildren, calculateGuests, calculateNights, getAdultChildAsString } from '../helpers';

import styles from './RecommendedRooms.cm.scss';

const renderRoom = (room, index, price) => {

  const imageList = room.images && room.images.length ? room.images.map(image =>
    _get(image, 'pictureDetails.picture.imagekitUrl', '')
  ) : [];
  return <div key={index}>
    <p className="f12 fw9 mb8 pfc5">{`Room ${index + 1}`} <span
      className="f12 pfc4 fw4 ml4">{getAdultChildAsString(room.pax)}</span>
    </p>
    <div className="flex pb24">
      <div className={`relative mr15 ${styles.hotelImage}`}>
        {
          imageList.length ?
            <Modal
              trigger={<Img ikSrc={imageList[0]} className={styles.hotelCard} alt={room.roomName || 'hotelImage'} />}
              fullView={true}
              hasCustomClose={true}
            >
              <div>
                <p className="flex p15 fw9 f16 ml24 ">{`Room ${index + 1}`}</p>
                <FullWidthSlider images={imageList} name={room.roomName}/>
              </div>
            </Modal> :
            <div className={`absolute-center ${styles.defaultIcon}`}>
              <HotelDefaulImg />
            </div>
        }
      </div>
      <div className="flexFull" style={{minWidth: '0'}}>
        <span className="f14 fw9">{room.roomName}</span>
        <p className="f12 text-capitalize">{room.boardName} & {room.price.rateClassName}</p>
        {room.boardSummary ? <div className="f12 pb24 ellipsis">{room.boardSummary}</div>: null}
        <div className="flex spaceBetween">
          <ul className={`flex list-style-no ${styles.roomCount}`}>
            <PaxIcon pax={room.pax} />
          </ul>
          <Modal
            trigger={<span className="fw7 sfc1">View Details</span>}
            fullView={true}
            hasCustomClose={true}
          >
            <BoardDetails
              pax={room.pax}
              inclusions={room.boardInclusions}
              cancellationPolicy={room.cancellationPolicy}
              roomIndexes={[index+1]}
              room={room}
              checkoutMode='recommended'
              price={price}
            />
          </Modal>
        </div>
      </div>
    </div>
  </div>;
};

const RecommendedRooms = ({ recommended, price, searchParams, proceedWithRecommendedRooms }) => {
  const rooms = recommended.rooms;
  const totalPax = calculateAdultsAndChildren(searchParams.rooms);
  const cta = "Get This Combo";
  return (
    <div>
      <div className={`flex p15 ${styles.recommondContainer}`}>
        <span className="mr15"><TTRecommendedIcon /></span>
        <div>
          <p className="f16 fw9">Recommended</p>
          <span className="f12 pfc4">{`For ${totalPax.adults} adults and ${totalPax.children} child`}</span>
        </div>
      </div>
      <div className={`mr15 ml15 p15 ${styles.roomsContainer}`}>
        <div>
          <div className="flexFull">
            {
              rooms && Object.keys(rooms).map((selectionId, index) => renderRoom(rooms[selectionId], index, price))
            }
          </div>
        </div>
        <PriceFooter cta={cta}
                     price={price}
                     night={calculateNights(searchParams.checkInDate, searchParams.checkOutDate)}
                     guest={calculateGuests(searchParams.rooms)}
                     ctaHandler={() => proceedWithRecommendedRooms(cta)} />
      </div>
    </div>
  )
    ;
};

RecommendedRooms.propTypes = {
  recommended: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  searchParams: PropTypes.object.isRequired,
  proceedWithRecommendedRooms: PropTypes.func.isRequired
};

export default RecommendedRooms;

