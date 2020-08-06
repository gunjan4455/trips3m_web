import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlightsForm from '../form/index';
import Modal from 'modules/shared/GenericModal';

import {IllusRequestCallback} from 'helpers/Icon/Icon';

import { ThankYouContainer } from '../G';

const tripTypeOptions = [
  {
    name: 'Round Trip',
    id: 'round_trip'
  },
  {
    name: 'One Way',
    id: 'one_way'
  },
  {
    name: 'Multicity',
    id: 'multi_city'
  }
];

class BookWithFlightExpert extends Component {

  state = { closeModal: true, submitting: false, timerOn: false };

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  saveFlightDetails = (data) => {
    const { postFlightDetails, currentTripId } = this.props;
    this.closePopup();
    this.setState({ submitting: true, timerOn: true });
    setTimeout(() => {
      this.setState({ timerOn: false });
    }, 3000);
    return postFlightDetails({ ...data, requested_trip_id: currentTripId })
      .then(() => {
        this.setState({ submitting: false });
      });
  };

  handleClick = () => {
    const { trackSegmentEvent } = this.props;
    this.setState({ closeModal: false });
    trackSegmentEvent('Book With Our Flight Expert');
  };

  render() {
    const { getDestinationSearchList, destinations, getFilteredDestinations, trackSegmentEvent } = this.props;
    const { submitting, closeModal, timerOn } = this.state;

    return (
      <div>
        <Modal fullView={true} hasCustomClose={true}
               trigger={<button className="btn-sec-load mt8 wfull at_flightFormCTA" onClick={this.handleClick}>Book with Our Flight Expert</button>}
               customCloseTrigger={closeModal}
               onRequestCloseCustom={this.closePopup}
        >
          <FlightsForm
            getDestinationSearchList={getDestinationSearchList}
            tripTypeOptions={tripTypeOptions}
            destinationList={destinations}
            getFilteredDestinations={getFilteredDestinations}
            saveFlightDetails={this.saveFlightDetails}
            trackSegmentEvent={trackSegmentEvent}
          />
        </Modal>
        { (submitting || timerOn) ?
          <ThankYouContainer>
            <div className="ThankYouContainerMain absolute-center p15">
              <div className="text-center clearfix wfull iblock p32 pt24 sbcw">
                <div className="thanksIcon mb15">
                  <IllusRequestCallback />
                </div>
                <h3 className="f24 fw9 pfc1 mb4">Thank You!</h3>
                <p className="f14 pfc3">We will reach out to you within 24 hours.</p>
              </div>
            </div>
          </ThankYouContainer>
          : null}
      </div>
    );;
  }
}

BookWithFlightExpert.propTypes = {
  getDestinationSearchList: PropTypes.func.isRequired,
  getFilteredDestinations: PropTypes.func.isRequired,
  destinations: PropTypes.array.isRequired,
  postFlightDetails: PropTypes.func.isRequired,
  currentTripId: PropTypes.number.isRequired,
  trackSegmentEvent: PropTypes.func.isRequired
};

export default BookWithFlightExpert;
