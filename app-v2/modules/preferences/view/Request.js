import React from 'react';
import PropTypes from 'prop-types';

import { TRIP_STAGES } from '../constants';
import { RequestIcon } from 'helpers/Icon/Icon';
import { GPreferenceDiv } from './G';
import Modal from 'modules/shared/GenericModal';
import RequestEditForm from '../edit/Request';
import EditPreferencesPopup from '../components/EditPreferencesPopup';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import { format } from 'helpers/DateTime';

class Request extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closeModal: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.updated && nextProps.updated) {
      this.closeModal();
    }
  }

  trackSegmentEvent = (event, section, object, cta) => {
    rescue(() => {
      this.props.trackSegment(event, section, object, cta);
    });
  };

  updateRequestPreference = (values) => {
    const params = {
      requested_trip: {
        to_loc: values.destination,
        from_loc: values.departureCity,
        start_date: values.departureDate,
        trip_days: values.tripDays,
        adult: values.adults,
        child: values.children,
        trip_stage: values.tripStage
      }
    };
    this.trackSegmentEvent(ORGANISM_CLICKED, 'request', '', 'Confirm');
    this.props.handleSubmit(this.props.currentTripId, params);
  };

  closeModal = () => {
    this.setState({ closeModal: true });
  };

  handleClick = () => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Edit preferences window', 'request', 'edit');
    this.setState({ closeModal: false });
  };

  afterModalClose = () => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'request', '', 'Cancel');
  };

  render() {
    const { preferences, isConvertedTrip, isCancelledTrip, opDetails, errors } = this.props;
    const tripStage = TRIP_STAGES.options.find(option => option.id === preferences.tripStage);

    return (
      <div className='sbcw p15 pb0 at_request'>
        <div className='flex alignCenter spaceBetween mb15'>
          <h6 className='flex alignCenter f16 fw9 m0 flexFull'>
            <span className='block input-24 mr8'><RequestIcon /></span>
            <span className="sfc6 at_headingRequest">Request</span>
          </h6>
          {!isConvertedTrip || isCancelledTrip ?
            <Modal
              trigger={<span className='sfc1 f14 fw7 at_edit2' onClick={this.handleClick}>Edit</span>}
              fullView={true}
              hasCustomClose={true}
              customCloseTrigger={this.state.closeModal}
              onRequestCloseCustom={this.afterModalClose}
            >
              <RequestEditForm initialValues={preferences} errors={errors} onSubmit={this.updateRequestPreference} />
            </Modal> :
            <Modal trigger={<span className='sfc1 f14 fw7 at_edit2'>Edit</span>}>
              <EditPreferencesPopup opDetails={opDetails} closeModal={this.closeModal} />
            </Modal>}
        </div>
        <div className='flex flexWrap'>
          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Destination</p>
            <p className='at_destination'>{preferences.destination}</p>
          </GPreferenceDiv>

          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Departure City</p>
            <p className='at_departureCity'>{preferences.departureCity}</p>
          </GPreferenceDiv>

          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Departure Date</p>
            <p className='at_departureDate'>
              {preferences.departureDate && format(preferences.departureDate, 'DD MMM YYYY')}</p>
          </GPreferenceDiv>

          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Duration</p>
            <p className='at_duration'>{`${preferences.days} Days & ${preferences.nights} Nights`}</p>
          </GPreferenceDiv>

          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Travelers</p>
            <p className='at_travelers'>{`${preferences.adults} Adults & ${preferences.children} Children`}</p>
          </GPreferenceDiv>

          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Trip Planning Stage</p>
            <p className='at_tripStage'>{tripStage && tripStage.name || '-'}</p>
          </GPreferenceDiv>
        </div>
      </div>
    );
  }
}

Request.propTypes = {
  currentTripId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  preferences: PropTypes.object,
  opDetails: PropTypes.object,
  isConvertedTrip: PropTypes.bool,
  isCancelledTrip: PropTypes.bool,
  updated: PropTypes.bool,
  errors: PropTypes.array,
  handleSubmit: PropTypes.func,
  trackSegment: PropTypes.func
};

Request.defaultProps = {
  isConvertedTrip: false
};

export default Request;
