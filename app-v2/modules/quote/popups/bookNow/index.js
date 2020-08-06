import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';

import { IconSpan, PriceContainer, BookPopup } from './G';
import { IllusThanksRequest } from 'helpers/Icon/Icon';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import WaitForInvoice from '../../ctas/WaitForInvoice';
import CallTripAdvisor from '../../ctas/CallTripAdvisor';
import ModalHeaderCustom from "modules/shared/headers/ModalHeaderCustom";

class BookNowPopup extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    opsDetail: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
    trackSegment: PropTypes.func
  };

  static defaultProps = {
    opsDetail: {},
    trackSegment: () => {
    }
  };

  onSensorChange = (isVisible) => {
    if (isVisible) {
      this.props.trackSegment(ORGANISM_VIEWED, 'Book now pop-up');
    }
  };

  handleWaitForInvoice = () => {
    this.props.closeModal();
  };

  render() {
    const { opsDetail } = this.props;
    return (
      <Sensor onChange={this.onSensorChange}
              partialVisibility='bottom'
              delayedCall={true}>
        <BookPopup className="row row-">
          <ModalHeaderCustom heading="Confirmation" />
          <div className="col-md-12 sbcw z2 p0">
            <div>
              <div className="col-xs-12 bb iblock p24 pt48">
                <p className="f32 fw7 pfc3 mb24">Thank You for your confirmation!</p>
                <PriceContainer className="f14 pfc3 mb15">Your invoice is getting ready and will be soon shared to
                  you to initiate payment.
                </PriceContainer>
                {
                  opsDetail && opsDetail.phoneNo
                    ? <p className="f14 pfc4 mb0">You may also call your trip guide now for more details.</p>
                    : null
                }
              </div>
              <div className="fixed b0 l0 wfull bs6">
                <div className="mb8">
                  <WaitForInvoice callbackHandler={this.handleWaitForInvoice} />
                </div>
                {
                  opsDetail && opsDetail.phoneNo
                    ? <CallTripAdvisor phoneNumber={opsDetail.phoneNo} />
                    : null
                }
              </div>
            </div>
          </div>
        </BookPopup>
      </Sensor>
    );
  }
}

export default BookNowPopup;
