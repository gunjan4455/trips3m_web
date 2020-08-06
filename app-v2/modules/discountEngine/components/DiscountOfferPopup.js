import React from 'react';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';

import { OffersBoxFillIcon, SunSmall } from 'helpers/Icon/Icon';
import DiscountOfferList from './DiscountOfferList';
import OtherOffers from './OtherOffers';
import ModalHeaderCustom from 'modules/shared/headers/ModalHeaderCustom';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

export default class DiscountOfferPopup extends React.Component {

  static propTypes = {
    offers: PropTypes.array,
    hasDiscountApplied: PropTypes.bool,
    appliedOfferId: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired,
    updateFormField: PropTypes.func.isRequired,
    trackSegmentEvent: PropTypes.func
  };

  static defaultProps = {
    offers: [],
    hasDiscountApplied: false,
    appliedOfferId: 0,
    trackSegmentEvent: () => {}
  };

  constructor(props){
    super(props);
  }

  onSensorChange = (isVisible) => {
    if (isVisible) {
      this.props.trackSegmentEvent({
        category: '',
        section: 'Discount Pop-up',
        object: '',
        cta: '',
      }, ORGANISM_VIEWED);
    }
  };

  render() {
    const {
      offers, hasDiscountApplied, appliedOfferId, updateFormField
    } = this.props;

    const discountOffers = offers.filter(offer => offer.couponType.toLowerCase() === 'normal');
    const informatoryOffers = offers.filter(offer => offer.couponType.toLowerCase() === 'view only');

    return (
      <Sensor onChange={(isVisible) => this.onSensorChange(isVisible)}
              partialVisibility='bottom'
              delayedCall={true}>
        <div className="discountOffersModalContent relative siteModalContent">
          <ModalHeaderCustom heading={'Current Discounts & Offers'} />

          <div className="pb48">
            {
              <div className="p15 pb24">
                <DiscountOfferList offers={discountOffers}
                                   appliedOfferId={appliedOfferId}
                                   onSubmit={this.props.handleSubmit}
                                   updateFormField={updateFormField}
                />
              </div>
            }

            <div className="pt8 sbc5" />

            <div className="mt8 pt15">
              {
                informatoryOffers.length
                  ? <div className="p15">
                    <OtherOffers offers={informatoryOffers} /></div>
                  : null
              }
              {
                !discountOffers.length && !informatoryOffers.length
                  ? <span className="block p15 pt0">No coupons currently available</span>
                  : null
              }
            </div>
          </div>
        </div>
      </Sensor>
    );
  }
}

