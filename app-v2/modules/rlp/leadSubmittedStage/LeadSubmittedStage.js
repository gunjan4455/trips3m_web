import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { rescue, capitalizeEveryFirstLetter } from 'helpers/utils';
import { TT_EMAIL, TT_PHONE } from 'constants/application';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import RequestProcessingCard from './components/RequestProcessingCard';
import Modal from 'modules/shared/GenericModal';
import CancelRequest from 'modules/trip/cancelRequest';
import { INFO_ROSTER } from 'constants/rosterTypes';

const DUPLICATE_TRIP_MSG = 'Looks like you have already put a request for this destination';

class LeadSubmittedStage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closeModal: true
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.activationMailSent && nextProps.activationMailSent) {
      this.props.showRoster({ type: INFO_ROSTER, message: nextProps.activationMailSuccessMsg });
    }
  }

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  callbackHandler = (type) => {
    const { currentTripId, reactivateBooking, sendActivationMail } = this.props;
    switch (type) {
      case 'Reactivate_Booking':
        reactivateBooking({ tripId: currentTripId });
        break;
      case 'Resend_Confirmation':
        sendActivationMail(currentTripId);
    }
  };

  getIcon = (link) => {
    switch (link.type) {
      case 'reactivate_requested_trip':
        return 'REACTIVATE_TRIP';
      case 'send_activation_mail':
        return 'INACTIVE_USER';
      case 'edit_requested_trip':
        return 'INCOMPLETE_INFO';
      default:
        return 'DEFAULT';
    }
  };

  getCta = (link) => {
    const { currentTripId } = this.props;

    switch (link.type) {
      case 'reactivate_requested_trip':
        return <button className='btn-filled-pri-large wfull'
                       onClick={() => this.callbackHandler('Reactivate_Booking')}>Undo
          Cancel</button>;
      case 'cancel_requested_trip':
        return (<Modal fullView={true} hasCustomClose={true}
                       trigger={<span className='f14 fw7 pfc3' onClick={this.trackSegmentEvents}>Cancel Request</span>}
                       customCloseTrigger={this.state.closeModal}>
          <div className='sbcw'>
            <CancelRequest closeModal={this.closePopup} tripId={currentTripId} />
          </div>
        </Modal>);
      case 'send_activation_mail':
        return (<div><span className='text-center pb8 iblock wfull'>Didn't receive email</span>
          <button className='btn-filled-pri wfull' onClick={() => this.callbackHandler('Resend_Confirmation')}>Resend
            Confirmation Link
          </button>
        </div>);
      case 'edit_requested_trip':
        return (<Link className='btn-filled-pri wfull at_editPreferencesBtn' to={link.url}>Edit Preferences</Link>);
      case 'show_requested_trip':
      case 'home_path':
        return <Link to={link.url}>{capitalizeEveryFirstLetter(link.label)}</Link>;
      case 'booked_outside':
        return <Link to={link.url} target={'_blank'}>{capitalizeEveryFirstLetter(link.label)}</Link>;
      default:
        return '';
    }
  };

  getParsedMessage = (message) => {
    let finalMessage = message.message;

    if (finalMessage.includes(DUPLICATE_TRIP_MSG)) {
      const messageParts = finalMessage.split('\n');
      finalMessage = messageParts.slice(0, messageParts.length - 1).join('\n');
    }

    message.links.map(link => {
      if (link.type === 'send_activation_mail') {
        const messageParts = finalMessage.split('\n');
        finalMessage = messageParts.slice(0, messageParts.length - 2).join('\n');
      }

      finalMessage = finalMessage.replace(`{{${link.type}}}`, link.label);
    });

    return finalMessage;
  };

  trackSegmentEvents = (event, section, object = '', cta = '') => {
    rescue(() => {
      this.props.trackSegment({
        event,
        section,
        object,
        cta
      });
    });
  };

  getMessageObject = (noQuotesMsg) => {

    const header = noQuotesMsg.header;
    const message = this.getParsedMessage(noQuotesMsg);
    const ctas = [];
    let icon = 'DEFAULT';

    if (message.includes(DUPLICATE_TRIP_MSG)) {
      ctas.push(<a href={`mailto:${TT_EMAIL}`}
                   className='radius2 sfc1 block flexFull flex text-center alignCenter justifyCenter mr5 at_emailUs_CTA'
                   onClick={() => this.trackSegmentEvents(ORGANISM_CLICKED, 'Duplicate lead created section', '', 'Email Us')}>Email
        Us</a>);
      ctas.push(<a href={`tel:${TT_PHONE}`}
                   className='radius2 sfc1 block flexFull flex text-center alignCenter justifyCenter ml5 at_callUs_CTA'
                   onClick={() => this.trackSegmentEvents(ORGANISM_CLICKED, 'Duplicate lead created section', '', 'Call us')}>Call
        Us</a>);
      icon = 'DUPLICATE_TRIP';
    }
    else {
      if (noQuotesMsg.links && noQuotesMsg.links.length) {
        icon = this.getIcon(noQuotesMsg.links[0]) || 'DEFAULT';
        ctas.push(this.getCta(noQuotesMsg.links[0]));
      }
    }

    return {
      header,
      message,
      ctas,
      icon
    };
  };

  render() {
    const { currentTripId, trips } = this.props;
    const currentTrip = trips.byId[currentTripId];
    const message = currentTrip.noQuotesMsg
      ? this.getMessageObject(currentTrip.noQuotesMsg)
      : {
        header: '',
        message: 'Please wait while we are working on your request.',
        ctas: [],
        icon: 'DEFAULT'
      };

    return <RequestProcessingCard message={message} trackSegment={this.trackSegmentEvents} />;
  }
}

LeadSubmittedStage.propTypes = {
  currentTripId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]).isRequired,
  trips: PropTypes.object,
  activationMailSent: PropTypes.bool,
  activationMailSuccessMsg: PropTypes.string,
  sendActivationMail: PropTypes.func.isRequired,
  reactivateBooking: PropTypes.func.isRequired,
  showRoster: PropTypes.func.isRequired,
  trackSegment: PropTypes.func
};

export default LeadSubmittedStage;
