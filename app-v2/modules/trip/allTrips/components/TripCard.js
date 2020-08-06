import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GtripCardActionDiv, GQouteStatusIconSpan, GCardOptionDiv } from '../G';
import { QuotesReceivedIcon, NoQuotesReceivedIcon } from 'app/helpers/Icon/Icon';
import { preferencesPageUrl, rtripPath } from 'helpers/urlHelpers';
import { format } from 'helpers/DateTime';
import Modal from 'modules/shared/GenericModal';
import CancelRequest from 'modules/trip/cancelRequest/index';
import { TRIP_STATUS } from 'constants/tripStatus';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class TripCard extends Component {

  state = {
    closeModal: true
  };

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  isCancelledTrip = (status) => status.toLowerCase() === TRIP_STATUS.CANCELLED;

  reactivateBooking = () => {
    const { reactivateBooking, tripDetails } = this.props;
    this.trackSegmentEvent('', 'Reactivate');

    reactivateBooking({ tripId: tripDetails.id }).then((results) => {
      if (results) {
        window.location.reload();
      }
    });
  };

  renderCancel() {
    const { tripDetails } = this.props;

    return this.isCancelledTrip(tripDetails.status) ?
      <button className="pfc3 p15 block cursorP bb at_undocancel" onClick={this.reactivateBooking}>Undo
        Cancel</button> :
      <Modal fullView={true} hasCustomClose={true}
             trigger={<span className='pfc3 p15 block cursorP bb'
                            onClick={() => this.trackSegmentEvent('', 'Cancel')}>Cancel</span>}
             customCloseTrigger={this.state.closeModal}>
        <div className='sbcw'>
          <CancelRequest closeModal={this.closePopup} tripId={tripDetails.id} />
        </div>
      </Modal>;
  }

  trackSegmentEvent = (object = '', cta = '') => {
    this.props.trackSegment({
      event: ORGANISM_CLICKED,
      object: object,
      cta: cta,
      misc_id_1: this.props.tripDetails.id,
      misc_type_1: 'Trip ID'
    });
  };

  render() {
    const { tripDetails } = this.props;
    const editPreferenceUrl = preferencesPageUrl(tripDetails.id);
    const rlpUrl = rtripPath(tripDetails.id);

    return (
      <div className="mt8">
        <div className="flex flexDColumn sbcw p15 pt8 pb8 mb8 relative at_tripCard">
          <a href={rlpUrl} onClick={() => this.trackSegmentEvent('Trip Card')}>
            <div className="flexFull">
              <p className="f12 fw7 pfc4 relative pl24 mb15 at_quoteReceivedStatus">
                <GQouteStatusIconSpan className="icon-18 absolute l0 t0">
                  {tripDetails.quotesCount ? <QuotesReceivedIcon /> : <NoQuotesReceivedIcon />}
              
                </GQouteStatusIconSpan>
                <span className="at_quoteReceivedStatus_text">
                  {tripDetails.quotesCount ? `${tripDetails.quotesCount} Quotes Received` : 'No Quotes Received'}
                </span>
              </p>
              <h3 className="f16 fw7 pfc3 mb8 at_destination">{tripDetails.firstDestinationName}</h3>
              <span className="pfc1 f14 mb24 block at_bookingId">{`Booking ID #${tripDetails.id}`}</span>
            </div>
            <div className="flex">
              <div className="flexFull mb15 mr4 pr8 at_departureDate">
                <p className="f14 pfc4 mb4">Departure Date</p>
                <p className="f14 pfc3">{format(tripDetails.startDate, 'ddd, DD MMM, YYYY')}</p>
              </div>
              <div className="flexFull mb15 ml4 pl8 at_duration">
                <p className="f14 pfc4 mb4">Duration</p>
                <p className="f14 pfc3">{tripDetails.tripDays} Days</p>
              </div>
            </div>
            <div className="flex">
              <div className="flexFull at_travelers">
                <p className="f14 pfc4 mb4">Travelers</p>
                <p className="f14 pfc3">{tripDetails.adult} Adult & {tripDetails.child} Children</p>
              </div>
            </div>
          </a>
          {
            tripDetails.isDuplicate
              ? null
              : <GCardOptionDiv>
                <div className="optionTrigger absolute t8 r15 cursorP at_tripCardActionTrigger">
                  <div className="cardTriggerIcon" />
                </div>
                <GtripCardActionDiv className="cardOption sbcw absolute z10 t8 r8 at_tripCardAction">
                  {
                    tripDetails.bookingStatusLabel.toLowerCase() === 'booked' ?
                      <ul className="list-style-no">
                        <li>
                          <a href={tripDetails.invoiceUrl} className="pfc3 p15 block cursorP">View Invoice</a>
                        </li>
                      </ul> :
                      <ul className="list-style-no">
                        <li>
                          {this.renderCancel()}
                        </li>
                        <li>
                          <a href={editPreferenceUrl} className="pfc3 p15 block cursorP"
                             onClick={() => this.trackSegmentEvent('', 'Edit Preferences')}>Edit Preferences</a>
                        </li>
                      </ul>
                  }
                </GtripCardActionDiv>
              </GCardOptionDiv>
          }
        </div>
      </div>
    );
  }
}

TripCard.propTypes = {
  tripDetails: PropTypes.object.isRequired,
  reactivateBooking: PropTypes.func.isRequired,
  trackSegment: PropTypes.func.isRequired
};

export default TripCard;
