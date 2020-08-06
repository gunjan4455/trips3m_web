import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { TRIP_STATUS } from 'constants/tripStatus';
import { CompareIcon, CompareIconWhite } from 'helpers/Icon/Icon';
import { compareQuotesPath } from 'helpers/urlHelpers';
import TripList from 'modules/trip/dropdown/index';
import Modal from 'modules/shared/GenericModal';
import CancelRequest from 'modules/trip/cancelRequest';
import ViewPreferencesButton from 'modules/shared/ViewPreferencesButton';
import { isTripConverted, rescue } from 'helpers/utils';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const GViewPreferencesBtn = styled.div({
  flex: '0 0 135px',
});

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      closeModal: true
    };
  }

  reactivateBooking = () => {
    const { reactivateBooking, currentTrip } = this.props;
    reactivateBooking({ tripId: currentTrip.id }).then((results) => {
      if (results) {
        window.location.reload();
      }
    });
  };

  trackSegmentEvents = () => {
    rescue(() => {
      this.props.trackSegment({
        event: ORGANISM_CLICKED,
        section: 'Trip request details',
        object: '',
        cta: 'Cancel Request'
      });
    });
  };

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  isCancelledTrip = (status) => status.toLowerCase() === TRIP_STATUS.CANCELLED;


  renderCancel() {
    const { currentTrip } = this.props;

    return this.isCancelledTrip(currentTrip.status) ?
      <button className='sfc1 fw7 f14 at_undoCancel_cta' onClick={this.reactivateBooking}>Undo Cancel</button> :
      <Modal fullView={true} hasCustomClose={true}
             trigger={<span className='f14 fw7 sfc6 at_cancelRequest' onClick={this.trackSegmentEvents}>Cancel Request</span>}
             customCloseTrigger={this.state.closeModal}>
        <div className='sbcw'>
          <CancelRequest closeModal={this.closePopup} tripId={currentTrip.id} />
        </div>
      </Modal>;
  }

  render() {
    const TripListContainer = TripList.container;
    const { currentTrip, trackSegment } = this.props;
    const isConvertedTrip = isTripConverted(currentTrip.status);

    return (
      <div>
        <div className='sbc4 p8 flex alignCenter spaceBetween'>
          <div className='col-xs-7 pl0 pr4 flexFull'><TripListContainer currentTripId={currentTrip.id}
                                                                        trackSegment={trackSegment} /></div>
          <GViewPreferencesBtn className='col-xs-5 pl4 pr0'><ViewPreferencesButton currentTripId={currentTrip.id}
                                                                                   tripStatus={currentTrip.status}
                                                                                   trackSegment={trackSegment} /></GViewPreferencesBtn>
        </div>
        <div className='sbc5 pl15 pr15 pt15 pb24 flex alignCenter spaceBetween'>
          <p className='f14 pfc5 at_bookingID'>{`Booking ID #${currentTrip.id}`}</p>
          {
            isConvertedTrip
              ? null
              : this.renderCancel()
          }
        </div>
        {currentTrip.quotesCount ?
          <div className='p15 sbcw at_compareCta_section'>
            <p
              className='f14 text-center pfc3 mb5'>{`You have received ${currentTrip.quotesCount} quotes and you can`}</p>
            <a
              href={compareQuotesPath(currentTrip.id)}
              className={`text-center pt8 pb8 block wfull ${currentTrip.quotesCount > 1 ? 'btn-sec-load' : 'disabled sfcw'} at_comparequotes`}
            >
            <span className='pt2 pb2 block wfull flex alignCenter justifyCenter'>
              <span className='icon-18 mr8 iblock'>
                {
                  currentTrip.quotesCount > 1 ?  <CompareIcon /> :  <CompareIconWhite />
                }
              </span>
              <span>Compare Quotes</span>
            </span>
            </a>
          </div> : null}
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  currentTrip: PropTypes.object,
  reactivateBooking: PropTypes.func,
  trackSegment: PropTypes.func
};
