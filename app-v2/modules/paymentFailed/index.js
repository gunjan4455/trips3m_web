import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PaymentFailed.cm.scss';

import { CloseIcon, PaymentCancel } from 'helpers/Icon/Icon';

const PaymentFailed = () => (
  <div>
    <div className="at_hotels_payment_failed_header flex p15 bb alignCenter">
      <Link to="/">
        <span className={styles.crossIcon}><CloseIcon /></span>
      </Link>
      <p className="ml15 f16 fw7">Payment</p>
    </div>
    <div className="flex justifyCenter text-center pl32 pr32 pt64 pb64">
      <div>
        <span className={`mb32 block ${styles.paymentFailIcon}`}><PaymentCancel/></span>
        <h4 className="fw9 f16 mb8">Sorry, payment failed!</h4>
        <p className="pfc4 mb32">A problem has occured. Any amount deducted will be refunded within 4-7 days.</p>
        <Link to="/" className={`at_hotels_payment_failed_home pfc4 ${styles.backLink}`}>Go Home</Link>
      </div>
    </div>
  </div>
);

export default PaymentFailed;

