import React from 'react';
import PropTypes from 'prop-types';
import styles from './cta.cm.scss';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const CTA_TEXT = 'View Invoice & Pay';

const ViewInvoiceAndPay = ({ invoiceUrl, ctaText, trackSegment }) => {
  return (
    <div className={`flexFull flex ${styles.viewInvoiceBtn}`}>
      <a href={invoiceUrl} className="wfull btn-filled-pri-large pl15 pr15 ripple"
         onClick={() => trackSegment(ORGANISM_CLICKED, 'View Invoice and Pay')}>
        <span className="wave" />{ctaText}
      </a>
    </div>
  );
};

ViewInvoiceAndPay.propTypes = {
  invoiceUrl: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  trackSegment: PropTypes.func
};

ViewInvoiceAndPay.defaultProps = {
  ctaText: CTA_TEXT,
  trackSegment: () => {
  }
};

export default ViewInvoiceAndPay;
