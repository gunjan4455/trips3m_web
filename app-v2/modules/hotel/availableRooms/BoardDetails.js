import React from 'react';
import PropTypes from 'prop-types';
import config from 'appConfig';

import { calculateAdultsAndChildren } from '../helpers';
import { GIconSpan, GAmenitiesContainerUl } from 'modules/hdp/Amenities';
import {GreenTick, GreenTickInclusion} from 'helpers/Icon/Icon';
import Price from '../components/Price';
import SliderWithThumbnail from 'modules/hdp/SliderWithThumbnail';
import './BoardDetails.scss';

const BoardDetails = ({ inclusions, cancellationPolicy, roomIndexes, pax, room, checkoutMode, boardType, price, images }) => {

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  const isRecommended = checkoutMode === 'recommended';

  return (
    <div>
      <div className="fixed l0 r0 t0 sbcw p8 pl48 z2">
        <h3 className="f16 mt5 mb5">
          <span className="fw9 pfc1">Room {roomIndexes.join('&')}</span> |
          <span> {pax.adults} {pax && pax.adults && pax.adults > 1 ? 'adults' : 'adult'} & {pax.children} {pax && pax.children && pax.children > 1 ? 'children' : 'child'}</span>
        </h3>
      </div>
      <div className="sbc5 bt">
        <div className="sbcw">
          {
            room.images && room.images.length ?
              <div className="p15 pb0">
                <SliderWithThumbnail images={room.images} hotelName={room.roomName} />
              </div> : null
          }
        </div>
        <div className="sbcw p15 pb0">
          <h3 className="f24 fw7">{room.roomName}</h3>
        </div>
        <div className="sbcw pt8 pb8 pl15 pr15">
          <ul className="flex list-style-no">
            <li className="f10 fw7 p8 pl15 pr15 mr8 radius20 border text-capitalize">{isRecommended ? room.boardName : boardType.name}</li>
            <li className="f10 fw7 p8 pl15 pr15 mr8 radius20 border text-capitalize">{isRecommended ? room.price.rateClassName : boardType.price.rateClassName}</li>
          </ul>
        </div>
        <div className='sbcw p15 pt8 mb8'>
          <Price price={price} fontClass={'f24'}
          />
          <span className="block f12 pfc4">Per night</span>
        </div>
        {
          room.roomFacilities && room.roomFacilities.length ?
            <div className="sbcw mb8 p15">
              <h3 className="f16 fw9 mb15">Amenities</h3>
              {
                <GAmenitiesContainerUl>
                  {
                    room.roomFacilities.map((facility, index) => (
                      <li key={index} className="pr8 iblock">
                        <div className="flex alignCenter">
                          <GIconSpan className="relative flex alignCenter justifyCenter iblock mr8">
                            <GreenTick/>
                          </GIconSpan>
                          <p className="flexFull f14p m0">{facility}</p>
                        </div>
                      </li>
                    ))
                  }
                </GAmenitiesContainerUl>
              }
            </div> : null
        }
        <div className="sbcw p15 mt8">
          {
            inclusions
              ? <div>
                  <h3 className="f16 fw9 mb15">Room Inclusions</h3>
                  <ul className="mt5">
                    {inclusions.map((fac, index) => (
                      <li className="list-style-no f14 pl24 relative" key={`fac_${index}`}>
                        <div className="absolute-center-v l0">
                          <div className="icon-24">
                            <GreenTick/>
                          </div>
                        </div>
                        <span className="ml4">{fac}</span>
                      </li>
                      )
                    )}
                  </ul>
                </div>
                : null
          }
        </div>
        {
          cancellationPolicy && cancellationPolicy.description
            ? (<div className="sbcw p15 mt8">
              <h3 className="f16 fw9 mb15">Cancellation Policy</h3>
              <p className="f14 mt5">{cancellationPolicy.description}</p>
            </div>) : null
        }
      </div>
    </div>
  );
};

BoardDetails.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  checkoutMode: PropTypes.string,
  showTag: PropTypes.bool,
  covers: PropTypes.object,
  inclusions: PropTypes.array,
  cancellationPolicy: PropTypes.object,
  pax: PropTypes.object,
  room: PropTypes.array,
  boardType: PropTypes.object,
  roomIndexes: PropTypes.array,
  price: PropTypes.object
};

BoardDetails.defaultProps = {
  images: [`${config.assets.images}/attachments/pictures/1106775/original/property-view.jpg`,
    `${config.assets.images}/attachments/pictures/1106775/original/property-view.jpg`],
  name: '',
  checkoutMode: '',
  room: [],
  boardType: {},
  showTag: false,
  covers: {
    days: 0,
    nights: 0
  },
  price: {}
};

export default BoardDetails;
