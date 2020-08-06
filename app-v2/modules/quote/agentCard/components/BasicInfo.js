import React from 'react';
import PropTypes from 'prop-types';

import { GQuotePriceDestinationDiv } from '../G';
import { DownloadBlack } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { INFO_ROSTER } from 'constants/rosterTypes';
import { isTripConverted } from 'helpers/utils';
import QuotePrice from 'modules/quote/shared/price/QuotePrice';
import DiscountOffer from 'modules/discountEngine';

const BasicInfo = ({
                     tripId, quoteId, destination, tripStatus, priceInformation,
                     discountInformation, downloadQuote, showRoster, trackSegment
                   }) => {
  const handleDownloadQuote = () => {
    downloadQuote({ quoteId }).then((res) => {
      if (res.success) {
        window.open(res.download_url, 'target=_blank');
      } else {
        showRoster({ type: INFO_ROSTER, message: res.msg });
      }
    }).catch((ex) => {
      console.log('ex........', ex);
    });
    trackSegment(ORGANISM_CLICKED, 'Agent', '', 'Download');
  };

  const canCheckCoupons = !isTripConverted(tripStatus);
  const hasDiscountApplied = discountInformation.discount > 0;

  return (<div className="sbcw">
    <GQuotePriceDestinationDiv className="p15 flex alignCenter spaceBetween at_quoteBasicInfo">
      <p className="f14 m0 mr5 flexFull at_quoteDestination">{destination}</p>
      <div className="flexFull quotePriceInfo">
        <QuotePrice {...priceInformation} {...discountInformation} />
        <p className='pfc4 f12 text-right mt3'>Excl. of Convenience Fee</p>
      </div>
    </GQuotePriceDestinationDiv>
    <div className="p15 flex spaceBetween alignCenter">
      <button onClick={handleDownloadQuote}
              className="f14 fw7 sfc1 m0 mr5 flex alignCenter at_downloadQuoteCTA">
        <span className="input-24 iblock mr5"><DownloadBlack /></span>
        <span>Download Quote</span>
      </button>
      {
        canCheckCoupons && !hasDiscountApplied
          ? <DiscountOffer discountInformation={discountInformation}
                           tripId={tripId} />
          : null
      }
    </div>
  </div>);
};

BasicInfo.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  destination: PropTypes.string.isRequired,
  tripStatus: PropTypes.string.isRequired,
  priceInformation: PropTypes.object.isRequired,
  discountInformation: PropTypes.object,
  downloadQuote: PropTypes.func.isRequired,
  showRoster: PropTypes.func,
  trackSegment: PropTypes.func
};

BasicInfo.defaultProps = {
  discountInformation: {},
  showRoster: () => {},
  trackSegment: () => {}
};

export default BasicInfo;
