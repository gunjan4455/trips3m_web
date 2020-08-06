import React, { Component } from 'react';
import styles from './footer.cm.scss';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className={`sfcw p15 pbc3 col-xs-12 pl8 pr8" ${styles.mktFooter}`}>
          <p className="f14 fwb mb15">Connect with us on :</p>
          <div className={`col-xs-12 relative p0 mb8 ${styles.textWithIconDiv}`}>
            <span className={`${styles.genSprite} ${styles.callIcon} ${styles.textIcon}`} />
            <p className={`f14 fw9 ml24 ${styles.textContent}`}>1800-125-5555</p>
          </div>
          <div className={`col-xs-12 p0 relative mb8 ${styles.textWithIconDiv}`}>
            <span className={`${styles.genSprite} ${styles.mailIcon} ${styles.textIcon}`} />
            <p className={`f14 fw9 ml24 ${styles.textContent}`}>customercare@traveltriangle.com</p>
          </div>
          <div className={`mt15 mb15 relative col-xs-12 p0 ${styles.paymentGateway}`}>
            <img data-defer-load="true"
                 data-src="https://img.traveltriangle.com/public-product/homepage_illustrations/PaymentOptions.png?tr=w-318,h-34"
                 alt="Payment Options" className="lazyloaded"
                 src="https://img.traveltriangle.com/public-product/homepage_illustrations/PaymentOptions.png?tr=w-318,h-34" />
          </div>
          <p className="f14 text-center iblock wfull">&copy; TravelTriangle.com 2020. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
