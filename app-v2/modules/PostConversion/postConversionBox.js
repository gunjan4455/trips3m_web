import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'helpers/parsers';
import { DualTone } from 'helpers/Icon/Icon';
import requestTypes from './constant';
import styles from './PostConversion.cm.scss';


const PostConversionBox = ({ postConversionData: { changes }, handleClick }) => {
  return (
    <div className={`${styles.quoteBox} p15 radius2 sbcw`}>
      <p className="pfc3 f16 fw9 flex"><span className='relative icon-24 iblock mr8'><DualTone /></span>Changes requested by the agent</p>
      <p className="pfc3 fw7 pt24 f14p pb15">
        {requestTypes.AGENT_REQUEST}	
      </p>
      <p className={`${styles.invoiceDetailsAlert} pfc3 p15 f14p radius4`}>
        {requestTypes.NEW_INVOICE_DETAIL}
      </p>
      <div>
        <div className='pt24'>
          {
            changes.installments.map(data => 
              <div className="pt15">
                <p className="pfc3 f14p fw7">
                  Rs {data.amount}<span className="pl15 sfc3 ">{data.status}</span>
                </p>
                <p className="pfc4 f12 fw7">Due Date : {data.date}</p>
            </div>)
          }
        </div>
        <div className="pt32 mt8">
          <div className="pb24">
            <p className=" fw7 f14p pfc3 pb8">Grand Total</p>
            <p className="f24 fw7 sfc3">
              {
                parsePrice({
                  price: changes.invoiceAmount,
                  appendOnly: false
                })
              }/-
            </p>
          </div>
          <div className="flex">
            <button
              className={`${styles.paymentButton} radius4 mr8 f14p sfc1 fw7 cursorP`}
              onClick={() => handleClick(false, requestTypes.REJECT)}
            >
              Reject
            </button>
            <button
              className={`${styles.paymentButton} radius4 sfcw f14p fw7 sbc1 cursorP`}
              onClick={() => handleClick(true, requestTypes.ACCEPT)}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostConversionBox.propTypes = {
  postConversionData: PropTypes.object,
  handleClick: PropTypes.func,
};

export default PostConversionBox;
