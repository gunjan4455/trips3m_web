import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'helpers/parsers';
import { timeFromEndOfDay } from 'helpers/DateTime';
import ShowMore from 'modules/shared/ShowMore';

const RenderDiscountOfferRadioButton = ({
                                          offer, input, id, currentOfferId,
                                          appliedOfferId, onClickHandler
                                        }) => {
  const getExpirationString = (endDate) => {
    return `Expiring ${timeFromEndOfDay(endDate)}`;
  };

  const getShowMoreProps = (offer) => {
    return {
      wrapText: offer.tnc ? offer.tnc.substr(0, 80) : '',
      moreText: offer.tnc && offer.tnc.length > 80 ? offer.tnc.substr(80) : ''
    };
  };

  return (<div
    className={` clearfix discountOfferItem ${input.value === appliedOfferId ? 'discountOfferItemApplied' : ''} `}>
    <div>
      <input type="radio" id={id} {...input} checked={input.value === currentOfferId}
             className={`discountOfferInput `} onClick={() => onClickHandler(input.value)} />
      <label htmlFor={id} className="at_discountOfferRadioBtn">
        <span className="customRadio" />
        <span
          className="discountOfferExpiredMsg absolute t8 r8 f10 fw7">
              {getExpirationString(offer.endDate)}</span>
        <div className="discountOfferData flex ml15">

          <div className="discountValueInfo p15">
            <div className="discountValue mb4">
              <div className="discountVal f16 fw9 pfc3">
                {
                  offer.discountType === 1
                    ? `${parsePrice({
                      price: offer.offerVal,
                      currency: offer.currency,
                      appendOnly: false
                    })}`
                    : `${offer.offerVal}%`
                }
                <span className="ml8">{offer.discountType === 1 ? 'Cashback' : 'Off'} </span>
              </div>
            </div>
            <h3 className="f14p">{offer.heading}</h3>
            <div className="offerDescription f12 pfc4 m0">
              <ShowMore isDefaultShowMore={false} {...getShowMoreProps(offer)} />
            </div>
          </div>
        </div>
      </label>
    </div>
  </div>);
};

RenderDiscountOfferRadioButton.propTypes = {
  offer: PropTypes.object,
  currentOfferId: PropTypes.number,
  appliedOfferId: PropTypes.number,
  input: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

RenderDiscountOfferRadioButton.defaultProps = {
  offer: {},
  currentOfferId: 0
};

export default RenderDiscountOfferRadioButton;
