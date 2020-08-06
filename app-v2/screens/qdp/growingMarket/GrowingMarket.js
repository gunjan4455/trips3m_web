import React, { Component } from 'react';

import styles from './growingMarket.cm.scss';

import {PartPay, IllusTraveler,  IllusMoneySafe,  IllusQualityCheck,  IllusSupport} from 'helpers/Icon/Icon';

class GrowingMarket extends Component {
  render() {
    return (
      <div className={` sbcw relative p32 ${styles.keyPoints}`}>
        <h2 className="fw9 f20 text-center pr24 pl24">Fastest Growing Holiday Marketplace</h2>
        <p className="text-center mt8 mb24">Easy. Secure. Reliable</p>
        <div className="row">
          <div className="col-xs-6 text-center mb24">
            <div className={styles.image}>
              <PartPay/>
            </div>
            <h6>Partial Payment </h6>
            <p>Facility</p>

          </div>
          <div className="col-xs-6 text-center mb24">
            <div className={styles.image}>
              <IllusTraveler/>
            </div>
            <h6>22 Lac+  </h6>
            <p>Happy Travellers</p>
          </div>
          <div className="col-xs-6 text-center mb24">
            <div className={styles.image}>
              <IllusMoneySafe/>
            </div>
            <h6>Travel Triangle </h6>
            <p> Verified</p>
          </div>
          <div className="col-xs-6 text-center mb24">
            <div className={styles.image}>
              <IllusQualityCheck/>
            </div>
            <h6>Stringent Quality </h6>
            <p> Control</p>
          </div>
          <div className="col-xs-12 text-center">
            <div className={styles.image}>
              <IllusSupport/>
            </div>
            <h6>24/7  </h6>
            <p>Support</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GrowingMarket;

