import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import hotelCards from './data';

import styles from './topDestinationHotels.cm.scss';

class TopDestinationHotels extends PureComponent {

  render() {
    return (
      <div className="sbcw">
        <p className="f20 fw9 m0 p24 pt0">Book Top-rated Hotels</p>
        <div className="overflowXscroll flex">
          {
            hotelCards.map((hotelCard, index) =>
                <div className={`pr15 pb15 ${index < 1 ? 'pl24': ''}`}>
                <div className={`relative sbcw ${styles.HotelContainer}`}>
                  <div className={`radius4 overflowh relative ${styles.hotelCard}`}>
                    <img
                      src={hotelCard.img}
                      alt="top-rated-hotels" />
                    <p
                      className={`pt4 pb4 pl15 pr15 f12 t15 pbc5 absolute sfcw fw7 text-uppercase ${styles.flag}`}>Upto {hotelCard.discount} off</p>
                  </div>
                  <div className={`absolute p15 b0 radius4 sbcw ${styles.hotelInfo}`}>
                    <p className="fw9 mb8">{hotelCard.destination}</p>
                    <p className="mb4">{hotelCard.subHeading}</p>
                    <p className="fw9 sfc3 mb15">From {hotelCard.price} <span className="f10 pfc4 ml2">per night</span></p>
                    <Link to={hotelCard.url}>
                      <span className="btn-pri wfull ripple">View Hotels</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default TopDestinationHotels;
